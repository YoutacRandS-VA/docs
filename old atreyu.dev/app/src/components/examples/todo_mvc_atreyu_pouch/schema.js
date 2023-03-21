/* globals localStorage */
/* eslint quote-props: ['error', 'as-needed', { 'keywords': true, 'unnecessary': false }] */
import merge from 'https://unpkg.com/lodash-es@4.17.21/merge.js'

const startKeys = {
  all: {},
  completed: {},
  active: {}
}
self.startKeys = startKeys

const paths = {
  '/examples/todo_mvc_atreyu_pouch(/:view)': {
    name: 'todos',
    get: {
      tags: ['window']
    }
  },

  '[{keys:views}].length': {
    get: {
      tags: ['falcor'],
      handler: async ({ views, pouch }) => {
        const counters = await pouch.query('index', {
          group_level: 1,
          group: true,
          reduce: true
        })

        const viewMap = new Map([
          [null, 'all'],
          [true, 'completed'],
          [false, 'active']
        ])

        const values = {}
        counters.rows.forEach(({ key, value }) => {
          values[viewMap.get(key[0])] = value
        })

        return views.map(view => ({
          path: [view, 'length'],
          value: values[view] || 0
        }))
      }
    }
  },

  'byId[{keys:ids}].[{keys:keys}]': {
    get: {
      tags: ['falcor'],
      handler: async ({ ids, keys, pouch }) => {
        const pouchRes = await pouch.allDocs({
          include_docs: true,
          keys: ids
        })

        const missingIds = []
        const byId = {}

        pouchRes.rows.forEach(row => {
          if (row.error === 'not_found') {
            missingIds.push(row.key)
          } else if (!row.error) {
            if (row.doc) {
              byId[row.key] = row.doc
            } else {
              console.error(row)
            }
          } else {
            console.error(row)
          }
        })

        // const res = {}
        // ids.forEach(id => {
        //   res[id] = {}
        //   keys.forEach(key => {
        //     res[id][key] = byId[id][key]
        //   })
        // })
        // return {
        //   jsonGraph: {
        //     byId: res
        //   }
        // }
        return {
          jsonGraph: {
            byId
          }
        }
      }
    },
    set: {
      tags: ['falcor'],
      handler: jsonGraph => {
        merge(byId, jsonGraph.byId)

        return {
          jsonGraph: {
            byId: jsonGraph.byId
          }
        }
      }
    }
  },

  '[{keys:views}][{ranges:indexRanges}][{keys:keys}]': {
    get: {
      tags: ['falcor'],
      handler: async ({ views, indexRanges, keys, pouch }) => {
        const { from, to } = indexRanges.reduce((result, range) => {
          if (!result) {
            return range
          }

          return {
            from: Math.min(result.from, range.from),
            to: Math.max(result.to, range.to)
          }
        })

        const endKeys = {
          all: [null],
          completed: [true],
          active: [false]
        }

        const defStartKeys = {
          all: [null, {}, {}],
          completed: [true, {}, {}],
          active: [false, {}, {}]
        }

        const queries = views.map(view => {
          let startkey = defStartKeys[view]
          let skip = from
          let ix
          for (ix = from; ix >= 0; ix--) {
            if (startKeys[view][ix]) {
              startkey = startKeys[view][ix]
              skip = from - ix
              break
            }
          }
          const limit = to - from + 1

          // from: 6352 to: 6352 || 6352
          // ix: 306
          // limit: 1
          // skip: 6046


          // from: 15 to: 27  || 15 16 17 18 19 20 21 22 23 24 25 26 27
          // ix: 14
          // limit: 13
          // skip: 1

          return pouch
            .query('index', {
              startkey,
              endkey: endKeys[view],
              reduce: false,
              include_docs: true,
              limit,
              skip,
              descending: true
            })
              .then(({ total_rows, rows, offset }) => {
                if (!rows || !rows.length) {
                  console.log({ from, to, limit, skip, ix, startkey, startKeys})
                  return
                }

                lastI = rows.length - 1

                startKeys[view][lastI + from] = rows[lastI].key

                return rows.flatMap((row, i) => {
                  return [
                    {
                      path: [view, i + from],
                      value: { $type: 'ref', value: ['byId', row.doc._id] }
                    },
                    ...keys.map(key => ({
                      path: ['byId', row.doc._id, key],
                      value: row.doc[key]
                    }))
                  ]
                })
              })
              .catch(err => {
                console.log(err)
              })
        })

        return Promise.all(queries).then(ress => ress.flat())
      }
    }
  },

  create: {
    call: {
      tags: ['falcor'],
      handler: async ({ pouch }, [description]) => {
        function uuidv4 () {
          return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
            /[xy]/g,
            function (c) {
              const r = (Math.random() * 16) | 0

              const v = c == 'x' ? r : (r & 0x3) | 0x8
              return v.toString(16)
            }
          )
        }
        const todo = {
          _id: 'jan:' + uuidv4(),
          description,
          completed: false,
          date: Date.now()
        }

        const res = await pouch.put(todo)
        todo._rev = res.rev

        return [
          {
            path: ['byId', todo._id, ['description', 'completed', '_id']],
            value: todo
          },
          {
            path: [['all', 'active']],
            invalidated: true
          }
        ]
      }
    }
  },

  remove: {
    call: {
      tags: ['falcor'],
      handler: (_pathSet, [id]) => {
        delete byId[id]

        return [
          {
            path: ['byId', id],
            invalidated: true
          },
          {
            path: [['all', 'active', 'completed']],
            invalidated: true
          }
        ]
      }
    }
  },

  clearCompleted: {
    call: {
      tags: ['falcor'],
      handler: () => {
        const deleted = []
        getView('all').forEach(item => {
          if (item.completed) {
            deleted.push(item.id)
            delete byId[item.id]
          }
        })

        return [
          {
            path: ['byId', deleted],
            invalidated: true
          },
          {
            path: [['all', 'completed']],
            invalidated: true
          }
        ]
      }
    }
  },

  toggleAll: {
    call: {
      tags: ['falcor'],
      handler: (_pathSet, [completed]) => {
        const changed = []
        Object.keys(byId).forEach(id => {
          if (byId[id].completed !== completed) {
            changed.push(id)
            byId[id].completed = completed
          }
        })

        return [
          {
            path: ['byId', changed, 'completed'],
            value: completed
          },
          {
            path: [['active', 'completed']],
            invalidated: true
          }
        ]
      }
    }
  },

  toggle: {
    call: {
      tags: ['falcor'],
      handler: async ({ pouch }, [_id, view, index, length]) => {
        const doc = await pouch.get(_id)
        const response = await pouch.put({
          _id,
          _rev: doc._rev,
          description: doc.description,
          completed: !doc.completed,
          date: doc.date
        })
        const views = ['completed', 'active']
        const pathSets = [
          {
            path: ['byId', _id, 'completed'],
            value: !doc.completed
          },
          {
            path: [views.filter(k => k !== view)],
            invalidated: true
          }
        ]

        if (view !== 'all') {
          pathSets.push({
            path: [view, [{ from: index, to: length }, 'length']],
            invalidated: true
          })
        }

        return pathSets
      }
    }
  }
}

module.exports = { paths }

/* globals localStorage */
import merge from 'lodash/merge'

let byId = {}
try {
  byId = JSON.parse(localStorage.getItem('atreyu-cache')) || {}
} catch (err) {
  byId = {}
}

function save () {
  try {
    localStorage.setItem('atreyu-cache', JSON.stringify(byId))
  } catch (err) {
    console.log(err)
  }
}

function getView (view) {
  return {
    all: Object.values(byId),
    active: Object.values(byId).filter(item => !item.completed),
    completed: Object.values(byId).filter(item => item.completed)
  }[view]
}

export default { paths: {
  '[{keys:views}].length': {
    get: {
      tags: ['falcor'],
      handler: ({ views }) => views.map(view => ({
        path: [view, 'length'],
        value: getView(view).length
      }))
    }
  },
  'byId[{keys:ids}].[{keys:keys}]': {
    get: {
      tags: ['falcor'],
      handler: ({ ids, keys }) => {
        const res = {}
        ids.forEach(id => {
          res[id] = {}
          keys.forEach(key => {
            res[id][key] = byId[id][key]
          })
        })

        return {
          jsonGraph: {
            byId: res
          }
        }
      }
    },
    set: {
      tags: ['falcor'],
      handler: jsonGraph => {
        merge(byId, jsonGraph.byId)
        save()

        return {
          jsonGraph: {
            byId: jsonGraph.byId
          }
        }
      }
    }
  },
  '[{keys:views}][{ranges:indexRanges}]': {
    get: {
      tags: ['falcor'],
      handler: ({ views, indexRanges }) => views.flatMap(view => getView(view).map((todo, i) => ({
        path: [view, i],
        value: { $type: 'ref', value: ['byId', todo._id] }
      })))
    }
  },
  'create': {
    call: {
      tags: ['falcor'],
      handler: (_pathSet, [description]) => {
        const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)

        byId[id] = {
          _id: id,
          description,
          completed: false
        }
        save()

        return [
          {
            path: ['byId', id],
            value: byId[id]
          },
          {
            path: [['all', 'active']],
            invalidated: true
          }
        ]
      }
    }
  },
  'remove': {
    call: {
      tags: ['falcor'],
      handler: (pathSet, [id]) => {
        delete byId[id]
        save()

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
  'clearCompleted': {
    call: {
      tags: ['falcor'],
      handler: () => {
        const deleted = []
        getView('all').forEach(item => {
          if (item.completed) {
            deleted.push(item._id)
            delete byId[item._id]
          }
        })
        save()

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
  'toggleAll': {
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
        save()

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
  'toggle': {
    call: {
      tags: ['falcor'],
      handler: (_pathSet, [id]) => {
        byId[id].completed = !byId[id].completed
        save()

        return [
          {
            path: ['byId', id, 'completed'],
            value: byId[id].completed
          },
          {
            path: [['active', 'completed']],
            invalidated: true
          }
        ]
      }
    }
  }
}}

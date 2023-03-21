const { writable, derived } = require('svelte/store')

function uuid () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = Math.random() * 16 | 0
    let v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

const { subscribe, update, set } = writable({})

export const todos = {
  subscribe,

  update,

  set,

  create: description => {
    const id = uuid()
    update(todos => {
      todos[id] = {
        _id: id,
        description: description,
        completed: false
      }
      return todos
    })
  },

  remove: id => {
    update(todos => {
      delete todos[id]
      return todos
    })
  },

  clearCompleted: () => {
    update(todos => {
      Object.values(todos).forEach(item => {
        if (item.completed) {
          delete todos[item._id]
        }
      })
      return todos
    })
  },

  toggle: id => {
    update(todos => {
      todos[id].completed = !todos[id].completed
      return todos
    })
  },

  toggleAll: checked => {
    update(todos => {
      Object.keys(todos).forEach(id => {
        todos[id].completed = checked
      })
      return todos
    })
  }
}

export const views = derived(
  todos,
  $todos => {
    return {
      all: Object.values($todos),
      active: Object.values($todos).filter(item => !item.completed),
      completed: Object.values($todos).filter(item => item.completed)
    }
  },
  {
    all: [],
    active: [],
    completed: []
  }
)

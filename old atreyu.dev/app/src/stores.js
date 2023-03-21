const { writable } = require('svelte/store')
const { makeDataStore } = require('atreyu')

const data = makeDataStore({
  cache: {
    userId: 'abcd',
    user: {
      name: 'Peter',
      email: 'peter@brews.beer',
      address: {
        street: 'Demostreet',
        city: 'Cohawq'
      }
    }
  }
})

window.workerDebug = data

export { data }

export const ui = writable({
  modal: false
})

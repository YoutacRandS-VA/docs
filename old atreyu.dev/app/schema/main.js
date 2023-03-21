/* eslint quote-props: ['error', 'as-needed', { 'keywords': true, 'unnecessary': false }] */
let counter = 0
const { paths } = require('../src/components/examples/todo_mvc_atreyu_pouch/schema')

export const schema = {
  paths: {
    // http routes
    '/:page(/*_)': {
      get: { tags: ['window'] }
    },
    '/examples/:slug(/*_)': {
      get: { tags: ['window'] }
    },

    // todo_mvc_atreyu_pouch routes
    ...paths,

    'counter': {
      get: {
        tags: ['worker', 'falcor'],
        handler: () => ({
          path: ['counter'],
          value: { $type: 'atom', value: counter }
        })
      },
      set: {
        tags: ['worker', 'falcor'],
        handler: args => {
          counter = args.counter
          return {
            path: ['counter'],
            value: { $type: 'atom', value: counter }
          }
        }
      }
    }
  }
}

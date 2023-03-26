import schema from './schema'
import { makeDataStore, makeRouter } from 'atreyu'
const { toFalcorRoutes } = require('atreyu')
const falcorRoutes = toFalcorRoutes(schema)
const Router = makeRouter(falcorRoutes)

export default makeDataStore({
  cache: {},
  source: new Router({})
})

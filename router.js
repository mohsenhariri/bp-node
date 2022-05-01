import {handleErr} from './lib/errorHandler.js'
import root from './controller/root.js'

import testRedis from './controller/test/redis.js'
import testMongo from './controller/test/mongo.js'

const router = (app) => {
  try {
    app.get('/', root)
    app.get('/test/redis', testRedis)
    app.get('/test/mongo', testMongo)
  } catch (err) {
    handleErr(err, 'Router')
  }
}

export default router

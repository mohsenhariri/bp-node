import {handleErr} from './lib/errorHandler.js'
import root from './controller/root.js'

import testSignUp from './controller/auth/signup/test.js'
import testRedis from './controller/test/redis.js'

const router = (app) => {
  try {
    app.get('/', root)
    app.get('/test/redis', testRedis)

  } catch (err) {
    handleErr(err, 'Router')
  }
}

export default router

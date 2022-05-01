import { handleErr } from './lib/errorHandler.js'
import root from './controller/root.js'

import testSignUp from './controller/auth/signup/test.js'

const router = (app) => {
  try {
    app.get('/', root)

    app.get('/test', testSignUp)

    // app.get('/helper/generateuser', insert)
    
  } catch (err) {
    handleErr(err, 'Router')
  }
}

export default router

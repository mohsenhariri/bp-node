// import { handleErr } from './lib/errorHandler.js'

import testSignUp from './controller/auth/signup/test.js'

const router = (app) => {
  try {
    app.get('/', (req, res) => {
      res.json({name: 'test21'})
    })

    app.get('/test', testSignUp)

    // app.get('/helper/generateuser', insert)
  } catch (err) {
    handleErr(err, 'Router')
  }
}

export default router

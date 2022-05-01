// import { handleErr } from './lib/errorHandler.js'

const router = (app) => {
  try {
    app.get('/', (req, res) => {
      res.send('ok')
    })

    // app.get('/helper/generateuser', insert)
  } catch (err) {
    handleErr(err, 'Router')
  }
}

export default router

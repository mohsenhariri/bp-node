// import { handleErr } from './lib/errorHandler.js'

const router = (app) => {
  try {
    app.get('/', (req, res) => {
      res.json({name: 'test21'})
    })

    app.get('')

    // app.get('/helper/generateuser', insert)
  } catch (err) {
    handleErr(err, 'Router')
  }
}

export default router

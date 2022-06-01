import express from 'express'
import helmet from 'helmet'
import compression from 'compression'

const expressApp = () => {
  const app = express()

  app.use(helmet())
  app.use(compression())
  app.use(express.json())
  app.use(express.urlencoded({extended: false}))
  app.use('/static', express.static('uploads'))
  app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', process.env.origin)
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Content-Type, x-auth-token, x-powered-by'
    )
    // res.header('Access-Control-Expose-Headers', 'x-auth-token')
    res.header('x-powered-by', 'kashk.js') // I love this silly name :)
    next()
  })
  return app
}

export default expressApp

'use strict'
console.log(`************* ${process.env.NODE_ENV} ****************`)
import expressApp from './init/express.config.js'
import {port, host, protocol, version, mongoURL} from './init/const.js'
import {handleErr} from './lib/errorHandler.js'

console.log('mohsen', mongoURL)

import router from './router.js'
;(async () => {
  try {
    const app = expressApp()
    router(app)

    app.listen(port, () => {
      console.log(`
    > Server is listening on port ${port} as ${
        process.env.NODE_ENV === 'production' ? 'production' : 'development'
      } \r
    > Ready on ${protocol}://${host}:${port} \r
    > Version: ${version}`)
    })
    // if (process.env.NODE_ENV === 'development') {
    //   let { devApp } = await import('./dev/app.js')
    //   devApp(expressApp)
    // }
  } catch (err) {
    handleErr(err, 'MainApp')
  }
})()

process.on('uncaughtException', (err) => handleErr(err, 'UncaughtException'))

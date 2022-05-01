import { appendFile } from 'fs'

const writeLog = (err, type) => {
  const path = `./log/${type}.log`
  const log = `Time: ${new Date()}, Error: ${err.stack}\n`
  appendFile(path, log, errOnAppend => errOnAppend && console.log(errOnAppend))
}

class Err extends Error {
  constructor(code, message) {
    super()
    this.code = code
    this.message = message
  }
}

const resErr = (err, res) => {
  const code = err.code ? err.code : 500
  const message = err.message ? err.message : 'Internal Server Error :('

  if (code === 500) {
    if (process.env.NODE_ENV === 'development') console.log('Server', err)

    writeLog(err, 'Server')
  }

  if (err.code === 121) {
    writeLog(err, 'Database')
    return res.status(500).json({ message })
  }
  return res.status(code).json({ message })
}

const handleErr = (err, type) => {
  if (process.env.NODE_ENV === 'development') console.log(type, err)
  writeLog(err, type)
  // switch(type)
  // process.exit(0)
}

export { resErr, handleErr }
export default Err
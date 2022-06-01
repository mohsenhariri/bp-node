// import packageConfig from '../package.json'
// const { version } = packageConfig
const version = process.env.version || 'dev:nodemon'
const {
  port,
  host,
  protocol,
  mongoURL,
  mongoPort,
  dbName,
  redisPort,
  privateSecretKey,
} = process.env

export {
  port,
  host,
  protocol,
  version,
  mongoURL,
  mongoPort,
  dbName,
  privateSecretKey,
  redisPort,
}

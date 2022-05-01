import {createClient} from 'redis'
// import {handleErr} from '../lib/errorHandler.js'
import {redisPort as port} from './const.js'

const client = createClient({socket: {port}})

client.on('error', (err) => {
  console.log('REDIS ERROR')
  throw new Error(err)
})

client.on('connect', () => console.log('* Redis client connected'))

await client.connect()

export default client

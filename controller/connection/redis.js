import client from '../../init/redis.config.js'

const testRedis = async (_, res) => {
  try {
    const resultSet = await client.HSET('key', 'field', 'value')
    const resultGet = await client.HGET('key', 'field')
    res.status(200).json({resultSet, resultGet})
  } catch (err) {
    console.log('error', err)
  }
}

export default testRedis

import {userCollection} from '../../../init/mongo.config.js'

import client from '../../../init/redis.config.js'


const testSignUp = async (req, res) => {
  try {

    const resultredis = await client.HSET('key', 'field', 'value');

    const user = {name: 'Mohsen', email: 'mhariri68@gmail.com'}

    const result = await userCollection.insertOne(user)

    console.log(result)

    const users = await userCollection.find({}).toArray()
    // console.log(users)

    res.json(users)
  } catch (err) {
    console.log('error in sign up',err)
  }
}

export default testSignUp

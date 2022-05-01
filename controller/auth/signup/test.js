import {userCollection} from '../../../init/mongo.config.js'

const testSignUp = async (req, res) => {
  try {
    const user = {name: 'Mohsen', email: 'mhariri68@gmail.com'}

    const result = await userCollection.insertOne(user)

    console.log(result)

    const users = await userCollection.find({}).toArray()
    // console.log(users)

    res.json(users)
  } catch (err) {
    console.log('error in sign up')
  }
}

export default testSignUp

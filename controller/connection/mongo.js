import {userCollection} from '../../init/mongo.config.js'

const testMongo = async (req, res) => {
  try {
    const user = {name: 'Mohsen', email: 'mhariri68@gmail.com'}

    const resultInsert = await userCollection.insertOne(user)

    const resultFind = await userCollection.find({}).toArray()

    res.status(200).json({resultInsert, resultFind})
  } catch (err) {
    console.log('error', err)
  }
}

export default testMongo

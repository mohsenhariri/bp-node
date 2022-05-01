import {MongoClient} from 'mongodb'
import {dbName, mongoPort, mongoURL} from './const.js'

const mongoDbUrl = `mongodb://${mongoURL}:${mongoPort}`

const client = new MongoClient(mongoDbUrl)

const connection = await client.connect()

const db = connection.db(dbName)

console.log('* MongoDB ready to store data')

const userCollection = db.collection('user')

export {userCollection}

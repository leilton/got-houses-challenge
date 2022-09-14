const mongoose = require('mongoose')
const { MongoMemoryReplSet } = require('mongodb-memory-server')

let mongoServer
let mongoOrm

jest.setTimeout(50000);

beforeAll(async () => {
  mongoServer = await MongoMemoryReplSet.create({ replSet: { count: 4}})
  mongoOrm = mongoose
  await mongoOrm.connect(mongoServer.getUri(),
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'mongodb_test',
      autoIndex: true
    }
  )
})

afterEach(async () => {
  const collections = mongoOrm.connection.collections;

  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany();
  }
})

afterAll(async () => {
  await mongoOrm.connection.close()
  await mongoServer.stop()
})
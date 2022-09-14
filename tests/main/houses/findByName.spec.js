const request = require('supertest');

const app = require('../../../app')
const { House } = require('../../../src/infra/models')

describe('findByName house route', () => {

  let houseMock = {
    name: "House Arryn of the Eyrie",
    region: "The Vale",
    founded: "Coming of the Andals",
    currentLord: "https://www.anapioficeandfire.com/api/characters/894"
  }

  it('GET /got/houses?:name - should return 404 if does not find any collection by name', async () => {
    const newHouse = new House(houseMock)
    await newHouse.save();

    const nameFilter = 'Yoda'

    const { status } = await request(app)
      .get(`/got/houses?name=${nameFilter}`)
    
    expect(status).toBe(404)
  })

  it('GET /got/houses?:name - should return 200 and one collection', async () => {
    const newHouse = new House(houseMock)
    await newHouse.save();

    const nameFilter = 'Arryn'
    
    const { status } = await request(app)
      .get(`/got/houses?name=${nameFilter}`)
    
    const regex = { "name": {'$regex': '.*' + nameFilter + '.*'} }

    const find = await House.findOne(regex)

    expect(status).toBe(200)
    expect(find.name).toContain(nameFilter)
  })
});

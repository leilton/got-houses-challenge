const request = require('supertest');

const app = require('../../../app')
const { House } = require('../../../src/infra/models')

describe('findAll house route', () => {

  let houseMock = {
    name: "House Arryn of the Eyrie",
    region: "The Vale",
    founded: "Coming of the Andals",
    currentLord: "https://www.anapioficeandfire.com/api/characters/894"
  }

  it('GET /got/houses - should return 202 and an empty collection', async () => {
    const { status, body } = await request(app)
      .get(`/got/houses`)
    expect(status).toBe(202)
  })

  it('GET /got/houses - should return 200 and all collection', async () => {
    const newHouse = new House(houseMock)
    await newHouse.save();
    
    const { status, body } = await request(app)
      .get(`/got/houses`)

    expect(status).toBe(200)
    expect(body.length).toBe(1)
  })
});

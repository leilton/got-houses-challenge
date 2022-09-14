const request = require('supertest');
const mongoose = require('mongoose')

const app = require('../../../app')
const { House } = require('../../../src/infra/models')

describe('findById house route', () => {
  let id = new mongoose.Types.ObjectId();

  let houseMock = {
    name: "House Arryn of the Eyrie",
    region: "The Vale",
    founded: "Coming of the Andals",
    currentLord: "https://www.anapioficeandfire.com/api/characters/894"
  }

  it('GET /got/houses/:id - should return 400 if ID is not 24 length', async () => {
    const { status } = await request(app)
      .get(`/got/houses/asdf`)
    
    expect(status).toBe(400)
  })

  it('GET /got/houses/:id - should return 404 if does not find any collection by id', async () => {
    const { status } = await request(app)
      .get(`/got/houses/${id}`)

    expect(status).toBe(404)
  })

  it('GET /got/houses/:id - should return 200 and one collection', async () => {
    const newHouse = new House(houseMock)
    await newHouse.save();
    
    const { status } = await request(app)
      .get(`/got/houses/${newHouse._id}`)

    expect(status).toBe(200)
  })
});

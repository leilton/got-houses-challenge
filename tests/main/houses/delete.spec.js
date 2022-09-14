const request = require('supertest');
const mongoose = require('mongoose')

const app = require('../../../app')
const { House } = require('../../../src/infra/models')

describe('Delete house route', () => {
  let id = new mongoose.Types.ObjectId();

  let houseMock = {
    name: "House Arryn of the Eyrie",
    region: "The Vale",
    founded: "Coming of the Andals",
    currentLord: "https://www.anapioficeandfire.com/api/characters/894"
  }

  it('DELETE /got/houses/:id - should return 400 if ID is not 24 length', async () => {
    const { status } = await request(app)
      .delete(`/got/houses/asdf`)
    
    expect(status).toBe(400)
  })

  it('DELETE /got/houses/:id - should return 204 if does not find any collection by id', async () => {
    const { status } = await request(app)
      .delete(`/got/houses/${id}`)

    expect(status).toBe(404)
  })

  it('DELETE /got/houses/:id - should return 200 and no collection', async () => {
    const newHouse = new House(houseMock)
    await newHouse.save();
    const house = await House.findById(newHouse._id)
    expect(String(house._id)).toBe(String(newHouse._id))

    const { status, body } = await request(app)
      .delete(`/got/houses/${newHouse._id}`)

    const deletedHouse = await House.findById(newHouse._id)

    expect(status).toBe(200)
    expect(body.message).toBe('House successfully deleted')
    expect(deletedHouse).toBe(null)
  })
});

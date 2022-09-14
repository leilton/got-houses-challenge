const request = require('supertest');
const mongoose = require('mongoose')

const app = require('../../../app')
const { House } = require('../../../src/infra/models')

describe('Create house route', () => {
  let houseMock = {
    name: "House Arryn of the Eyrie",
    region: "The Vale",
    founded: "Coming of the Andals",
    currentLord: "https://www.anapioficeandfire.com/api/characters/894"
  }

  it('POST /got/houses - should return 400 if there`s no name', async () => {
    const { status } = await request(app)
      .post(`/got/houses`)
      .send({ region: houseMock.region })
    
    expect(status).toBe(400)
  })

  it('POST /got/houses - should return 400 if there`s no region', async () => {
    const { status } = await request(app)
      .post(`/got/houses`)
      .send({ name: houseMock.name })

    expect(status).toBe(400)
  })

  it('POST /got/houses - should return 202 if name it already exists', async () => {
    await request(app)
      .post(`/got/houses`)
      .send(houseMock)

    const { status, body } = await request(app)
      .post(`/got/houses`)
      .send(houseMock)

    expect(status).toBe(202)
    expect(body.message).toBe('House already exists')
  })

  it('POST /got/houses - should return 200 and a success message', async () => {
    const { status, body } = await request(app)
      .post(`/got/houses`)
      .send(houseMock)

    expect(status).toBe(200)
    expect(body.message).toBe('House registered successfully')

    const createdHouse = await House.find()

    expect(createdHouse[0].name).toBe('House Arryn of the Eyrie')
    expect(createdHouse[0].region).toBe('The Vale')
  })
});

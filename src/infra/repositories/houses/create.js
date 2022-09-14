'use strict'
const { House } = require('../../models')

const createHouse = async (data) => {
  const newHouse = new House(data);
  return await newHouse.save();
}

module.exports = createHouse
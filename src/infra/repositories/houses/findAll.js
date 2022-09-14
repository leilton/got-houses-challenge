'use strict';
const { House } = require('../../models')

const findAllHouses = async() => {
  return await House.find({}).sort({createdAt: -1});
}

module.exports = findAllHouses;
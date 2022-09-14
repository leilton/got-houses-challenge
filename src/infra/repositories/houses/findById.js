'use strict';
const { House } = require('../../models')

const findHouseById = async(_id) => {
  return await House.findOne({_id});
}

module.exports = findHouseById;
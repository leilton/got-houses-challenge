'use strict';
const { House } = require('../../models')

const deleteHouse = async(id) => {
  return await House.deleteOne({_id : id});
}

module.exports = deleteHouse;
'use strict';
const { House } = require('../../models')

const findHouseByOneParam = async(param) => {
  const { name } = param;

  if(name){
    const filter = { "name": {'$regex': '.*' + name + '.*'} }
    return await House.findOne(filter)
  }

  return await House.findOne(param);
}

module.exports = findHouseByOneParam;
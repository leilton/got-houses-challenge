const { buildCheckFunction } = require('express-validator');
const checkBody = buildCheckFunction(['body']);

module.exports = [
  checkBody('name').exists().isString(),
  checkBody('region').exists().isString(),
  checkBody('founded').optional().isString(),
  checkBody('currentLord').optional().isString(),
]
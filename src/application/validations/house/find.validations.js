const { buildCheckFunction } = require('express-validator');
const checkQuery = buildCheckFunction(['query']);

module.exports = [
  checkQuery('name').optional().isString()
]
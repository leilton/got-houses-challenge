const { buildCheckFunction } = require('express-validator');
const checkParam = buildCheckFunction(['params']);

module.exports = [
  checkParam('id').exists().isLength({ min:24, max:24 }).isString()
]
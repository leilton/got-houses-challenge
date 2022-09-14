const { FindHouseService } = require('../../../data/house')
const { FindHouseController } = require('../../../application/controllers/houses')
const { findAll, findHouseByOneParam } = require('../../../infra/repositories/houses')
const { erroConstructor } = require('../../../application/error')

module.exports = makeDeleteController = async () => {
  const service = new FindHouseService( findAll, findHouseByOneParam, erroConstructor )
  return new FindHouseController(service);
}
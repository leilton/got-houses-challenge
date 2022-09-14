const { FindHouseByIdService } = require('../../../data/services/house')
const { FindHouseByIdController } = require('../../../application/controllers/houses')
const { findHouseById } = require('../../../infra/repositories/houses')
const { erroConstructor } = require('../../../application/error')

module.exports = makeFindByIdController = async () => {
  const service = new FindHouseByIdService( findHouseById, erroConstructor )
  return new FindHouseByIdController(service);
}
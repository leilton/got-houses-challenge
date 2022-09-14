const { DeleteHouseService } = require('../../../data/house')
const { DeleteHouseController } = require('../../../application/controllers/houses')
const { findHouseById, deleteHouse } = require('../../../infra/repositories/houses')
const { erroConstructor } = require('../../../application/error')

module.exports = makeDeleteController = async () => {
  const service = new DeleteHouseService( findHouseById, deleteHouse, erroConstructor )
  return new DeleteHouseController(service);
}
const { CreateHouseService } = require('../../../data/house')
const { CreateHouseController } = require('../../../application/controllers/houses')
const { createHouse, findHouseByOneParam } = require('../../../infra/repositories/houses')
const { erroConstructor } = require('../../../application/error')

module.exports = makeCreateController = async () => {
  const service = new CreateHouseService( createHouse, findHouseByOneParam, erroConstructor )
  return new CreateHouseController(service);
}
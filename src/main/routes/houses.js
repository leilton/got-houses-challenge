'use strict';
const { adaptExpressRoute } = require('../adapters/express-router')

const { 
  createValidationHouse, 
  deleteValidationHouse,
  findByIdValidationHouse,
  findValidationHouse
} = require('../../application/validations/house')

const { 
  makeCreateHouseFactory, 
  makeDeleteHouseFactory,
  makeFindByIdController,
  makeFindController
} = require('../factories/houses')

const houseRoutes = async (router) => {
  router.post('/houses',
    createValidationHouse,
    adaptExpressRoute(await makeCreateHouseFactory())
  );
  
  router.delete('/houses/:id',
    deleteValidationHouse,
    adaptExpressRoute(await makeDeleteHouseFactory())
  );
  
  router.get('/houses/:id',
    findByIdValidationHouse,
    adaptExpressRoute(await makeFindByIdController())
  );
  
  router.get('/houses',
    findValidationHouse,
    adaptExpressRoute(await makeFindController())
  );
}

module.exports = houseRoutes;
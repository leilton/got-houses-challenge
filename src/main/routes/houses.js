'use strict';
const { adaptExpressRoute } = require('../adapters/express-router')

const { 
  createValidationHouse, 
  deleteValidationHouse,
  findByIdValidationHouse
} = require('../../application/validations/house')

const { 
  makeCreateHouseFactory, 
  makeDeleteHouseFactory,
  makeFindByIdController
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
}

module.exports = houseRoutes;
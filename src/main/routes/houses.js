'use strict';
const { adaptExpressRoute } = require('../adapters/express-router')

const { createValidationHouse, deleteValidationHouse } = require('../../application/validations/house')

const { makeCreateHouseFactory, makeDeleteHouseFactory } = require('../factories/houses')

const houseRoutes = async (router) => {
  router.post('/houses',
    createValidationHouse,
    adaptExpressRoute(await makeCreateHouseFactory())
  );
  
  router.delete('/houses/:id',
    deleteValidationHouse,
    adaptExpressRoute(await makeDeleteHouseFactory())
  );
}

module.exports = houseRoutes;
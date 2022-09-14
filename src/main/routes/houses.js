'use strict';
const { adaptExpressRoute } = require('../adapters/express-router')

const { createValidationHouse } = require('../../application/validations/house')

const { makeCreateHouseFactory } = require('../factories/houses')

const houseRoutes = async (router) => {
  router.post('/houses',
    createValidationHouse,
    adaptExpressRoute(await makeCreateHouseFactory())
  );
}

module.exports = houseRoutes;
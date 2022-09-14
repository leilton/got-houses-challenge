const { Router } = require('express');

exports.setupRoutes = async (app) => {
  const router = Router();
  
  if(process.env.NODE_ENV !== 'test') {
    (await import('../routes/houses.js')).default(router);
  } else {
    (await require('../routes/houses.js'))(router);
  }

  app.use('/got', router);
};
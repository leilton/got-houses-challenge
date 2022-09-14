const { validationResult } = require('express-validator');
const { erroConstructor } = require('../error');

class Controller {
  async validate(req) {
    const errorValidation = validationResult(req).isEmpty();

    
    if(!errorValidation) {
      const validation = validationResult(req);
      await erroConstructor(400, validation.errors);
    }
  }
}

module.exports = Controller;
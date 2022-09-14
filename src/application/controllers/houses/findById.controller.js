const Controller = require('../controller');

class FindHouseByIdController extends Controller {

  constructor(findHouseByIdService) {
    super();
    this.findHouseById = findHouseByIdService;
  }

  async handle({ req, data }){
    try {
      await this.validate(req);

      const res = await this.findHouseById.execute(data);

      return { statusCode: 200, data: res };
    } catch (e) {
      return { statusCode: e.status ? e.status : 500, data: e };
    }
  }
}

module.exports = FindHouseByIdController;
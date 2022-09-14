const Controller = require('../controller');

class FindHouseController extends Controller {

  constructor(findHouseService) {
    super();
    this.findHouse = findHouseService;
  }

  async handle({ req, data }){

    try {
      await this.validate(req);

      const res = await this.findHouse.execute(data);

      return { statusCode: 200, data: res };
    } catch (e) {
      return { statusCode: e.status ? e.status : 500, data: e };
    }
  }
}

module.exports = FindHouseController;
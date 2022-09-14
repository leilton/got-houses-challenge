const Controller = require('../controller');

class CreateHouseController extends Controller {

  constructor(createHouseService) {
    super();
    this.createHouse = createHouseService;
  }

  async handle({ req, data }){
    try {
      await this.validate(req);

      const res = await this.createHouse.execute(data);

      return { statusCode: 200, data: res };
    } catch (e) {
      return { statusCode: e.status ? e.status : 500, data: e };
    }
  }
}

module.exports = CreateHouseController;
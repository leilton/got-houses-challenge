const Controller = require('../controller');

class DeleteHouseController extends Controller {

  constructor(deleteHouseService) {
    super();
    this.deleteHouse = deleteHouseService;
  }

  async handle({ req, data }){
    try {
      await this.validate(req);

      const res = await this.deleteHouse.execute(data);

      return { statusCode: 200, data: res };
    } catch (e) {
      return { statusCode: e.status ? e.status : 500, data: e };
    }
  }
}

module.exports = DeleteHouseController;
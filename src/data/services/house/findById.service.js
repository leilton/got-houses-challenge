const { requestApi } = require("../../helpers");

class FindHouseByIdService {
  constructor ( findHouseByIdRepositoy,errorConstructor) {
    this.findHouseById = findHouseByIdRepositoy;
    this.errorConstructor = errorConstructor;
  }

  async execute({id}) {
    const house = await this.findHouseById(id);
    
    if(house) {
      const { currentLord } = house
      
      if(currentLord) {
        const { tvSeries } = await requestApi(house.currentLord, this.errorConstructor)

        if(tvSeries[0])
          return { ...house._doc, currentLord: { resource: currentLord, tvSeries }}
      }

      return house;
    } else
      await this.errorConstructor(404, 'House not found');
  }
}

module.exports = FindHouseByIdService;
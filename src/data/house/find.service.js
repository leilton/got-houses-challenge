class FindHouseService {

  constructor ( findAllHousesRepositoy, findHouseByOneParamRepositoy, errorConstructor) {
    this.findAllHouses = findAllHousesRepositoy;
    this.findHouseByOneParam = findHouseByOneParamRepositoy;
    this.errorConstructor = errorConstructor;
  }

  async execute(data) {
    const { name } = data

    if(name) {
      const findName = await this.findHouseByOneParam({ name })
      
      if(findName){
        return findName
      } else {
        await this.errorConstructor(404, 'House not found');
      }
    } else {
      const houses = await this.findAllHouses();
      
      return houses.length ? houses : await this.errorConstructor(202, 'no registered houses')
    }
  }
}

module.exports = FindHouseService;
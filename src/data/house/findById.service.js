class FindHouseByIdService {
  constructor ( findHouseByIdRepositoy,errorConstructor) {
    this.findHouseById = findHouseByIdRepositoy;
    this.errorConstructor = errorConstructor;
  }

  async execute({id}) {
    const house = await this.findHouseById(id);
    
    if(!house)
      await this.errorConstructor(404, 'House not found');
    
    return house;
  }
}

module.exports = FindHouseByIdService;
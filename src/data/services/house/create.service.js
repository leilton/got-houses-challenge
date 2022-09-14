class CreateHouseService {
  constructor (createHouseRepositoy, findHouseByOneParamRepositoy, errorConstructor) {
    this.createHouse = createHouseRepositoy;
    this.findHouseByOneParam = findHouseByOneParamRepositoy;
    this.errorConstructor = errorConstructor;
  }

  async execute(data) {
    const { name } = data

    if( await this.findHouseByOneParam({name}))
      await this.errorConstructor(202, 'House already exists');
    
    await this.createHouse(data);
    return { message: 'House registered successfully' }

  }
}

module.exports = CreateHouseService;
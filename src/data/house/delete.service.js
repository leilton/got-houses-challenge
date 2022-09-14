class DeleteHouseService {
  constructor ( findHouseByIdRepositoy, deleteHouseRepository,errorConstructor) {
    this.findHouseById = findHouseByIdRepositoy;
    this.deleteHouse = deleteHouseRepository;
    this.errorConstructor = errorConstructor;
  }

  async execute({id}) {

    if(!await this.findHouseById(id))
      await this.errorConstructor(404, 'House not found');
    
    await this.deleteHouse(id);
    return { message: 'House successfully deleted' }

  }
}

module.exports = DeleteHouseService;
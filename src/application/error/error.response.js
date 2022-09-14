const erroResponse = async (e, res) => {
  console.log('\x1b[41m%s\x1b[0m', 'LOG DE ERRO:');
  console.log(e);
  console.log('\x1b[31m%s\x1b[0m', `message: ${JSON.stringify(e.message)}`);
  res.status(e.status).send({message: e.message})
}

module.exports = erroResponse;
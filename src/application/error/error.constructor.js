const erroConstructor = async (status, message) => {
  const e = new Error();
  e.message = message;
  e.status = status;
  throw e;
}

module.exports = erroConstructor;
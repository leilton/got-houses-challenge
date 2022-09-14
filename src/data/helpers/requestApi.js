const axios = require('axios').default;

const requestApi = async (url, errorConstructor) => {
  try {
    const { data } = await axios.get(url);
    return data
  } catch (error) {
    await errorConstructor(400, `URL NOT FOUND - ${error.message}`);
  }
}

module.exports = requestApi;
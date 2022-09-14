'use strict';
require('dotenv').config();
const mongoose = require('mongoose');

if(process.env.NODE_ENV !== 'test') {
  mongoose
    .connect(process.env.DB_ADDRESS, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(
      (conexao) => {
        console.log(`Database: ${conexao.connections[0].host}:${conexao.connections[0].port}`);
        console.log('Database: Online');
        console.log('__________________________________________');
      },
      (err) => {
        console.log(`Database: ${err.errmsg}`);
        console.log('Database: FAIL');
        console.log('__________________________________________');
      }
    );
}

module.exports = { Mongoose: mongoose }
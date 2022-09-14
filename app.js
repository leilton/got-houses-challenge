const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

if(process.env.NODE_ENV !== 'test')
  require('dotenv-flow').config();

const { setupRoutes } = require('./src/main/config/routes')

require('./src/infra/config/database')

const swagger = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

app.use( (req, res, next ) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, x-access-token, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const swaggerDefinition = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Api Challenge, about GoT and its houses',
      version: '0.0.1',
      description: 'Documentation api challenge for newtail'
    }
  },
  apis: ['swagger.yaml']
}

const swaggerDocs = swaggerJsDoc(swaggerDefinition);

app.use('/doc', swagger.serve, swagger.setup(swaggerDocs));

app.use(morgan(`\x1b[33m Método=:method \x1b[36m Url=:url \x1b[35m Status=:status \x1b[34m Tempo:response-time ms \x1b[0m`));

setupRoutes(app);

module.exports = app
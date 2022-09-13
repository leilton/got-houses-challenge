const app = require('./app');

app.listen(process.env.API_PORT, function (err) {
  if(!err) console.log('GoT Game Challenge API - Online', ` | Port: ${process.env.API_PORT}`);
  else console.log(err);
});
const { erroResponse } = require('../../application/error')

exports.adaptExpressRoute = controller => async (req, res) => {
  const { statusCode, data } = await controller.handle({
    req,
    data: { ...req.body, ...req.query, ...req.params, ...req.locals }
  });

  if (statusCode >= 200 && statusCode < 300)
    res.status(statusCode).json(data);
  else
    erroResponse(data, res);
}
const routes = require('./controller/routes')
module.exports = (app) => {
  app.get(`/payment/health`, function (req, res) {
    res.status(200).send({ data: 'OK' })
  })
  
  app.use(`/payment/`, routes.router)
}
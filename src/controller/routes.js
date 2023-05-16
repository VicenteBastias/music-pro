const {Router} = require("express")
const router = new Router()
const PaymentService = require("../service/payment")
const payment = new PaymentService()
const routes = [
    {
        method: "post",
        path: "/login",
        middleware: [],
        action: payment.login         
    }
]
const allRouter = routes.map(({
    method,
    path,
    middleware,
    action,
    callback = []
  }) => router[method](path, middleware, action, callback))
  module.exports.router = allRouter

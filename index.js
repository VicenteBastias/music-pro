const express = require("express")
const applicationConfig = require("./src/config/application")
const apiRoutes = require("./src")
const app = express()
const port = 80
const host = "0.0.0.0"

applicationConfig(app)
apiRoutes(app)

app.listen(port, host, err => {
    if (err) { process.exit(err) }
    console.log(`
        escuchando port: ${host}:${port}
      `)
})


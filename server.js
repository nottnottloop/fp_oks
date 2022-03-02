const appOn = require('./app')
const port = 4002

appOn.app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

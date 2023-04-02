const express = require('express')
const routesAuthentication = require('./routes/Authentication')
const routerUser = require('./routes/User')
const cors = require('cors')

const PORT = 3333;
const app = express()
app.use(cors())
app.use(express.json())


app.use('/authentication', routesAuthentication)
app.use('/user', routerUser)


app.listen(PORT, () => {
  console.log('Server started on ' + `http://localhost:${PORT}/` )
})
const express = require('express')
const routes = require('./routes/Authentication')

const PORT = 3333;
const app = express()
app.use(express.json())
app.use(routes)


app.listen(PORT, () => {
  console.log('Server started on ' + `http://localhost:${PORT}/` )
})
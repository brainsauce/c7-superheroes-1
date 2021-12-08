const express = require('express')
const path = require('path')
const superheroRoutes = require('./routes/superheroRoutes')

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())

app.use('/api',superheroRoutes)
app.use('/', express.static('../client/build'))
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname,"../client/build","index.html"))
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


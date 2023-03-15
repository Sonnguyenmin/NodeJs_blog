const express = require('express')
const app = express()
const port = 3002

app.get('/', (req, res) =>{ //arrow function
  res.send('xin chào cả thế giới!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
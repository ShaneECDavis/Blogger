const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(morgan('dev'))

app.use('/posts', require('./routes/posts'))

const PORT = 1337
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})

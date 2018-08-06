const express = require('express')
const router = express.router()
const client = require('../db')

router.get('/', (req, res, next) => {
  res.send()
})

module.exports = router

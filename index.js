var express = require('express')
var app     = express()
var port    = process.env.PORT || 7001

app.get('/', function(req, res) {
    res.send('Hello World!')
})

app.get('/healthcheck', function(req, res) {
    res.status(200).end()
})

app.listen(port, function() {
    console.log('Dummy is listening on port', port)
})

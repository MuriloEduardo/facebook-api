// Import packages
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
// App
const app = express()
// Morgan
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('./dist/facebook-api'));

app.use(require('./server/routes/index.routes'))
// First route
app.get('/*', function(req,res) {    
    res.sendFile(path.join(__dirname,'/dist/facebook-api/index.html'));
})
// Starting server
app.listen(process.env.PORT || 1337)
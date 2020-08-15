
require('dotenv').config();

const
    express = require('express'),
    app = express(),
    bodyparser = require('body-parser'),
    cors = require('cors'),
    db = require('./services/database')


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
var corsOptions = {
  origin: '*',
  optionSuccesStatus:200
}
app.use(cors(corsOptions));


const port = process.env.SERVER_PORT || 3333;
app.listen(port, () => {    
  console.log('Server running on port' + port);
  
})
app.use(express.static('public'))
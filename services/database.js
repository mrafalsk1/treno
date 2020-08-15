  
const mongoose = require('mongoose'),
db = mongoose.connection

mongoose.set('useCreateIndex', true);

db.on('error',console.error)
db.on('open', () => {
console.log("MongoDB CONECTADO");

})

mongoose.connect("mongodb://localhost:27017/ternos", {
useNewUrlParser:true,
useUnifiedTopology: true
})

module.exports = db
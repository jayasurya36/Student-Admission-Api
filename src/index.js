const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 8080
const db = require('./models')
app.use(express.urlencoded());



// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// your code goes here

db.mongoose.connect(db.url , {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    console.log("connected to database");
}).catch(err =>{
    console.log(err);
    process.exit()
})

require('../src/routes/student.route')(app)

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;   
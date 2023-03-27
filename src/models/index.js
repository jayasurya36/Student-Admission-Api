const dbConfig = require('../config/db');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db = {};
db.url = dbConfig.URL;
db.mongoose = mongoose;
db.stdents = require('../models/student.model')(mongoose);
module.exports = db;
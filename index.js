const express = require('express');
const app = express();
const db = require('./src/config/db.js');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const router = require('./src/index.js');

require('dotenv/config');

app.use(morgan('combined'));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Content-Type', 'application/json');
    next();
  });

router(app, db);

db.sequelize.sync().then(() => {
    app.listen(process.env.PORT || 8081, () => {console.log('Server Conected')});
}).catch(err => {
    console.log("Error: " + err);
});


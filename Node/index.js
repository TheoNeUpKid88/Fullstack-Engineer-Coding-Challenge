// Env Setup
// =============================================================================
require('dotenv').config({ path: `./lib/enviornment/.${process.env.NODE_ENV}.env` });

//Express Config
const helmet = require('helmet');
const compression = require('compression');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const emojiRegex = require('emoji-regex');
const morgan = require('morgan');

// Logging Configuration
const logger = require('./lib/util/logger/log');

//MODULES
const encode = require('./lib/encode');
const decode = require('./lib/decode');

//APP
const app = express();
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

console.log('API Started');

//// ROUTES FOR API
app.use(logger.requestLogger);
app.use(logger.errorLogger);
app.use(`/api/encode`, users.Routes);
app.use(`/api/decode`, reports.Routes);

app.use(function (err, req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    if (err) {
        return res.status(500).send(err.message);
    } else {
        next();
    }
});
app.set('port', (process.env.PORT || 23456));
app.listen(app.get('port'));
console.warn('Memory usage', String(process.memoryUsage().heapUsed / (1024 * 1024) + ' mb'));

let graceful = () => {
    console.trace('PROCESS ===> Shutting Down', process.pid);
    process.exit();
};

module.exports = app;



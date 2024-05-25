const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const rateLimit = require('express-rate-limit');
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const express = require('express');
const app = express();

const resourceRoute = require('./routes/resource-route.js');
app.use('/resource', resourceRoute);

app.use(express.json());

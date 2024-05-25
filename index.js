const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger/index.js');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const rateLimit = require('express-rate-limit');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(helmet());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

const resourceRoute = require('./routes/resource-route.js');
app.use('/resource', resourceRoute);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

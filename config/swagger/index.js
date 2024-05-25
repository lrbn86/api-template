const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.1.0',
  info: {
    title: 'API Template',
    version: '1.0.0',
    description: "This is a REST API application made with Express.",
    license: {
      name: "MIT",
      url: "https://spdx.org/licenses/MIT.html"
    },
    contact: {
      name: "Brandon Nguyen",
      url: "mailto:brandonnguyendev@gmail.com"
    }
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server'
    }
  ]
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js']
};

const swaggerSpec = swaggerJSDoc(options);


module.exports = swaggerSpec;

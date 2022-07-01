const swaggerJsdoc = require('swagger-jsdoc');
const { config } = require('./config');
// const route = require('../../src/modules/media/media.route.js')
const swaggerDefinition = {
    info: {
        title: 'Made using calmapi',
        version: '1.0.0',
        description: 'Production ready restapi using calmapi',
        contact: {
            name: 'Animesh Das',
        }
    },
    host: `http://127.0.0.1:${config.PORT}`,
    basePath: '/',

};

const options = {
    swaggerDefinition,
    apis: [ '../../src/modules/**/*.js' ],
};


module.exports = swaggerJsdoc( options );


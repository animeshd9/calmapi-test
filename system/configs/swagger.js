const swaggerJsdoc = require('swagger-jsdoc');
const { config } = require('./config');
const path = require( 'path' );
// const route = require('../../src/modules/media/media.route.js')
// const route = require( './../../src/modules/media/media.route.js' )
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
    apis: [ './../../src/modules/**/*.js' ],
};
// const options = {
//     definition: {
//         openapi: '3.0.0',
//         info: {
//             title: 'Hello World',
//             version: '1.0.0'
//         },
//     },
//     apis: [ '../../src/modules/media/media.route.js' ], // files containing annotations as above
// };

console.log( swaggerJsdoc(options), path.resolve('../src/modules/**/*.js') );

module.exports = swaggerJsdoc( options );


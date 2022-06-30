'use strict';
const { CalmController } = require( '../../../system/core/CalmController' );
const { MediaService } = require( './media.service' );
const { Media } = require( './media.model' );
const autoBind = require( 'auto-bind' );
const multer = require( 'multer' );
const config = require( '../../configs/config' );
const { S3Upload } = require('../../plugins');
const { CalmError } = require('../../../system/core/CalmError');
const fs = require( 'fs' );
const utils = require( '../../utils/index' );
const mediaService = new MediaService(
    new Media().getInstance()
);

class MediaController extends CalmController {
    // file upload using multer for amazon s3
    // storage = multer.memoryStorage( {
    //     'destination': function( req, file, callback ) {
    //         callback( null, '' );
    //     }
    // } );
    storage = multer.diskStorage( {
        'destination': function( req, file, cb ) {
            const dir = config.config.UPLOAD_PATH;
       

            fs.exists( dir, ( exist ) => {
                if ( !exist ) {
                    return fs.mkdir( dir, ( error ) => cb( error, dir ) );
                }
                return cb( null, dir );
            } );
        },
        'filename': function( req, file, cb ) {
            const fileOriginalName = utils.slugify( file.originalname );

            cb( null, `${( new Date() ).getTime() }-${ fileOriginalName}` );
        }
    } );

    upload = multer( {
        'storage': this.storage,
        'limits': {
            'fileSize': 1024 * 1024 * 25
        }
    } );

    constructor( service ) {
        super( service );
        this.S3Upload = new S3Upload();
        autoBind( this );
    }
    // for amazon s3
    // async insert( req, res, next ) {
    //     try {
    //         if(!req.file) {
    //             throw new CalmError('VALIDATION_ERROR', 'File is required');
    //         }
    //         const { key } = await this.S3Upload.uploadFile( req.file.buffer, req.file.originalname, { ACL: 'public-read', pathPrefix: 'uploads' } );
    //         const response = await this.service.insert( { ...req.file, 'path': key } );
    //         res.sendCalmResponse(response.data);
    //     } catch ( e ) {
    //         next( e );
    //     }
    // }
    async insert( req, res, next ) {
        try {
            console.log( 'insert' );
            if( !req.file ) {
                throw new CalmError('VALIDATION_ERROR', 'File is required');
            }
            const uploadPath = config.UPLOAD_PATH;

            req.file.path = req.file.path.split( `${uploadPath }/` )[ 1 ];
            const response = await this.service.insert( req.file );

            // return res.status( response.statusCode ).json( response );
            res.sendCalmResponse(response.data);
        } catch ( e ) {
            next( e );
        }
    }


    /**
     * Media Uploading Middleware
     * This can be used for any task which has media upload with other data.
     * Use this as middleware and get the file info in req.file in your router function
     * @param req
     * @param res
     * @param next
     * @returns {Promise<void>}
     */
    async insertMediaMiddleware( req, res, next ) {
        try {
            if(!req.file) {
                throw new CalmError('VALIDATION_ERROR', 'File is required');
            }
            const { key } = await this.S3Upload.uploadFile( req.file.buffer, req.file.originalname, { ACL: 'public-read', pathPrefix: 'uploads' } );
            // Modifying req.file before moving to the next
            req.file = await this.service.insert( { ...req.file, 'path': key } );
            next();
        } catch ( e ) {
            next( e );
        }
    }


    async delete( req, res, next ) {
        const { id } = req.params;

        try {
            const response = await this.service.delete( id );

            await this.S3Upload.deleteFile( response.data.path );
            res.sendCalmResponse(response.data, { deleted: true });
        } catch ( e ) {
            next( e );
        }
    }


}

module.exports = new MediaController( mediaService );

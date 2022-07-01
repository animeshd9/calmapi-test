'use strict';
const MediaController = require( './media.controller' );
const express = require( 'express' ),
    router = express.Router();
const AuthController = require( '../auth/auth.controller' );

router.use(AuthController.checkLogin);
// Media Routes
/**
 * @swagger
 * /api/media/get-media/{mediaId}:
 *   get:
 *     summary: Get a media by Id.
 *     parameters:
 *        - in: path
 *          name: mediaId
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 *         content:
 *            application/json:
 *              schema:
 *                type: object

 *                properties:
 *                  id:
 *                    type: intger
 */
router.get( '/:id', MediaController.get );
router.post( '/', MediaController.upload.single( 'file' ), MediaController.insert );
router.delete( '/:id', MediaController.delete );


module.exports = router;

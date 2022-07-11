'use strict';
const ResultController = require( './result.controller' );
const AuthController = require( '../auth/auth.controller' );
const express = require( 'express' );
const router = express.Router();

router.use(AuthController.checkLogin);

router.get( '/', ResultController.getAll );
router.get( '/:id', ResultController.get );
router.post( '/', ResultController.insert );
router.put( '/:id', ResultController.update );
router.delete( '/:id', ResultController.delete );


module.exports = router;

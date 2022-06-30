'use strict';
const RecipeController = require( './recipe.controller' );
const AuthController = require( '../auth/auth.controller' );
const express = require( 'express' );
const router = express.Router();

router.use(AuthController.checkLogin);

router.get( '/', RecipeController.getAll );
router.get( '/:id', RecipeController.get );
router.post( '/', RecipeController.insert );
router.put( '/:id', RecipeController.update );
router.delete( '/:id', RecipeController.delete );


module.exports = router;

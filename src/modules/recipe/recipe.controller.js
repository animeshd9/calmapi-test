'use strict';
const { CalmController } = require( '../../../system/core/CalmController' );
const { RecipeService } = require( './recipe.service' );
const { Recipe } = require( './recipe.model' );
const recipeDTO = require( './recipe.dto' );
const autoBind = require( 'auto-bind' ),
    recipeService = new RecipeService(
        new Recipe().getInstance()
    );

class RecipeController extends CalmController {

    constructor( service ) {
        super( service );
        this.dto = { ...this.dto, ...recipeDTO };
        autoBind( this );
    }

}

module.exports = new RecipeController( recipeService );

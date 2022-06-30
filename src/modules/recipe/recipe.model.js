'use strict';
const mongoose = require( 'mongoose' );
const { Schema } = require( 'mongoose' );
const uniqueValidator = require( 'mongoose-unique-validator' );

class Recipe {

    initSchema() {
        const schema = new Schema( {
            'Srno': {
                'type': Number,
                'required': true,
            },
            'RecipeName': {
                'type': String,
                'required': true,
            },
            'TranslatedRecipeName': {
                'type': String,
                'required': true,
            },
            'Ingredients': {
                'type': String,
                'required': true,
            },
            'TranslatedIngredients': {
                'type': String,
                'required': true,
            },
            'PrepTimeInMins': {
                'type': Number,
                'required': true,
            },
            'CookTimeInMins': {
                'type': String,
                'required': true,
            },
            'TotalTimeInMins': {
                'type': Number,
                'required': true,
            },
            'Servings': {
                'type': Number,
                'required': true,
            },
            'Cuisine': {
                'type': String,
                'required': true,
            },
            'Course': {
                'type': String,
                'required': true,
            },
            'Diet': {
                'type': String,
                'required': true,
            },
            'Instructions': {
                'type': String,
                'required': true,
            },
            'TranslatedInstructions': {
                'type': String,
                'required': true,
            },
            'URL': {
                'type': String,
                'required': true,
            },
            'createdBy': {
                'type': Schema.Types.ObjectId,
                'ref': 'user'
            },
            'updatedBy': {
                'type': Schema.Types.ObjectId,
                'ref': 'user'
            }
        }, { 'timestamps': true } );

        schema.plugin( uniqueValidator );
        try {
            mongoose.model( 'recipe', schema );
        } catch ( e ) {

        }

    }

    getInstance() {
        this.initSchema();
        return mongoose.model( 'recipe' );
    }
}

module.exports = { Recipe };

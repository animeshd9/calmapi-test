'use strict';

class GetDTO {
    constructor( { ...props } ) {
        this._id = props._id;
        this.Srno = props.Srno;
        this.RecipeName = props.RecipeName;
        this.TranslatedRecipeName = props.TranslatedRecipeName;
        this.Ingredients = props.Ingredients;
        this.TranslatedIngredients = props.TranslatedIngredients;
        this.PrepTimeInMins = props.PrepTimeInMins;
        this.CookTimeInMins = props.CookTimeInMins;
        this.TotalTimeInMins = props.TotalTimeInMins;
        this.Servings = props.Servings;
        this.Cuisine = props.Cuisine;
        this.Course = props.Course;
        this.Diet = props.Diet;
        this.Instructions = props.Instructions;
        this.TranslatedInstructions = props.Course;
        this.URL = props.URL;
        // Auto Generated Fields
        this.createdBy = props.createdBy;
        this.updatedBy = props.updatedBy;
        this.createdAt = props.createdAt;
        this.updatedAt = props.updatedAt;
        Object.freeze( this );
    }
}


class InsertDTO {
    constructor( { ...props } ) {
        this.Srno = props.Srno;
        this.RecipeName = props.RecipeName;
        this.TranslatedRecipeName = props.TranslatedRecipeName;
        this.Ingredients = props.Ingredients;
        this.TranslatedIngredients = props.TranslatedIngredients;
        this.PrepTimeInMins = props.PrepTimeInMins;
        this.CookTimeInMins = props.CookTimeInMins;
        this.TotalTimeInMins = props.TotalTimeInMins;
        this.Servings = props.Servings;
        this.Cuisine = props.Cuisine;
        this.Course = props.Course;
        this.Diet = props.Diet;
        this.Instructions = props.Instructions;
        this.TranslatedInstructions = props.TranslatedInstructions;
        this.URL = props.URL;

        // Auto Generated Fields
        this.createdBy = props.createdBy;
        Object.freeze( this );
    }
}

class UpdateDTO {
    constructor( { ...props } ) {
        this.Srno = props.Srno;
        this.RecipeName = props.RecipeName;
        this.TranslatedRecipeName = props.TranslatedRecipeName;
        this.Ingredients = props.Ingredients;
        this.TranslatedIngredients = props.TranslatedIngredients;
        this.PrepTimeInMins = props.PrepTimeInMins;
        this.CookTimeInMins = props.CookTimeInMins;
        this.TotalTimeInMins = props.TotalTimeInMins;
        this.Servings = props.Servings;
        this.Cuisine = props.Cuisine;
        this.Course = props.Course;
        this.Diet = props.Diet;
        this.Instructions = props.Instructions;
        this.TranslatedInstructions = props.TranslatedInstructions;
        this.URL = props.URL;
        // Auto Generated Fields
        this.updatedBy = props.updatedBy;
        // Delete Fields which are not present in data
        Object.keys( this ).forEach( key => {
            if ( this[ key ] === undefined ) {
                delete this[ key ];
            }
        } );
        Object.freeze( this );
    }
}

module.exports = { GetDTO, InsertDTO, UpdateDTO };

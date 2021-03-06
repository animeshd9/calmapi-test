'use strict';
const mongoose = require( 'mongoose' );
const { Schema } = require( 'mongoose' );
const uniqueValidator = require( 'mongoose-unique-validator' );

class Result {

    initSchema() {
        const schema = new Schema( {
            'title': {
                'type': String,
                'required': true,
            },
            'content': {
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
            mongoose.model( 'result', schema );
        } catch ( e ) {

        }

    }

    getInstance() {
        this.initSchema();
        return mongoose.model( 'result' );
    }
}

module.exports = { Result };

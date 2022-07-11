'use strict';
const { CalmController } = require( '../../../system/core/CalmController' );
const { ResultService } = require( './result.service' );
const { Result } = require( './result.model' );
const resultDTO = require( './result.dto' );
const autoBind = require( 'auto-bind' ),
    resultService = new ResultService(
        new Result().getInstance()
    );

class ResultController extends CalmController {

    constructor( service ) {
        super( service );
        this.dto = { ...this.dto, ...resultDTO };
        autoBind( this );
    }

}

module.exports = new ResultController( resultService );

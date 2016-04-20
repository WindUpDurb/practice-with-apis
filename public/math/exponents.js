/**
 * Created by david on 4/19/16.
 */

"use strict";

module.exports = {

    toThePowerOf : function (arrayOfStrNumbs) {
        var results = Math.pow( parseFloat(arrayOfStrNumbs[0]), parseFloat(arrayOfStrNumbs[1]) );
        return results;
    }

};
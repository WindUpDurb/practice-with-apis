/**
 * Created by david on 4/19/16.
 */

"use strict";

module.exports = {

    divideNumbers : function (arrayOfStrNumbs) {
        var results = arrayOfStrNumbs.reduce(function (a, b) {
            return parseFloat(a) / parseFloat(b);
        });
        return results;
    }

};
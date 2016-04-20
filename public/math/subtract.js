/**
 * Created by david on 4/19/16.
 */

"use strict";

module.exports = {

    subtractNumbers : function (arrayOfStrNumbs) {
        var results = arrayOfStrNumbs.reduce(function (a, b) {
            return a - parseFloat(b);
        });
        return results;
    }

};

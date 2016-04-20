/**
 * Created by david on 4/19/16.
 */

"use strict";

var md5 = require("md5");


module.exports = function (parameters, response) {

    var md5Conversion = md5(parameters[0]);
    var urlToReturn = `https://gravatar.com/avatar/${md5Conversion}`;

    response.write(urlToReturn);
    
    response.end("\n");
};
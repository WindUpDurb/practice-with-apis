/**
 * Created by david on 4/19/16.
 */
"use strict";



module.exports = function (parameters, response) {
    
    var operation = parameters.shift();
    
    switch (operation) {
        case "sum" :

            var sum = require("./sum.js");
            var results = sum.sumNumbers(parameters);
            response.write(`${results}`);
            break;

        case "subtract" :

            var subtract = require("./subtract");
            var results = subtract.subtractNumbers(parameters);
            response.write(`${results}`);
            break;
        
        case "multiply" :

            var multiply = require("./multiply");
            var results = multiply.multiplyNumbers(parameters);
            response.write( results.toString() );
            break;
        case "divide" :
            
            var divide = require("./divide");
            var results = divide.divideNumbers(parameters);
            response.write( results.toString() );
            break;

        case "exponent" :

            var exponent = require("./exponents");
            var results = exponent.toThePowerOf(parameters);
            response.write( results.toString() );
            break;
    }
    
    response.end("\n");
    
};


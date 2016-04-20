"use strict";

const PORT = 5000;

var http = require("http");
var fs = require("fs");


var server = http.createServer(function (request, response) {
    var parameters = request.url.split("/");
    //throw away first empty string
    parameters.shift();

    var operation = parameters.shift();

    switch (operation) {

        case "" :

            

            break;

        case "math" :
            require("./public/math")(parameters, response);
            break;

        case "gravatar" :
            console.log("Found Case")
            require("./public/gravatar")(parameters, response);
            break;

        default:
            response.write("Default.");
            response.end("\,");
    }
});

server.listen(PORT, function (error) {
    if (error) {
        return console.log("Error: ", error );
    } else {
        console.log(`Node Server Listening on Port ${PORT}`);
    };

});
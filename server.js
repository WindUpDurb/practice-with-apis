"use strict";

const PORT = 5000;

var http = require("http");
var fs = require("fs");


var server = http.createServer(function (request, response) {
    var parameters = request.url.split("/");
    //throw away first empty string
    parameters.shift();

    var operation = parameters.shift();



    if(operation === "main.js") {
        var data = fs.readFileSync("./public/main.js");
        response.end( data.toString());
        return
    };

    if(operation === "style.css") {
        var data = fs.readFileSync("./public/style.css");
        response.end( data.toString());
        return
    };

    console.log(operation);

    switch (operation) {

        case "" :
            //gather the HTML file
            var html = (fs.readFileSync("./public/index.html")).toString();
            //generate HTML File on the Page
            response.end(html)

            break;

        case "math" :
            require("./public/math")(parameters, response);
            break;

        case "gravatar" :
            console.log("Found Case")
            require("./public/gravatar")(parameters, response);
            break;

        default:
            response.end("\n");
    }
});

server.listen(PORT, function (error) {
    if (error) {
        return console.log("Error: ", error );
    } else {
        console.log(`Node Server Listening on Port ${PORT}`);
    };

});
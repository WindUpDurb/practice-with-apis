/**
 * Created by david on 4/19/16.
 */

module.exports = function (parameters, response) {
    var birthdateArray = parameters;
    var age = function (year, month, day) {
        var today = new Date();
        var birthdate = new Date(year, month, day);
        var yearsOld = Math.floor((today - birthdate) / 31536000000);
        return yearsOld;
    };
    var birthdate = age(birthdateArray[2], birthdateArray[0] - 1, birthdateArray[1]);
    response.end( birthdate.toString() );
};
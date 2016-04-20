/**
 * Created by david on 4/19/16.
 */

module.exports = function (parameters, response) {

    var sentence = parameters.shift();
    var words = sentence.split("%20");
    var numberOfWords = words.length.toString();
    var characterCount = sentence.length.toString();
    var sumOfWordLengths = words.map(function(item) {
        return item.length;
    })
        .reduce(function (a, b) {
       return a + parseFloat(b);
    }, 0);
    var averageWordLength = Math.floor(sumOfWordLengths / numberOfWords);
    var toReturn = `The word count is ${numberOfWords}, 
    the character count is ${characterCount},
    and the average word length is ${averageWordLength}`;
    response.end(toReturn);
}
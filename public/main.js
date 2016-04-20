/**
 * Created by david on 4/19/16.
 */

var operations = {

    gravatarSearchClick : function () {
        $("#gravatarSearch").click(function () {
            var toSearch = $("#searchGravatar").val();
            $.get(`/gravatar/${toSearch}`, function (data) {
                var $toAppend = $("<img>").attr("src", data);
                $("#gravatarDiv").append($toAppend);
            })
        })
    },

    mathMagic : function () {
        $("#mathMagic").click(function () {
            var $firstNumber = $("#number1").val();
            var $secondNumber = $("#number2").val();
            var $operator = $("#mathOperator").val();
            $.get(`/math/${$operator}/${$firstNumber}/${$secondNumber}`, function (data) {
                $("#mathResults").text(data);
            });
        });

    },

    sentenceMagic : function () {
        $("#sentenceMagic").click(function () {
            var $sentence = $("#containsSentence").val();
            var encodedSentence = encodeURI($sentence);
            $.get(`/sentence/${encodedSentence}`, function (data) {
                $("#sentenceResults").text(data);
            })
        })
    },

    ageMagic : function () {

        $("#ageMagic").click(function () {
            var $birthdate = $("#ageInput").val();
            console.log($birthdate)
            $.get(`/age/${$birthdate}`, function (data) {
                $("#ageResults").text(`You are ${data} years old`);
            });
        })
    }

};



var initialize = function () {
    operations.gravatarSearchClick();
    operations.mathMagic();
    operations.sentenceMagic();
    operations.ageMagic();
};


$(document).ready(initialize);
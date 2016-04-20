/**
 * Created by david on 4/19/16.
 */

var operations = {

    gravatarSearchClick : function () {
        $("#gravatarSearch").click(function () {
            var toSearch = $("#searchGravatar").val();
            $.get(`/gravatar/${toSearch}`, function (data) {
                var $toAppend = $("<img>").attr("src", data);
                console.log(data)
                $("#gravatarDiv").append($toAppend);
            })
        })
    }


}



var initialize = function () {
    operations.gravatarSearchClick();
};


$(document).ready(initialize);
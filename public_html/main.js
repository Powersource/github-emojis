"use strict";
$(function () {
    console.log("hi");
    var div = $('div');
    div.html("");
    $.getJSON("https://api.github.com/emojis", {}, function (json) {
        $.each(json, function (index) {
            //$($.parseHTML("<div>" + index.toString() + ": " +  json[index] + "</div")).appendTo(div);
            div.append("<div>" + index.toString() + ": " + json[index] + "</div");
        });
    });
});
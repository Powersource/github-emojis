"use strict";
$(function () {
	console.log("hi");
	var mainDiv = $('div');
	mainDiv.html("");
	$.getJSON("https://api.github.com/emojis", {}, function (json) {
		$.each(json, function (index) {
			//$($.parseHTML("<div>" + index.toString() + ": " +  json[index] + "</div")).appendTo(div);
			mainDiv.append("<div>"
					+ "<button class=\"imageShower\">Show emoji</button>"
					+ index.toString() + ": " + "<span>" + json[index] + "</span>"
					+ "</div");
		});
		$(".imageShower").click(function () {
			console.log("click");
			var imgURL =
					$(this)
					.parent()
					.children("span")
					.html();
			$(this).replaceWith("<image src=\""
					+ imgURL + "\"/>");
		});
	});
});
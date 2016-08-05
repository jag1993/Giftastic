var food = ["pizza","sushi","pasta","fried chicken"];




$("body").on('click', ".food", function(){
	$("#showGif").empty();
	var food = $(this).attr("data-value");
	var queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + food + "&api_key=dc6zaTOxFJmzC&limit=24";

$.ajax({url: queryUrl, method: 'GET'}).done(function(response) {
	var x = response.data;


	for(var i=0; i < x.length;i++){
		var foodImageDiv = $("<div class='foodImage well col-sm-3'>");
		var foodImage = $("<img>")
		foodImage.attr("src", x[i].images.fixed_height.url);
		var appendedDiv = foodImageDiv.append(foodImage)
		$("#showGif").prepend(appendedDiv);


// APPEND THE PAUSE AND GO HERE

	}






});

});













function makeButton(){
$("#showButtons").empty();
for (i=0; i<food.length; i++){
	var button = $("<button>");
	button.addClass("food");
	button.attr("data-value", food[i]);
	button.text(food[i]);
	button.addClass("btn");
	button.addClass("btn-info");
	$("#showButtons").append(button);
	}
}


$("#addButton").on("click", function(){
	var foodInput = $("#foodName").val().trim();
		food.push(foodInput);

		makeButton();

		return false;

});




makeButton();
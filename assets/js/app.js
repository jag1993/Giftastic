var food = ["pizza","sushi","pasta","fried chicken","tacos","burritos"];




$("body").on("click", ".food", function(){
	$("#showGif").empty();
	var food = $(this).attr("data-value");
	var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + food + "&api_key=dc6zaTOxFJmzC&limit=10";

$.ajax({url: queryUrl, method: 'GET'}).done(function(response) {
	var x = response.data;
	for(var i=0; i < x.length;i++){
		var foodImageDiv = $("<div class='panel col-sm-4'>");
		var foodImage = $("<img>")
		var foodImageRating = x[i].rating;
		foodImage.attr("src", x[i].images.fixed_height.url);
		foodImage.attr("data-state", "still");
		foodImage.attr("data-still", x[i].images.fixed_height_still.url);
		foodImage.attr("data-animate", x[i].images.fixed_height.url);
		foodImage.addClass("foodImage")
		var appendedDiv = foodImageDiv.append(foodImage);
			appendedDiv.append("<h4>" + "RATING:"+ " "+ foodImageRating + "</h4>");
		$("#showGif").prepend(appendedDiv);


	}
});
});




$("body").on("click", ".foodImage", function(){
	 var state = $(this).attr("data-state");
	   if (state === "still"){
                $(this).attr("src", $(this).data("animate"));
                $(this).attr("data-state", "animate");
            }else{
                $(this).attr("src", $(this).data("still"));
                $(this).attr("data-state", "still");
            } 
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
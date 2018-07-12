
// Crosses out item
$("ul").on("click", "li", function() {
	if($(this).css("color") === "rgb(128, 128, 128)") {
		$(this).css({
			color: "black",
			textDecoration: "initial"
		});
	}
	else {
		$(this).css({
			color: "grey",
			textDecoration: "line-through"
		});
	}
});

// Delete item
$("ul").on("click", ".delete", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

// Adding item
$("input[type='text'").keypress(function(event) {
	if(event.which === 13) {
		var userInput = $(this).val();
		$(this).val("");
		$("ul").append("<li><span class=\"delete\"><i class=\"fas fa-trash-alt\"></i></span>" + userInput + "</li>");
	}
});
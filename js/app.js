
// adding overlay div to the page
var $overlay = $("<div id='overlay'></div>");
var $image = $("<img/>");
var $caption = $("<p></p>");

$overlay.append($image);
$overlay.append($caption);

$("body").append($overlay);

//calling overlay whenever an image is clicked
$("#myLightbox a").click(function(event){
	
	event.preventDefault();

	var imageLocation = $(this).attr("href");

	$image.attr("src", imageLocation);

	var captionText = $(this).children("img").attr("alt");
	$caption.text(captionText);

	$overlay.fadeIn();
})

$overlay.click(function(){
	$overlay.hide();
})


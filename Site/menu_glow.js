// JavaScript Document
function glow(id)
{
	// TEST document.getElementById("test").innerHTML = id.src; 
	
	var source_array = id.src.split(''); 
	var index = source_array.length - 5; 
	var new_source = "Images/Banner/images_glow/menu_0" + source_array[index] + ".png";
	id.src = new_source;
}

function unglow(id)
{
	var source_array = id.src.split(''); 
	var index = source_array.length - 5; 
	var new_source = "Images/Banner/images/menu_0" + source_array[index] + ".png";
	id.src = new_source;
}

function clickdown(id)
{
	var source_array = id.src.split(''); 
	var index = source_array.length - 5; 
	var new_source = "Images/Banner/images_press/menu_0" + source_array[index] + ".png";
	id.src = new_source;
}


function resizeSlideShow()
{
	var width = $(window).width() * 0.35; 
	
	$("#slide_container").height(width);
	$("#slide_show").width(width*2.2); 
	var height = $("#slide_show").height()*0.4; 
	$(".sidebar").height(height);
	$(".sidebar").width(height*(2/3));
	$("#right img").height(height*(2/3));
	$("#left img").height(height*(2/3));
	$("#right img").width(height*(2/3));
	$("#left img").width(height*(2/3));
	$("#slide_caption").width($("#slide_show").width()*0.9); 
	$("#slide_caption").height($("#slide_show").height()*0.30); 
	var currentWidth = $("#slide_caption_text").width(); 
	$("#slide_caption_text").css({fontSize: ((currentWidth/720)*36)});
	$("#Background").height($(window).height());
  	$("#Background").width($(window).width());
}

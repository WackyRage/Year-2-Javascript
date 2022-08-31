$(document).ready(function () {
    $("#button").click(function(){
    	var list = $("#new").val();
    	$("#list").append("<li>" + list + "<input type='checkbox'></li>");
	}); 
});
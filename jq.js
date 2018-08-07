var helpmode=0;

$("#btn1").click(function(){
	$("#textarea").toggleClass("bold");
});

$("#btn2").click(function(){
	$("textarea").toggleClass("italic");
});

$("#btn3").click(function(){
    $("textarea").toggleClass("underline");
});

$("#cen").click(function(){
	$("textarea").css("textAlign" ,"center");
});

$("#lef").click(function(){
	$("textarea").css("textAlign" ,"left");
});

$("#rig").click(function(){
	$("textarea").css("textAlign" , "right" );
});

$("#myNumber").change(function(){
	var size = $("#myNumber").val();
	$("textarea").css("font-size", size + "px");
});

$("#typ").change(function(){
	var type = $("#typ").val();
	$("textarea").css("font-family" , type );
});

$("#col").change(function(){
	var color = $("#col").val();
	$("textarea").css("color", color );
});





 function ons(e) {
    var elementPath=e.composedPath();
    var element=elementPath[0];
    var code=element.outerHTML;
    if (helpmode) {
    	alert(code);
    }
}
 document.querySelector("body").addEventListener("click",ons);


  $("#switchmode").click(function(){
  	helpmode=Math.abs(helpmode-1);
  });






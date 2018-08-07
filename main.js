function bold(){
 var b=document.getElementById("textarea");
    b.classList.toggle("bo");
}
function myu(){
	var a=document.getElementById("textarea");
	a.classList.toggle("sol");
}
function italian(){
var i=document.getElementById("textarea");
    i.classList.toggle("ita");}

function cent(){ 
	document.getElementById("textarea").style.textAlign="center";
}
function lef(){ 
	document.getElementById("textarea").style.textAlign="left";

}
function rig(){ 
	document.getElementById("textarea").style.textAlign="right";
}
function aea(){
	var a=document.getElementById("typ").value;
	document.getElementById("textarea").style.fontFamily=a;

}
function color(){
	var c=document.getElementById("col").value;
	document.getElementById("textarea").style.color=c;

}


function num(){
	var n=document.getElementById("myNumber").value+"px";
	document.getElementById("textarea").style.fontSize=n;
}

  var helpmode=0;

  function ons(e){
    var elementPath=e.composedPath();
    var element=elementPath[0];
    var code=element.outerHTML;
    if (helpmode) {
    	alert(code);
    }
}
 document.querySelector("body").addEventListener("click",ons);

 function switchmode()
 {
	helpmode=Math.abs(helpmode-1);
  }


  
	 

 
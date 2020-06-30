function first(){
    remove();
    var one=document.getElementById("first");
    one.style.opacity="1";
    one.style.pointerEvents="all"; 
}
function second(){
    remove();
    var two=document.getElementById("second");
    two.style.opacity="1";
    two.style.pointerEvents="all";  
}
function third(){
    remove();
   var three= document.getElementById("third")
   three.style.opacity="1";
   three.style.pointerEvents="all";  
}
function fourth(){
    remove();
    var four=document.getElementById("fourth");
    four.style.opacity="1";
    four.style.pointerEvents="all";  
}
function remove(){
    document.getElementById("first").style.opacity="0";
    document.getElementById("first").style.pointerEvents="none";
    document.getElementById("second").style.opacity="0";
    document.getElementById("second").style.pointerEvents="none";
    document.getElementById("third").style.opacity="0";
    document.getElementById("third").style.pointerEvents="none";
    document.getElementById("fourth").style.opacity="0";
    document.getElementById("fourth").style.pointerEvents="none";  
}
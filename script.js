function load()
{
var x=parseInt(innerWidth);
var y=parseInt(innerHeight);
document.getElementById("head_div").style.height=0.2*y+'px';
document.getElementById("head_div").style.width=x+'px';
document.getElementById("logo").style.width=document.getElementById("head_div").style.height;
document.getElementById("heading").style.height=document.getElementById("head_div").style.height;
document.getElementById("heading").style.width=x-0.2*y+'px';
document.getElementById("player").volume=0.6;
}


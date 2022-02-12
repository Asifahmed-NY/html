document.getElementById("demo1").innerHTML="This is Dynamic text message"+"<br>"
document.getElementById("demo2").innerHTML="Hello JavaScript"+"<br>"
document.getElementById("button").onclick=displayDate;
function displayDate()
{
document.getElementById("mydate").innerHTML=Date();
}
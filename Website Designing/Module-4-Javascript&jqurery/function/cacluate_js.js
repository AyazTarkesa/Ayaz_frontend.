function clearinput()
{
    document.getElementById("display").value="";
}
function inputNumber(val)
{
    document.getElementById("display").value+=val;
}
function result()
{
 var x=document.getElementById("display").value;
 // eval () evalute() function

 var y=eval(x)
 document.getElementById("display").value=y;
}
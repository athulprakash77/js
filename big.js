big2num=(a,b)=>{
    if(a>b)
{
    return a
}
else 
{
return b
}
}

bigbtnevent=()=>{
    var x=parseInt(document.getElementById("num1").value)
    var y=parseInt(document.getElementById("num2").value)
    var z=big2num(x,y)
    console.log(z)
    alert(z)


}
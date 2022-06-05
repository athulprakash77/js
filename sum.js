add2num=(a,b)=>
{
    c=a+b
    return c
}
addbtnevent=()=>{

    var x=parseInt(document.getElementById("num1").value)
    var y=parseInt(document.getElementById("num2").value)
    var z=add2num(x,y)
    console.log(z)

}

mul2num=(a,b)=>{
c=a*b
return c

}

mulbtnevent=()=>{
    var x=parseInt(document.getElementById("num1").value)
    var y=parseInt(document.getElementById("num2").value)
    var z=mul2num(x,y)
    console.log(z)
    alert(z)

}
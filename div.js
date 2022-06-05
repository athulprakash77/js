div2num=(a,b)=>{
    c=a/b
    return c
    
    }
    
    divbtnevent=()=>{
        var x=parseInt(document.getElementById("num1").value)
        var y=parseInt(document.getElementById("num2").value)
        var z=div2num(x,y)
        console.log(z)
        alert(z)
    
    }
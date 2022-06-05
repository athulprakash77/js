evenorodd=(num)=>{
    if(num%2==0)
{
    return "even number"
}
else 
{
    return "odd number"
}
}

evenbtnevents=()=>
{
    x=parseInt(document.getElementById("num1").value)
    var result=evenorodd(x)
    console.log(result)
    alert(result)
}
var a=150
var b=120
var c=20
var d=25
if(a>b && c>d){
    console.log("A is greater than B and C is greater than D")
}
else{
    console.log("At least one condition is false ")
}

if(a>b||c>d){
    console.log("A is greater than B or C is greater than D")
}

else{
    console.log("At least one condition is False")
}

var check=!(a>b)
console.log(check)
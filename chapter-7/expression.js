//function expression 

var addition=function(a,b){
    return a+b

}

addition(40,50)

setTimeout(function(){
    console.log("I will call now 5 second letter")
},5000)

var another=addition
console.log(another(40,50))


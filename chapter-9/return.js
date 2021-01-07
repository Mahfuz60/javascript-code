//Return a function form another function

/*function greets(msg){
    function greeting(name){
        return msg+','+name+'!'
    }
    return greeting
}


var gm=greets("Good Morning")
var gn=greets("Good Night")
var gt=greets("Hello")
var msg=gm("Mahfuz Alam")
console.log(gn("Everyone"))
console.log(msg)
console.log(gt("Lets be tour start now"))
*/

function base(b){
    return function(n){
       var result=1
        for(var i=0;i<b;i++){
            result*=n
            
        }
        return result

    }
}
var base5=base(5)
console.log(base5(2))

var base3=base(3)
console.log(base3(3))

var base4=base(4)
console.log(base4(3))
var base10=base(10)
console.log(base10(2))
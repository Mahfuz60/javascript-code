//pure function example

function sqr(n){
    return n*n
}

console.log(sqr(2))
console.log(sqr(3))
console.log(sqr(5))


//Node a pure function

var a=10
function change(){
     a=100
}
console.log(a) //a ar value not a change function call ae console ae print korle
change()
console.log(a)//a ar value change function call ar pore console ae print korle


//object related method 

var obj={
    x:10,
    y:50,
    z:80
}

//keys method
console.log(Object.keys(obj))

//values method
console.log(Object.values(obj))

//entries method

console.log(Object.entries(obj))

//assign new object
var obj2=Object.assign({},obj)
obj2.y=200
console.log(obj)
console.log(obj2)
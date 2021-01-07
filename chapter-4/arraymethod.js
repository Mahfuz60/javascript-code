//Basic array method

var arr=[4,5,6,7,8,9,10]


//join method
console.log(arr.join(' '))
console.log(arr.join( ' , '))
console.log(arr.join(' | '))
console.log(arr.join(' ..... '))

//fill method
//arr.fill(0)
//console.log(arr)

//concat method 
var arr2=[11,15,14,16,17,18]
var arr3=arr.concat(arr2)
console.log(arr3)

// Capital Array method

var a=[1,2,3]
 var b=Array.from(a)

 b[0]=6
 b[2]=4

 console.log(a)
 console.log(b)
 
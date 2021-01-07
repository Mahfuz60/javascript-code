//Map function expression
var arr=[1,2,3,4,5]
/*var sqrArray=arr.map(function(value,index,arr){
    //return Math.random()*100
      return value*value
   

})
console.log(arr)
console.log(sqrArray)
*/

//create general rules  map function

function myMap(arr,cb){
    var newArr=[]
    for(var i=0;i<arr.length;i++){
        //var temp=arr[i]*arr[i]
        var temp=cb(arr[i],i,arr)
        newArr.push(temp)
    }
    return newArr
}

//console.log(arr)
//console.log(myMap(arr))
var cube=myMap(arr,function(value){
    return value*value*value
})

var mTen=myMap(arr,function(value){
    return value*10
})

console.log(arr)
console.log(cube)
console.log(mTen)
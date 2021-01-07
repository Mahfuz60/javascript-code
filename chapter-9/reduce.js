//Reduce function expression

/*var arr=[1,2,6,4,7,8,9,10]

var sum=arr.reduce(function(previous,current){
    return previous+current
},0)  
var max=arr.reduce(function(previous,current){
    return Math.max(previous,current)
},0)
console.log(sum)
console.log(max)
*/

//create a reduce function implementation
var newArr=[1,2,5,4,6,8,7,9,10]
function myReduce(newArr,cb,acc){
    for(var i=0;i<newArr.length;i++){
            acc=cb(acc,newArr[i])
        }
        return acc
}

var sum=myReduce(newArr,function(prev,curr){
    return prev+curr
},0)

var max=myReduce(newArr,function(prev,curr){
        return Math.max(prev,curr)
    },0)

var min=myReduce(newArr,function(prev,curr){
    return Math.min(prev,curr)
},newArr[0])    
    console.log(newArr)
    console.log("Sum:"+sum)
    console.log("Maxnum:"+max)
    console.log("Minnum:"+min)
    


var arr=[2,5,4,80,70,60,90,10,15,18,19]

/*var result= arr.find(function(value){
    return value==18
})
console.log("value:"+result)

var result2=arr.findIndex(function(value){
    return value==19
})
console.log("index:"+result2)
*/

//implementation find function

var myFind=function(arr,cb){
    for(var i=0;i<arr.length;i++){
        if (cb(arr[i])){
            return arr[i] //value show 
            //return i  //index show 
        }
    }
}

var result=myFind(arr,function(value){
    return value==15
})

console.log(result)
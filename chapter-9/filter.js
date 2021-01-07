//filter used function
var arr=[2,30,4,50,16,27,8,99,10,73,75,72]

/*var filteredArr=arr.filter(function(value){
     return value%2==0 // search even number
     //return value%2==1//search odd num
     //return value>5
     //return value<5
     
    }

    
)

console.log(filteredArr)
*/

//filter function implementation

var myFilter=function(arr,cb){
    var newArr=[]
    for(var i=0;i<arr.length;i++){
       if(cb(arr[i],i,arr)){
           newArr.push(arr[i])

       }
    }
    return newArr
}
console.log(arr)

console.log("EvenNumber:"+myFilter(arr,function(value){
    return value%2==0
}))

console.log("OddNumber:"+myFilter(arr,function(value
    ){
        return value%2==1
    }))


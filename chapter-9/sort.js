var persons=[
    {
        name:"A",
        age:25
    },
    {
        name:"B",
        age:20
    },
    {
        name:"C",
        age:18
    
    },
    {
        name:"D",
        age:29
    },
    {
        name:"E",
        age:27
    }
]

var arr=[1,4,6,8,-9,9,0,-8,5,-6,10,-15,2,16,17]

//This technique not be working


/*arr.sort()
console.log(arr)

persons.sort()
console.log(persons)
*/



//This technique is working
var arr=[1,4,6,8,-9,9,0,-8,5,-6,10,-15,2,16,17]

arr.sort(function(a,b){
    if(a>b){
        return 1  //ascending order (small to big )
        //return -1 //descending order(big to small)

    }
    else if(a<b){
        return -1
        //return 1
    }
    else{
        return 0
    }
})

/*arr.sort(function(a,b){
    return a-b
})*/
console.log(arr)

persons.sort(function(a,b){
    if(a.age>b.age){
        return 1
    }
    else if(a.age<b.age){
        return -1
    }
    else{
        return 0
    }
})

/*persons.sort(function(a,b){
    return a.age-b.age
})
*/
console.log(persons)

//Every function used to all number  even and positive number search

var arr1=[1,5,8,9,7,6,10]

var result1=arr1.every(function(value){
    return value%2==0
})

console.log(result1)

//all positive number check
var result2=arr1.every(function(value){
    return value>=0


})
console.log(result2)

// some function used minimum one number odd and negative number attend this array

var arr2=[2,4,6,8,7,9,-6,-5]

var result3=arr2.some(function(value){
    return value%2==1
})

var result4=arr2.some(function(value){
    return value<0
})

console.log(result3)
console.log(result4) 
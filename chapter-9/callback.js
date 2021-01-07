function sample(a,b,cb){
    var c=a+b//13
    var d=a-b//-3
    var result=cb(c,d)//13-3=10;cb=sum
    return result
}

//function sum(a,b){
    //return a+b}


//console.log(sample(5,8))  //then output 10

var result1=sample(10,8,function(c,d){
    return c+d
})

console.log(result1)


var result2=sample(10,8,function(c,d){
    return c-d
})
console.log(result2)

var result3=sample(10,8,function(c,d){
    return c*d
})
console.log(result3)

var result4=sample(10,8,function(c,d){
    return c/d

})

console.log(result4)
    

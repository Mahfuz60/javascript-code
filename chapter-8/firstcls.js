//first class function

//function canbe stored in variable

function add(a,b){
    return a+b

}

var sum=add
console.log(typeof(sum))
console.log(sum(4,5))


// fuction canbe stored in array
 var arr=[]
 arr.push(add)
 console.log(arr)
 console.log(arr[0](7,5))

 //function canbe stored object 
 var obj={
     sum:add
}
 console.log(obj)
 console.log(obj.sum(10,7))


 //create function any place need

 setTimeout(function() {
     console.log("I have created.....")
 }, 5000);

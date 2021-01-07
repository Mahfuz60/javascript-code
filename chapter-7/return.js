function addAll(){
    var sum=0
    for(var i=0;i<arguments.length;i++){
        sum+=arguments[i]
    }
    return sum
}
var result=addAll(1,2,5)

console.log(result)

// return method used 
function person(name,email){
    return{
        name:name,
        email:email
    }

}

var per=person('Mahfuz Alam','mahfuzalam@gmail.com')
console.log(per)
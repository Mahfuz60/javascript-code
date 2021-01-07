// Argument or parameter passing  function

/*function calculate(a,b){

    var sum=a+b
    console.log(sum)
    var subtract=a-b
    console.log(subtract)
    var multiply=a*b
    console.log(multiply)
    var division=a/b
    console.log(division)
    var mod=a%b
    console.log(mod)
    


}
calculate(80,40)
*/

//Array summation

var arr1=[4,5,7,9,10]
var arr2=[8,9,5,4,6]
var arr3=[9,5,7,6,2]

function sumOfArray(arr) {
    var sum=0
    for(var i=0;i<arr.length;i++){
        sum+=arr[i]
        
        

    }
    console.log(sum)
    
}

sumOfArray(arr1)
sumOfArray(arr2)
sumOfArray(arr3)


var a='abc'
function x(){
    function y(){
        var a=10
        console.log(a)
    }
    y()
}
x()


//scope function


function test(n){

    function a(){
        return n%3==0
    }
    function b(){
        return n%5==0

    }
    if(a()&&b()){
        console.log(n+' is divisible both number 3 and 5')
    }
    else{
        console.log("Not a valid number!")
    }
}
test(10)
test(15)
test(30)
test(50)
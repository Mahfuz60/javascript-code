//higher order function

function add(a,b){
  return a+b
}

function manipulate(a,b,func){
    var c=a+b
    var d=a-b

    /*function multiply(){
      var m=func(a,b)
      return c*d*m

    }
    return multiply
    */
   return function (){
    var m=func(a,b)
    return c*d*m

  }

}

var multiply=manipulate(4,5,add)
console.log(multiply)
console.log(multiply())

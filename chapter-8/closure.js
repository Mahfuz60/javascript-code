//firstly look at closure

var b=10

function a(){
    var x=10
  return function(){
      console.log(x)
      

  }

}

var abc=a()
console.dir(abc)
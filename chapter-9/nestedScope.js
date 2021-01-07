//Nested Scope for Javascript

var x=65     //global variable
function test(){     //parent scope
    //var x=45
   // console.log(x)
    function nested(){   //child scope
        //var y=10
       console.log(x)
        
    }
    //console.log(y)=>no result show because scope baire call kora hoice


    nested()
}
test()
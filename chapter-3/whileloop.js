//While loop statement 
/*
var i=1
while(i<=10){
    console.log(i+" .Mahfuz")
    ++i
}
*/

var isRunning=true
while(isRunning){
    var rand=Math.floor((Math.random()*10+1))
    if(rand==9){
        console.log("Winner Winner chicken Dinner")
        isRunning=false
    }
    else{
        console.log("You got this "+rand)
    }
}
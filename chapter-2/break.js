//Break Statement

while(true){
    var rand=Math.floor(Math.random()*10+1)

    if(rand==9){
        console.log("Winner Winner Chicken Dinner")
        break
        
    }

    else{
        console.log("You got this " + rand)
    }
}

for(var i=1;i<=15;i++){
    if(i%5==0){
        break
    }
    else{
        console.log(i)
    }
}
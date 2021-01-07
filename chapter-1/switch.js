
var date=new Date()
//0-monday,1-tuesday,2-wednesday,3-thursday

var today=date.getDay()
switch(today){
    case 0:
        console.log("Today is Monday")
        break
    case 1:
        console.log("TOday is Tuesday") 
        break
    case 2:
        console.log("TOday is Wednesday") 
        break
    case 3:
        console.log("Today is Thursday")
        break
    case 4:
        console.log("TOday is Friday")
        break
    case 5:
        console.log("Today is Saturday")   
        break
    case 6:
        console.log("Today is Sunday")
        break
    default:
        console.log("Not a valid Day")    




}
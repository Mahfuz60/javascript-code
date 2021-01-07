//Currying in Javascript 
function add(a,b,c){
    return a+b+c

}
//add(5,10,20)=>result asbe na 


function Currying(a){
    return function(b){

        return function(c){

            return a+b+c

        }
    }

}

var result=Currying(5)(10)(15)
console.log(result)
//Search data

var arr=[1,5,7,6,9,78,52,46,85,96,41,12,36,40]

var find=5
var isFound=false
for(var i=0;i<arr.length;i++){
    if(arr[i]==find){

        console.log( ". Yes!Data found it,index "+i)
        isFound=true
        break
    }
    
    

}
if(!isFound){
    console.log("Data is Not FOund it!")
}


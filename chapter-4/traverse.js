//Traversing an Array

var arr=[40,50,48,90,47,23,53,82,90,55,64,94,76]

//(arr.length-1) main all time array te index [0] thake count start hoie thake 

for(var i=0;i<arr.length;i++){

    //console.log(arr[i])

    arr[i]=arr[i]+3  //Original value ste +3 add hbe 
}
console.log(arr)


// Array SUmmation

var sum=0
for(var i=0;i<arr.length;i++){
    sum+=arr[i]
}
console.log(sum)

//Even NUmber ber kro

for(var i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        console.log(arr[i])
    }
}

//Odd Number ber kro

for(var i=0;i<arr.length;i++){
    if(arr[i]%2==1){
        console.log(arr[i])
    }
}
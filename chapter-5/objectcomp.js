//object comparing

var obj1={
    x:10,
    y:20,
    z:30
}

var obj2={
    x:10,
    y:20,
    z:30

}

if(obj1.x==obj2.x && obj1.y==obj2.y && 
    obj1.z==obj2.z){
    console.log(true)
}
else{
    console.log(false)
}


//JSON property used 

console.log(JSON.stringify(obj1)==JSON.stringify(obj2))

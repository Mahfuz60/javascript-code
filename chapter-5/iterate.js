var obj={
    x:15,
    y:60
}

//console.log('x' in obj)

for(var i in obj){
    console.log(i)
    console.log(i +':'+obj[i])
}
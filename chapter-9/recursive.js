function seyHi(n){
    if(n===0){
        return
    }
    console.log("Hi,I am Busy")
    seyHi(n-1)
}
seyHi(10)

//another sum calculation
function sum(n){
    if(n===1){
        return 1
    }

    return n+sum(n-1)
}
console.log(sum(5))

//factorial calculation

function fact(n){
    if(n===1){
        return 1
    }
    return n*fact(n-1)
}

console.log(fact(5))

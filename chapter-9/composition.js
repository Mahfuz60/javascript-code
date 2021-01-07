// Composition Function 
// akta function ar output onno akta function ar input hisabe use kora 

function print(inp){
    console.log(inp)
}

function multiplyByTen(n){
    return n*10
}

function add(a,b){
    return a+b
}

print(multiplyByTen(add(5,4)))
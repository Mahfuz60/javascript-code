var point={
    x:50,
    y:60,
    z:80,
    w:70
}

console.log(point)

point.w=undefined
console.log(point)


//property remove used delete operator

delete point.w
console.log(point)
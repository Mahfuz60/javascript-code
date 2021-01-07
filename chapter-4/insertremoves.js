//insert and removes element array

var arr=[1,2,3,4,5,6,7,8,9,10,11]

//1st index ae element add
arr.unshift(4)
console.log(arr)
//last index ae element add
arr.push(40)
console.log(arr)

//insert 50 index 7

arr.splice(7,0,50)//(no. of start index,data delete count,adding value)
console.log(arr)

//Removes element

//last data remove
arr.pop()
console.log(arr)

//1st data remove

arr.shift()
console.log(arr)
//remove data index 5
arr.splice(4,1)
console.log(arr)
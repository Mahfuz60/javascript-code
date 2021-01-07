//string method explain

var a="I am"
var b="Mahfuz Alam"
var c=a.concat(' ',b)//concat method used 
console.log( c)


//substring method

var d="I am"
var e="Mahfuz"
var f=d.concat('',e)

//var g=f.substring(4)
//length bole dawa hoche (4 to next koto pojonto print korbe )

//console.log(g)
//fixed character ber korar jonne
console.log(f.charAt(6))
console.log(f.startsWith('I am'))
console.log(f.endsWith('mahfuz'))

var mah='mahfuz alam '
var hri='AHMED HRIDOY'
console.log(mah.toUpperCase())
console.log(hri.toLocaleLowerCase())


//unwanted space remove
var ji='     mahfuzAlam     '
console.log(ji.trim())

// big string ke word ae convert 

var you='mahfuz alam you are ok now!please explain your Problem'
console.log(you.split(' '))
console.log(you.split(''))
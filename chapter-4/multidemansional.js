//Multidemansional Array

//2D Array
var arr=[                  
    [79,89,87,95,5],
    [85,89,74,76,78],
    [89,73,79,82,71]
]

//console.log(arr)
//console.log(arr[0][2])
//console.log(arr[1][3])
//console.log(arr[2][0])

for(var i=0;i<arr.length;i++){

    for(var j=0;j<arr[i].length;j++){

        console.log('Element '+i+': '+ arr[i][j])

    }
}


//3D Array

var trl=[
    [
        [12,45,56,7,8,49,96,47],
        [41,52,96,71,74,85,96,1],
        [1,2,3,4,5,6,7,8,9,10]
    ]

]

for(var i=0;i<trl.length;i++){
    //console.log(trl[i])
    for(var j=0;j<trl[i].length;j++){
        console.log('Element'+i+':'+trl[i][j])
        for(var k=0;k<trl[i][j].length;k++){
            console.log("Elements "+i+":"+trl[i][j][k])
        }
    }
}
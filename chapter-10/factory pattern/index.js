/*var rect={
    width:150,
    height:100,


    draw: function(){
        console.log("I am rectangle")
        this.printProperties()
    },

    printProperties: function(){
        console.log("my width is:"+this.width)
        console.log("my height is:"+this.height)

    },
}
*/

//Factory Pattern Problem


var createRect=function(width,height){
    return{
        width:width,
        height:height,
    
    
        draw: function(){
            console.log("I am rectangle")
            this.printProperties()
        },
    
        printProperties: function(){
            console.log("my width is:"+this.width)
            console.log("my height is:"+this.height)
    
        },
    }

}

var rect1=createRect(20,10)
rect1.draw()

var rect2=createRect(50,30)
rect2.draw()

var rect3=createRect(50,100)
rect3.draw()

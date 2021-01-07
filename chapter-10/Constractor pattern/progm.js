//Constructor Pattern Problem

var Rectangle=function(width,height){
    this.width=width
    this.height=height
    
    
        this.draw=function(){
            console.log("I am rectangle")
            this.printProperties()
        }
    
        this.printProperties= function(){
            console.log("my width is:"+this.width)
            console.log("my height is:"+this.height)
    
        }
    

}

rect1= new Rectangle(20,50) //new javascript reserve keyword

rect1.draw()

rect2=new Rectangle(50,40)
rect2.draw()

/*var str=new String('str')
console.log("My string is:"+str)
*/


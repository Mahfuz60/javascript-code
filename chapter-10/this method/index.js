var rect={
    width:50,
    height:40,


    draw: function(){
        console.log("I am rectangle")
        this.printProperties()
    },

    printProperties: function(){
        console.log("my width is:"+this.width)
        console.log("my height is:"+this.height)

    },
}

rect.draw()
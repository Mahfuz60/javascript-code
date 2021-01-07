
var Rect={
    width:100,
    height:50,

    draw:function(){
        console.log('I am rectangular');
        console.log("My width is:"+this.width);
        console.log("My height is:"+this.height);

    }
};
Rect.draw();
Rect.height=200;
Rect.width=150;

Rect.draw();



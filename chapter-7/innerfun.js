//nested function

function something(greet,name){
    function sayHi(){
        console.log(greet,name)
    }

    sayHi()
}
something("Good Morning","Mahfuz Alam")


//inner function

function saySome(greet,name){
    function getFirstName(){
        if(name){
            return name.split(' ')[0]
        }

        else{

            return ' '
        }
    }
    var message= greet +' '+ getFirstName()
    console.log(message)
}

saySome('Good Morning','Mahfuz Alam Sumon')


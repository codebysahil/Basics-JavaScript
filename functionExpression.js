// function without name

// anonymous function with the function expression.

let sayHello =function(){
    console.log("This function has no name");
}

// internal name ==> no name of the function
// external name ==> sayHello()

// can anonymous function be hoisted ?? --> cannot be hoisted and only named function can be hoisted.

sayHello();


let addFunction =function(a,b){
    return a+b;
}

s1 =addFunction(10,20);
console.log(s1);

console.log(addFunction.name); // prints the external name of the function.

let isBrowserLaunched =function(broname){
    switch(broname){
        case 'chrome':
            console.log("Chrome selected ");
            return true;
        case 'silver':
            console.log("silver selected");
            return true;
        default:
            console.log("nothing is selected");
            return false;

    }
}

let res1 =isBrowserLaunched('chrome');
console.log(res1);

if(isBrowserLaunched('silver')){
    console.log("You have selected silver");
}


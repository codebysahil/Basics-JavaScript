// IIFE --> Immediately invoked Function expression

// also a no name function
// no external name
// not a reusable function
// cannot assigned an external name
// can return something
// parameters can be passed
(function(){
    console.log("Start the server");
})();






(function(servername){

    console.log("start the server .."+ servername);
})('tomcat');




let empDetails=(function(empName){

    console.log(empName+ " is the employee name");
    return empName.toUpperCase();
})('suboh');

console.log(empDetails);

// here empDetails is not a functional expression


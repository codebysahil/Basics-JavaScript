// IIFE --> Immediately invoked Function expression

// also a no name function
// no external name
// not a reusable function
// parameters can be passed
(function(){
    console.log("Start the server");
})();






(function(servername){

    console.log("start the server .."+ servername);
})('tomcat');

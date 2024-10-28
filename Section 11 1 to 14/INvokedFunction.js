//SOMETIMES WE NEED FUNCTION LIKE ONLY EXECUTED ONCE AND THEN DISSPEAR SOMEWHERE 
//SO IT WILL NEED THIS METHOD WITH ASYNC AWAIT 

const deep = function() {
    console.log('I am hadugar');
};


deep(); 

// IIFE - this function is invoked immediately
(function() {
    console.log('I am hadugar'); 
})();
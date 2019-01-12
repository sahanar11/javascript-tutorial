//Generally speaking, a function is a "subprogram" that can be called by code external to func
//Like the program itself, a function is composed of a sequence of statements called the function body. 
//Values can be passed to a function, and the function will return a value.

/* Declare the function 'myFunc' */
// To return a value other than the default, a function must have a return statement that specifies the value to return.
function myFunc(theObject) {
    theObject.brand = "Toyota";
  }

 var mycar = {
   brand: "Honda",
   model: "Accord",
   year: 1998
 };
  /* Pass object reference to the function */
myFunc(mycar);

//A function expression may be a part of a larger expression. 
var myFunction = function() {             //anonymous function
    statements
}


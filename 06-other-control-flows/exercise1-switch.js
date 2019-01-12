// control flows using switch statements.. this is similar to multiple if conditions
// when we want to check some value with many values then if/else will be less efficient compared to switch
// expression can be of type numbers or strings.
// Dulplicate case values are not allowed.
// The default statement is optional. If the expression passed to switch does not matches with value in any case then the statement under default will be executed.
// The break statement is optional. If omitted, execution will continue on into the next case.

var Animal = 'Giraffe';
switch (Animal) {
  case 'Cow':
  case 'Giraffe':
  case 'Dog':
  case 'Pig':
    console.log('This animal will go on Noah\'s Ark.');
    break;
  case 'Dinosaur':
  default:
    console.log('This animal will not.');
}


/////////////////////////////////////////////////////////////////////////////////////////
// cases where you would want to use let and const statements to declare block-scoped variables.

const action = 'say_hello';
switch (action) {
  case 'say_hello':
    let message = 'hello';
    console.log(message);
    break;
  case 'say_hi':
    let message = 'hi';               // Uncaught SyntaxError: Identifier 'message' has already been declared
    console.log(message);
    break;
  default:
    console.log('Empty action received.');
    break;
}

// Solution to above problem

const action = 'say_hello';
switch (action) {
  case 'say_hello': { // added brackets
    let message = 'hello';
    console.log(message);
    break;
  } // added brackets
  case 'say_hi': { // added brackets
    let message = 'hi';
    console.log(message);
    break;
  } // added brackets
  default: { // added brackets
    console.log('Empty action received.');
    break;
  } // added brackets
}
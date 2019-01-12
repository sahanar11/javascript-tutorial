//The comma operator evaluates each of its operands (from left to right) and returns the value of the last operand.
var x = 1;
x = (x++, x);
console.log(x);
x = (2, 3);          // what is the o/p when we change this expression to x=(2,3,x+5);
console.log(x);


////////////////////////// 2d array /////////////////////

for (var i = 0, j = 9; i <= 9; i++, j--)
  console.log('a[' + i + '][' + j + '] = ' + a[i][j]);

/////////////////////////////////////////////////////////

a = b = 3, c = 6;  // what is the output of this

///////////////////////////////////////////////////////////

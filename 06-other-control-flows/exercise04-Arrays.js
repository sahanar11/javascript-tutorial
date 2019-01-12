// Arrays are generally described as "list-like objects";
// they are basically single objects that contain multiple values stored in a list. 

var shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
shopping;

var sequence = [1, 1, 2, 3, 5, 8, 13];
var random = ['tree', 795, [0, 1, 2]];

//Converting between strings and arrays

var myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
// Now let's split it at each comma:
var myArray = myData.split(',');
myArray;


var myNewString = myArray.join(',');
myNewString;

// some more methods in Arrays

myArray.push('Bristol');
myArray.pop();
myArray.unshift('Edinburgh');
var removedItem = myArray.shift();
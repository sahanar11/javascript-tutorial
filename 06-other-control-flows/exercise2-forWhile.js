// Loops are other type of control flows. which execute piece of code untill the condition mentioned is false

for(
var i = 0;  // starting point for a loop
i < 10;     // Loop continues untill the Condition is false
i++         // this is to change the initial value of i .. otherwise loop would run infinite times
){
    console.log(i);   // print 0 to 9 numbers
};

for( var i = 0; i>=0; i++){ console.log(i)};     // infinite loop and would crash 

var k = 0;
do {                                   // this excutes the code atleast once
console.log(k);     
k++;
} while(k < 11);

while(k < 11 ) {
    console.log(k);
    k++;
}
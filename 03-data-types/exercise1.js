// Primitive data types of JS - String, Number, Boolean, Null, Undefined --- basic building blocks of any programming language

console.log(2 + 2);                    //number

console.log(2 + "2");                  //string

console.log("Hello" + "World" );       //string

console.log("Hello" + " " + "world");  //string

console.log(10 > 2);  True             //Boolean

console.log(10 < 2);  False            //Boolean

typeof(10 > 2);                        //Boolean

typeof(a+b);                           //Ref Error

//---------------------------------------------------------------------------------------------------------------------
typeof(null);                          //object 
//In the first implementation of JavaScript, values were represented in two parts - a type tag and the actual value. 
//There were 5 type tags that could be used, and the tag for referencing an object was 0. 
//The null value, however, was represented as the NULL pointer, which was 0x00 for most platforms. 
//As a result of this similarity, null has the 0 type tag, which corresponds to an object.
//---------------------------------------------------------------------------------------------------------------------

typeof(undefined);                     //undefined

typeof(object);                        //function

var a = [1,2];
typeof(a);                             //object

//-----------------------------------------------------------------------------------------------------------------------
typeof(NaN);                           //number
// while computing numeric value is only used. so the name "Not a Number", doesn't mean that the value is not numeric. 
//It instead means that the value cannot be expressed with numbers.

//------------------------------------------------------------------------------------------

typeof(typeof(123));                  // string . typeof operator always returns a string .



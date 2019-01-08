// Comparison operators

var a = "2";
if(a == 2){               // "==" operator does not match the datatype
    alert("correct");
} else if( a === 2){     // "===" operator matches both value and datatype
    alert("wrong");
} else if (a != 0){      // "!=" operator check if value is not equal to other
    alert("correct");
}

if(a != 0 && a == 2) {   // True if both condition is true
    alert("correct");
}
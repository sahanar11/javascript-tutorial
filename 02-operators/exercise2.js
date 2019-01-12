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

//////////////////////// Bitwise operators ///////////////////////////////////////////////

console.log(5 & 13); // 0101 & 1101 = 0101

console.log(parseInt("0101",2) & parseInt("1101",2));

console.log(5 & 13 & 3); // 0101 & 1101 & 0011 = 0001

console.log(5 | 13); // 0101 | 1101 = 1101

console.log(5 ^ 13); // 101 ^ 1101 = 1000
console.log(~5 );  // -6
                                // ~ Not operator yields -( X + 1)  as output
console.log(~(-4));  // 3

console.log(9 << 2); // 1001 -> 100100 = 36
console.log(9 >> 2); // 1001 -> 0010 = 2
console.log(-9 << 2); // 1001 -> 100100 = 36

// """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

// Operator	Usage	Description
// Bitwise AND	a & b	Returns a 1 in each bit position for which the corresponding bits of both operands are 1s.
// Bitwise OR	a | b	Returns a 1 in each bit position for which the corresponding bits of either or both operands are 1s.
// Bitwise XOR	a ^ b	Returns a 1 in each bit position for which the corresponding bits of either but not both operands are 1s.
// Bitwise NOT	~ a	Inverts the bits of its operand.
// Left shift	a << b	Shifts a in binary representation b (< 32) bits to the left, shifting in 0s from the right.
// Sign-propagating right shift	a >> b	Shifts a in binary representation b (< 32) bits to the right, discarding bits shifted off.
// Zero-fill right shift	a >>> b	Shifts a in binary representation b (< 32) bits to the right, discarding bits shifted off, and shifting in 0s from the left.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
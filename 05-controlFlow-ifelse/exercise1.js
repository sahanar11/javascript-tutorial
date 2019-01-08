// Using Control flow allows us to run code only under certain conditions.

var answer = prompt("what is capital of india?");
if(answer === "Delhi"){
    alert("Answer is correct!");
} else {
    alert("Sorry, wrong answer try again");
}

//=========================================================================
// if we want to check for multiple conditions

function leapYear(year){
    var result; 
    year = parseInt(document.getElementById("isYear").value);
    if (years/400){
      result = true;
    }
    else if(years/100){
      result = false;
    }
    else if(years/4){
      result= true;
    }
    else{
      result= false;
    }
    return result; 
 }
leapYear(2010);
//"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

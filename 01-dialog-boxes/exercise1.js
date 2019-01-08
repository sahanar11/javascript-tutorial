alert("this is a warning message");                                  // alert dialog box 


function getConfirmation() {
               var retVal = confirm("Do you want to continue ?");    //confirm dialog box
               if( retVal == true ) {
                  document.write ("User wants to continue!");
                  return true;
               } else {
                  document.write ("User does not want to continue!");
                  return false;
               }
            }

// getConfirmation();

var printstr = function(){
	var str = prompt("enter one string!!");                      //prompt dialog box
	console.log(str);
};

// printstr();


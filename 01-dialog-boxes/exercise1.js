   var printstr = function(){
   var str = prompt("What is the sum of 2 and 3 ?");           //prompt dialog box
   var retVal = confirm("Are you sure about your answer?");    //confirm dialog box
   if( retVal == null || retVal == ""){
      document.getElementById("User cancelled the prompt.");
   }
   if( retVal == true ) {
      if (str == 5){
          alert ("Hurrayy! your answer is right!");            //Alert dialog box
      return true; } else {
         alert ("Sorry! its a wrong answer. Try Again");
      }
      
   } else {
      str = prompt("Try Again ..What is the sum of 2 and 3 ?");    
      return false;
   }             
	console.log(str);
   };

   printstr();


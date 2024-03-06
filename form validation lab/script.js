function validateName() {
  let name= document.getElementById("fullName").value;
  if(name=="") throw new Error("Full name is required.");
}

function validateEmail() {
 let email = document.getElementById("email").value;
    let emailRegex = new RegExp("^([a-z0-9]+)@([a-z]+)\\.([a-z]{3})$");
    if (!emailRegex.test(email)) throw new Error("Error: Invalid Email Address.");
}

function validatePassword() {
    let p= new RegExp("^.{8,}$")
    if(!p.test(document.getElementById("password").value)) throw new Error(" Password must be at least 8 characters.");
    
}

function ConfirmPassword() {
    if(document.getElementById("password").value!=document.getElementById("confirmPassword").value)
     throw new Error ("Error: Passwords do not match.");
}

function validateForm() {
    try {

        /*Check whether all fields are entered or not*/
         if((document.getElementById("fullName").value=="")||(document.getElementById("email").value=="")||(document.getElementById("password").value=="")||(document.getElementById("confirmPassword").value=="")) throw new Error("Error: All fields are required.");
        validateName();
        validateEmail();
        validatePassword();
        ConfirmPassword();

        // Additional validation rules can be added here

        //After checking all the rules, if the program throws no error, it will reach this part of code.
        //Using "innerHTML" and "span" tag, give the message "Registration successful!" in GREEN colour to the div container "feedback" in index.html.
        //Your code here
      document.getElementById("feedback").innerHTML = '<span style="color:green;">Registration successful!</span>';
      
    } catch (error) {
        //After checking all the rules, if the program throws an error, it will reach this part of code.
        //Using "innerHTML" and "span" tag, give the error message in RED colour to the div container "feedback" in index.html.
        //Your code here
       document.getElementById("feedback").innerHTML = '<span style="color:red;">' + error.message + '</span>';
    }
}

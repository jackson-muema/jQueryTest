$().ready(function(){
    $("#signupForm").validate({
        //Here, user is supposed to set up all contraints regarding each field

        rules:{
            firstname: "required",
            lastname:"required",
            username:{
                required: true,
                minlength: 5
            },
            password:{
                required: true,         
                minlength: 5
            },
            confirm_password:{
                required: true,                
                minlength: 5,
                equalTo: "#password"
            },
            email:{
                required: true,
                email: true
            },
            agree: "required"

        },
        messages:{
            firstname: "Please enter you firstname.",
            lastname:" Please enter your lastname.",
            username:{
                required: "Please enter username.",
                minlength: "Username must be atleast 5 characters long."
            },
            password:{
                required: "Please enter your password. ",
                minlength: " Password must be atleast 5 characters long"
            },
            confirm_password:{
                required: " Re-enter your password here",
                minlength: " Password must be atleast 5 characters long",
                equalTo: " Passwords must match. "

            },
            email:{ 
                required: " Please enter password below.",
                email: " Email must be valid. "
            },
            agree: "Agree to terms and policy before proceeding. "

        }
    });
});
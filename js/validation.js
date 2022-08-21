$("#formValidation").validate({
    rules:{
        name:{
            required: true,
            minlength: 5   
        },
        email:{
            required: true,
            email_regex: /^([a-zA-Z0-9._]{5,50})([@]{1})([a-z]{5,15})([.]{1})([a-z]{2,6})$/,
        },
        password: {
            required: true,
            minlength: 8
        },
        confirmPassword: {
            required: true,
            minlength: 5,
            equalTo: "#password"
        },
    },

    messages: {
        name:{
            required: "Please enter your name",
            minlength: "Name should be atleast 5 characters"
        },
        email:{
            required: "Please enter your email",
            email_regex: "Please enter a valid email",
        },
        password:{
            required: "Please enter password",
            minlength: "Password should have length atleast of 8"
        },
        confirmPassword:{
            required: "Please enter password",
            minlength: "Password should have length atleast of 8",
            equalTo: "Password does not match"
        }
    },

    submitHandler: function(form) {
        form.preventDefault();
        form.submit();
    }
});

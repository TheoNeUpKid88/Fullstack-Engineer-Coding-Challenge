// Wait for the DOM to be ready
(function ($) {
  var shiftCypherRequest = function (data) {
    var api = "http://localhost:23456/api"
    return fetch(`${api}/encode`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Shift: data.shift,
        Message: data.message
      })
    }).then(function (result) {
      return result.json();
    });
  };
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='userSignUpForm']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      Username: "required",
      Email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      password: {
        required: true,
        minlength: 5
      },
      cmPassword: {
        required: true,
        minlength: 5
      }
    },
    // Specify validation error messages
    messages: {
      Username: "Your Username must cannot be more than 15 characters long",
      email: "Please enter a valid email address",
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },
      cmPassword: {
        required: "Make sure password matches",
        minlength: "Your password must be at least 5 characters long"
      },
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function (form) {
      form.submit();
    }
  });
  document.getElementById('form')
    .addEventListener('click', () => {
      shiftCypherRequest(proPlanId).then(function (data) {
        // request issued to webserver for shift cyper
      });
    })
});
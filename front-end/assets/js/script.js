// Wait for the DOM to be ready
$(document).ready(function () {
  const api = "http://localhost:23456/api/encode";
  var shiftCypherRequest = function (data) {
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
  // Initialize form validation on the form.
  $("form[name='userSignUpForm']").validate({
    wrapper: "div",
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      Username: {
        required: true,
        minlength: 5,
        maxlength: 15
      },
      Email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true,
        maxlength: 20,
      },
      Password: {
        required: true,
        minlength: 5,
        maxlength: 10,
      },
      cmPassword: {
        required: true,
        minlength: 5,
        maxlength: 10,
        equalTo: "#Password"
      },
    },
    // Specify validation error messages
    messages: {
      Username: {
        required: "Please provide Username",
        minlength: "Your Username must cannot be less than 5 or more than 15 characters long",
        maxlength: "Your Username must cannot be less than 5 or more than 15 characters long",
      },
      email: {
        required: "Please enter a valid email address",
        minlength: "Your password must be at least 5 characters long",
        maxlength: "Your password must be at least 20 characters long"
      },
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long",
        maxlength: "Your password must be at least 10 characters long"
      },
      cmPassword: {
        required: "Make sure password matches",
      },
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function (form) {
      form.preventDefault();
      form.submit(); // <- use 'form' argument here.
    }
  });

  $('form').find(':input').each(function (index, value) {
    /**
     * Author: Ramon Jr. Yiguez
     * Purpose: Traverse Form Inputs and validate, else disable button
     * Date: Apr 16, 2020
     */
    $(value).on('click', function () {
      if ($('form').valid()) {
        $("#userSignUpFormButton").prop('disabled', false);
      }
    })
    console.log(value.validity.valid, $('form').valid());
  })
  document.getElementById('userSignUpFormButton')
    .addEventListener('click', () => {
      /**
       * Author: Ramon Jr. Yiguez
       * Purpose: Register Event Listener for Button Click, and issue request based on BackEnd Selection
       * Date: Apr 16, 2020
       */
      formVal = {
        Username: $('#Username').val(),
        Email: $('#Email').val(),
        Password: $('#Password').val(),
        cmPassword: $('#cmPassword').val(),
      }
      console.log('Form', formVal);
      $("select").on('load click', function (selected) {
        if (selected.target.value !== 'PHP') {
          $('form').attr("action", `${api}`);
          shiftCypherRequest(formVal).then(function (data) {
            // request issued to webserver for shift cyper response here
          });
        } else {
          $('form').attr("action", "/php/script.php");
        }
      })
    });
});
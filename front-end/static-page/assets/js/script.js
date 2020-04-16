// Wait for the DOM to be ready
$(document).ready(function () {
  /**
   * Author: Ramon Jr. Yniguez
   * Purpose: Highligh, JQuery Knowlege and implementation
   * Date: Apr 16, 2020
   */
  const api = "http://localhost:23456/api";
  var apiJQueryRequestExample = function (data) {
    return fetch(`${api}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Username: Username,
        Email: data.email,
        Password: password,
        cmPassword: cmpassword
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
        required: "Make sure it matches password",
      },
    },
    // fomr button handler
    submitHandler: function (form) {
      form.submit(); // <- use 'form' argument here.
    }
  });
  // validate form inputs
  $('form').find(':input').each(function (index, value) {
    /**
     * Author: Ramon Jr. Yiguez
     * Purpose: Traverse Form Inputs and validate, else disable button
     * Date: Apr 16, 2020
     */
    $(value).on('click', function () {
      if ($('form').valid()) {
        $("#userSignUpFormButton").prop('disabled', false);
        console.log('if Condition', value.validity.valid, $('form').valid());
      } else {
        $("#userSignUpFormButton").prop('disabled', true);
        console.log('else Condition', value.validity.valid, $('form').valid());
      }
    })
  })
  $(document.body).on('click', function (value) {
    if ($('form').valid()) {
      $("#userSignUpFormButton").prop('disabled', false);
      console.log('if Condition', value.valid, $('form').valid());
    } else {
      $("#userSignUpFormButton").prop('disabled', true);
      console.log('else Condition', value.valid, $('form').valid());
    }
    document.getElementById('userSignUpFormButton')
      .addEventListener('click', () => {
        /**
         * Author: Ramon Jr. Yiguez
         * Purpose: Register Event Listener for Button Click, and issue request based on BackEnd Selection
         * Date: Apr 16, 2020
         */
      })
  });
});
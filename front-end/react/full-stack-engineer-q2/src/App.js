import React from 'react';
import logo from './favicon.png';
import $ from 'jquery';
import './App.css';


function App() {
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
          'Username': data.Username,
          'Email': data.email,
          'Password': data.password,
          'cmPassword': data.cmpassword
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
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a href="https://www.lightfeather.io">LightFeather.io</a>

        <h1>Full Stack Engineer Coding Challenge</h1>
        <br />
        <section>
          <div>
            <h4> <u>Question 2: Web Component Specifications</u></h4>
            <p>
              Create a User SignUp that accepts the following fields:
            </p>
            <ul>
              <li>
                Username
                </li>
              <li>
                Email
                </li>
              <li>
                Password
                </li>
              <li>
                Confirm Password
                </li>
            </ul>
          </div>
          <br />
          <div>
            <form action="./assets/php/login.php" method="post" name="userSignUpForm" autocomplete="off">
              <fieldset>
                <div>
                  <label for="Username">Username:</label>
                  <input maxlength="15" minlength="5" name="Username" type="text" id="Username" spellcheck="false"
                    pattern="^([- \w\d\u00c0-\u024f]+)$" autofocus required />
                </div>
                <div>
                  <label for="Email">Email:</label>
                  <input type="email" name="Email" id="Email" spellcheck="false"
                    pattern="^(([-\w\d]+)(\.[-\w\d]+)*@([-\w\d]+)(\.[-\w\d]+)*(\.([a-zA-Z]{2,5}|[\d]{1,3})){1,2})$"
                    autofocus required />
                </div>
                <div>
                  <label for="Passowrd">Password:</label>
                  <input minlength="5" name="Password" type="text" id="Password" autofocus required />
                </div>
                <div>
                  <label for="cmPassword">Confirm Password:</label>
                  <input minlength="5" name="cmPassword" type="text" id="cmPassword" autofocus required />
                </div>
                <div>
                  <button type="submit" id="userSignUpFormButton" disabled>Submit</button>
                </div>
              </fieldset>
            </form>
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;

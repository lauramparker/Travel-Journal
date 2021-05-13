$(document).ready(function() {
 
  var signUpForm = $(".signup");
  var name = $(".firstLastName");
  var email = $('.email');
  var password = $('.password');

  signUpForm.on('submit', (event) => {
    event.preventDefault();
console.log(name.val());
    let userData = {
      name: name.val().trim(),
      email: email.val().trim(),
      password: password.val().trim(),
    };
    console.log(userData);
    if(!userData.name || !userData.email || !userData.password) {
      return;
    }

    signUp(userData.name, userData.email, userData.password);
    name.val("");
    email.val("");
    password.val("");
  });

  function signUp(name, email, password) {
    $.post('/api/signup', {
      name: name,
      email: email,
      password: password,
    })
      .then(function (data) {
        window.location.replace('/login');
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
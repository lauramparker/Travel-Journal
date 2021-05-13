$(document).ready(function() {
 
  var loginForm = $(".loginForm");
  var email = $('.email');
  var password = $('.password');

  loginForm.on('submit', (event) => {
    event.preventDefault();
    
    let userData = {
      email: email.val().trim(),
      password: password.val().trim(),
    };
    
    if(!userData.email || !userData.password) {
      return;
    }
    
    logIn(userData.email, userData.password);
    email.val("");
    password.val("");
  });

  function logIn(email, password) {
    $.post('/api/login', {
      email: email,
      password: password,
    })
      .then(function (data) {
        window.location.replace('/main');
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
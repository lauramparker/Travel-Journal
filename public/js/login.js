$(document).ready(function() {


//Carousel Images
$('.carousel').carousel({
  interval: 3000,
  cycle: true
});


//Login Form 
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
    app.post('/api/login', {
      email: email,
      password: password,
    })
      .then(function (data) {
        window.location.replace('/main.html');
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
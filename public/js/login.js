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
    } else {
      window.location.replace('/main.html')
    };
  
  });
});
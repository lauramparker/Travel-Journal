$(document).ready(function() {

//Carousel Images
$('.carousel').carousel({
  interval: 3000,
  pause: "false"
});

 //Signup Form
  var signUpForm = $(".signup");
  var name = $(".firstLastName");
  var email = $(".email");
  var password = $(".password");

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
    } else {
      window.location.replace('/login.html')
    };
  });

});
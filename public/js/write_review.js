$(document).ready(function() {
 
  var reviewForm = $(".reviewForm");
  var cityName = $("#inputCity");
  var cityReview = $("#cityReview");
  var hotelName = $("#inputHotel");
  var hotelReview = $("#hotelReview");

  reviewForm.on('submit', (event) => {
    event.preventDefault();

    let userData = {
      city_name: cityName.val().trim(),
      city_review: cityReview.val().trim(),
      hotel_name: hotelName.val().trim(),
      hotel_review: hotelReview.val().trim(),
    };
    console.log(userData);
    if(!userData.city_name || !userData.city_review) {
      return;
    }

    writeReview(userData.city_name, userData.city_review, userData.hotel_name, userData.hotel_review);
    cityName.val("");
    cityReview.val("");
    hotelName.val("");
    hotelReview.val("");
  });

  function writeReview(cityname, cityreview, hotelname, hotelreview) {
    $.post('/api/reviews', {
      city_name: cityname,
      city_review: cityreview,
      hotel_name: hotelname,
      hotel_review: hotelreview,
    })
      .then(function (data) {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
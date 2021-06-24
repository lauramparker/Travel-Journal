$(document).ready(function() {
 
  var reviewForm = $(".reviewForm");
  var cityName = $("#inputCity");
  var cityReview = $("#cityReview");
  var hotelName = $("#inputHotel");
  var hotelReview = $("#hotelReview");

  reviewForm.on('submit', (event) => {
    event.preventDefault();

    let cityData = {
      city_name: cityName.val().trim(),
      city_review: cityReview.val().trim(),
      hotel_name: hotelName.val().trim(),
      hotel_review: hotelReview.val().trim(),
    };
    console.log(cityData);
    if(!cityData.city_name || !cityData.city_review) {
      return;
    } else {
      window.location.replace('/main.html')
    };
  });
});
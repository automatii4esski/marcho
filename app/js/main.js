$(function () {

   $('.top-slider').slick({
      fade: true,
      dots: true,
      arrows: false,
      autoplay: true,
      autoplayspeed: 3500,
   });

   $(".product-item__rate").rateYo({
      starWidth: "16px",
      normalFill: "#ccccce",
      ratedFill: "#ffc35b",
      readOnly: true
   });

});
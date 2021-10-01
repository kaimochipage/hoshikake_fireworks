'use stript'; {

  //スライダー
  $('.slider').slick({
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    centerMode: true,
    variableWidth: true,
    dots: true,
  });

  //ヘッダー
  var nav_pos = $(".header").offset().top;
  var nav_height = $(".header").outerHeight();
  $(window).scroll(function () {
    if ($(this).scrollTop() > nav_pos) {
      $("body").css("padding-top", nav_height);
      $(".header").addClass("fixed");
    } else {
      $("body").css("padding-top", 0);
      $(".header").removeClass("fixed");
    }
  });
}

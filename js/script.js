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

  //PCヘッダー
  if (window.matchMedia("(min-width: 801px)").matches) {
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

  //SPヘッダー
  if (window.matchMedia("(max-width: 800px)").matches) {
    var nav_pos = $(".header--sp").offset().top;
    var nav_height = $(".header--sp").outerHeight();
    $(window).scroll(function () {
      if ($(this).scrollTop() > nav_pos) {
        $("body").css("padding-top", nav_height);
        $(".header--sp").addClass("fixed");
      } else {
        $("body").css("padding-top", 0);
        $(".header--sp").removeClass("fixed");
      }
    });
  }

  //ハンバーガー
  $('.burger-btn').on('click', function () {
    $('.burger-btn').toggleClass('close');
    $('.nav-wrapper').fadeToggle(500);
    $('body').toggleClass('noscroll');
  });

  $(function () {
    $('.nav-item').on('click', () => {
        $('.nav-wrapper').fadeOut();
        $('.burger-btn').toggleClass('close');
    });
  });

  //map
  $("#eventmap a").modaal({
    overlay_close:true,//モーダル背景クリック時に閉じるか
    before_open:function(){// モーダルが開く前に行う動作
      $('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
    },
    after_close:function(){// モーダルが閉じた後に行う動作
      $('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
    }
  });
}
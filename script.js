$(function () {
  // ヘッダーメニュー右から左
  $('.menuIcon').on('click', function () {
    $('.btn-trigger').toggleClass('active');
    $('.hanbergerMenu').toggleClass('active');

    if ($('.hanbergerMenu').hasClass('active')) {
      $('.headerLogo').css('display', 'none');
      $('.snsIcon').css('display', 'none');
    } else {
      $('.headerLogo').css('display', '');
      $('.snsIcon').css('display', '');
    }
    return false;
  });

  //読み込み時ふわっと表示
  $(window).load(function () {
    $('.title-inner').addClass("scroll-in");
    $('.commonTitleWrapper').addClass("scroll-in");
    $('.commonTxtCardWrapper').addClass("scroll-in");
  });
  //特定の位置までスクロールしたらふわっと表示
  var fadeIn = $('.fade-in');
  $(window).on('scroll', function () {
    $(fadeIn).each(function () {
      var offset = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > offset - windowHeight + 150) {
        $(this).addClass("scroll-in");
      }
    });
  });

  //出演者ページアコーディオンメニュー
  $('.actorTxtSub').hide();
  //actorTxtSubを隠す
  $('.actorButton').on('click', function () {
    $(this).prev().slideToggle(250);
    $(this).children().toggleClass('abOpen', 200);
    //prevはactorButtonの1つ前の要素。
    //childrenはactorButtonの子要素。
  });

});
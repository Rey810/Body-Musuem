const sym = $(".gallery_symbols");

  $(window).on("scroll", function() {
    console.log('Scroll event fired');
    console.log($(window).scrollTop());
      if ($(window).scrollTop() > 185) {
        console.log('wrap scroll event');
        $(".gallery_symbols").addClass("fix-search");
      }
      else {
        $(".gallery_symbols").removeClass("fix-search");
      }
});

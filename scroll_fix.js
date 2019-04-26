  $(window).on("scroll", function() {
      if ($(window).scrollTop() > 185) {
        $(".gallery_symbols").addClass("fix-search");
      }
      else {
        $(".gallery_symbols").removeClass("fix-search");
      }
});

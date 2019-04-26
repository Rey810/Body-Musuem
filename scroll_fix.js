  $(window).on("scroll", function() {
      if ($(window).scrollTop() > 210) {
        $(".gallery_symbols").addClass("fix-search");
      }
      else {
        $(".gallery_symbols").removeClass("fix-search");
      }
});

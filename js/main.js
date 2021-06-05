(function ($) {
   // Ready function
   $(function () {
      $("#navToggler").on("click", function (e) {
         e.preventDefault();
         $(this).toggleClass('expanded');
         $("div.nav-wrap").toggleClass('expanded');
      })
   })
})(jQuery);
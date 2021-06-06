(function ($) {
   // Ready function
   $(function () {
      $("#navToggler").on("click", function (e) {
         e.preventDefault();
         $(this).toggleClass('expanded');
         $("div.nav-wrap").toggleClass('expanded');
      })

      // Accordion function
      $(".item-row").each(function () {
         var _this = $(this);
         _this.on("click", function () {
            $(".ans").slideUp();
            if (_this.find(".ans:visible").length) {
               _this.find(".ans:visible").slideUp()
               _this.removeClass('expanded');
            } else {
               $(".ans").slideUp();
               _this.find(".ans").slideDown();
               $(".item-row").removeClass('expanded');
               _this.addClass('expanded');
            }
         })
      });

      // Smoth scroll
      var $root = $('html, body');

      $('.nav-wrap ul li a[href^="#"]').click(function () {
         $root.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
         }, 500);

         return false;
      });
   })
})(jQuery);
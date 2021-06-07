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
         $("#navToggler").removeClass('expanded');
         $("div.nav-wrap").removeClass('expanded');
         $root.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
         }, 500);

         return false;
      });

      // AOS animation
      AOS.init();

      var endTheTime = false;
      var timer = $(".countdown");
      if (timer.length) {

         timer.html(
            '<div class="days">0</div> <span>:</span>' +
            '<div class="hours"> 0</div> <span>:</span>' +
            '<div class="minutes">0</div> <span>:</span>' +
            '<div class="seconds">0</div>'
         );

         // Timer function
         function makeTimer() {
            //		var endTime = new Date("29 April 2020 9:56:00 GMT+01:00");
            var ending = jQuery(".countdown").attr("data-endtime");
            var endTime = new Date(ending);
            endTime = (Date.parse(endTime) / 1000);

            var now = new Date();
            now = (Date.parse(now) / 1000);

            var timeLeft = endTime - now;

            var days = Math.floor(timeLeft / 86400);
            var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
            var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
            var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

            if (hours < "10") { hours = "0" + hours; }
            if (minutes < "10") { minutes = "0" + minutes; }
            if (seconds < "10") { seconds = "0" + seconds; }
            if (timeLeft <= 1) {
               endTheTime = true;
            }

            timer.html(
               '<div class="days">' + days + '</div> <span>:</span>' +
               '<div class="hours">' + hours + '</div> <span>:</span>' +
               '<div class="minutes">' + minutes + '</div> <span>:</span>' +
               '<div class="seconds">' + seconds + '</div>'
            );

         }

         setInterval(function () { makeTimer(); }, 1000);
      }

   })
})(jQuery);
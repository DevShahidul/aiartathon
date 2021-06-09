(function ($) {
   // Ready function
   $(function () {

      //Stiky header
      var stickyHeader = $("header.main-header").clone().addClass('sticky').attr('id', 'home-2');
      $('main.main').append(stickyHeader);

      $(window).scroll(function () {
         var scrollPos = $(this).scrollTop();
         if (scrollPos > 120) {
            $('header.main-header.sticky').addClass('top');
         } else {
            $('header.main-header.sticky').removeClass('top');
         }
      })

      $(".nav-toggler").on("click", function (e) {
         e.preventDefault();
         $(this).toggleClass('expanded');
         $(this).parents('header.main-header').find("div.nav-wrap").toggleClass('expanded');
         $('body').toggleClass('no-scroll');
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
         $(".nav-toggler").removeClass('expanded');
         $("div.nav-wrap").removeClass('expanded');
         $('body').removeClass('no-scroll');
         $('.nav-wrap ul li a').removeClass('active');
         $(this).addClass('active');
         $root.animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 50
         }, 500);

         return false;
      });

      // AOS animation
      AOS.init();

      // Beginning timr function
      var endTheTime = false;
      var timer = $(".countdown");
      if (timer.length) {
         // Added markup for timer
         timer.html(
            '<div class="days">0</div> <span>:</span>' +
            '<div class="hours"> 0</div> <span>:</span>' +
            '<div class="minutes">0</div> <span>:</span>' +
            '<div class="seconds">0</div>'
         );

         // Timer function
         function makeTimer() {
            //	var endTime = new Date("29 April 2020 9:56:00 GMT+01:00");
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
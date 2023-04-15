// slider Start
$(document).ready(function () {
  $(".main-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev'></button>",
    nextArrow: "<button type='button' class='slick-next'></button>",
    dotsClass: "button__bar",
    dots: true,
  });
});
// Slider Start

// Rating Start
$(".counter").each(function () {
  var $this = $(this),
    countTo = $this.attr("data-count");
  countDuration = parseInt($this.attr("data-duration"));
  $({ counter: $this.text() }).animate(
    {
      counter: countTo
    },
    {
      duration: 5000,
      easing: "linear",
      step: function () {
        $this.text(Math.floor(this.counter));
      },
      complete: function () {
        $this.text(this.counter);
      }
    }
  );
});
//  Rating End
//  TestIimonials Start
$(document).ready(function () {
  $(".main-testimonials").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev'></button>",
    nextArrow: "<button type='button' class='slick-next'></button>",
    dotsClass: "button__bar",
    dots: true,
  });
});
// TestIimonials End
$(document).ready(function () {
  $(".menu-icon").click(function () {
    $(".mobile-menu").show("slide, right, 500");
    $(".overlayfour").show("slide, right, 500");
    $("body").css('overflow', 'hidden');
    $("body").addClass('test');
  });
  $(".close").click(function () {
    $(".mobile-menu").hide("slide, right, 500");
    $(".overlayfour").hide("slide, right, 500");
    $("body").css('overflow', 'auto');
        $("body").removeClass();
  });
});

$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		
		var links = this.el.find('.link');
		
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');
    $this.parent().find('i').toggleClass('fa-plus fa-minus');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#mob-menu'), false);
});

function inView(elem) {
    var $elem = $(elem);
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();
    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
};

// Scrolls to the selected menu item on the page
$(function() {
	$('a').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});
/* ANIMATE IN VIEW */
$(document).ready(function(){
	/* SCROLLING PAGE ANIMATIONS */
	if(inView($(".name"))){
		$('.name').addClass("zoomIn");
	};
	$(window).scroll(function(){ 
		if(inView($(".about"))){
			$(".about1").removeClass("hidden");
			$(".about1").addClass("fadeInDown");
		};
		if(inView($(".programming"))){
			$(".programming1").removeClass("hidden");
			$(".programming1").addClass("fadeInUp");
		};
		if(inView($(".interests"))){
			$(".interests1").removeClass("hidden");
			$(".interests1").addClass("fadeInDown");
		};
		if(inView($(".footerz"))){
			$(".contact1").removeClass("hidden");
			$(".contact2").removeClass("hidden");
			$(".contact1").addClass("fadeInRight");
			$(".contact2").addClass("fadeInLeft");			
		}; 	
	});   
    $(window).scroll(function(){  
		/* CUSTOM SCROLL SPY */
        if(inView($(".home"))){
            $(".homenav").addClass("active");
			$(".aboutnav").removeClass("active");
			$(".programmingnav").removeClass("active");
			$(".interestsnav").removeClass("active");
			$(".contactnav").removeClass("active");
        };
		if(inView($(".about"))){
			$(".homenav").removeClass("active");
			$(".aboutnav").addClass("active");
			$(".programmingnav").removeClass("active");
			$(".interestsnav").removeClass("active");
			$(".contactnav").removeClass("active");
        };
		if(inView($(".icon-ruby"))){
			$(".homenav").removeClass("active");
			$(".aboutnav").removeClass("active");
			$(".programmingnav").addClass("active");
			$(".interestsnav").removeClass("active");
			$(".contactnav").removeClass("active");
        };
		if(inView($(".crossfit"))){
			$(".homenav").removeClass("active");
			$(".aboutnav").removeClass("active");
			$(".programmingnav").removeClass("active");
			$(".interestsnav").addClass("active");
			$(".contactnav").removeClass("active");
        };
		if(inView($(".footerz"))){
			$(".homenav").removeClass("active");
			$(".aboutnav").removeClass("active");			
			$(".programmingnav").removeClass("active");
			$(".interestsnav").removeClass("active");
			$(".contactnav").addClass("active");
        };
		/* BOUNCING SOCIAL BUTTONS */
		if(inView($(".footerz"))){
			dance();
        }; 
    });
});
function dance() {
	$(".social1").delay(500).queue(function(){
		$(this).addClass("bounce");
		$(this).dequeue();
	});
	$(".social2").delay(1000).queue(function(){
		$(this).addClass("bounce");
		$(this).dequeue();
	});
	$(".social3").delay(1500).queue(function(){
		$(this).addClass("bounce");
		$(this).dequeue();
	});
	$(".social4").delay(2000).queue(function(){
		$(this).addClass("bounce");
		$(this).dequeue();
	});
}

/* NAVBAR HAMBURGER/X ANIMATION */
$(".navbar-toggle").on("click", function () {
	$(this).toggleClass("active");
});

/*---- NAVBAR COLLAPSE ON SCROLL ----*/
$('.navbar-collapse ul li a, .navbar-brand').click(function() {
	$('.navbar-toggle:visible').click();
});

/*---- SQUISHY NAVBAR ----*/
$(window).scroll(function(){
	if ($(".navbar").offset().top > 50) {
  		$(".navbar-fixed-top").addClass("top-nav-collapse");
	}else{
  		$(".navbar-fixed-top").removeClass("top-nav-collapse");
	}
});
function inView(elem) {
	var $elem = $(elem);
	var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
	var viewportTop = $(scrollElem).scrollTop();
	var viewportBottom = viewportTop + $(window).height();
	var elemTop = Math.round( $elem.offset().top );
	var elemBottom = elemTop + $elem.height();
	return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
};

/* Scrolls to the selected menu item on the page */
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
	/* LANDING ANIMATION */
	if(inView($(".name"))){
		$('.name').addClass("fadeInDown");
	};
	/* ON SCROLL ANIMATIONS */
	$(window).scroll(function(){  
		
		/*---- SQUISHY NAVBAR ----*/
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		}else{
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
		
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
		if(inView($(".hiking"))){
			$(".homenav").removeClass("active");
			$(".aboutnav").removeClass("active");
			$(".programmingnav").removeClass("active");
			$(".interestsnav").addClass("active");
			$(".contactnav").removeClass("active");
		};
		if(inView($(".fa-twitter"))){
			$(".homenav").removeClass("active");
			$(".aboutnav").removeClass("active");			
			$(".programmingnav").removeClass("active");
			$(".interestsnav").removeClass("active");
			$(".contactnav").addClass("active");
		};
	});
});

/* NAVBAR HAMBURGER/X ANIMATION */
$(".navbar-toggle").on("click", function () {
	$(this).toggleClass("active");
});

/*---- NAVBAR COLLAPSE ON SCROLL ----*/
$('.navbar-collapse ul li a, .navbar-brand').click(function() {
	$('.navbar-toggle:visible').click();
});
/*function dance() {
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
}*/
/*Custom Animations */
/*$(window).scroll(function(){
	if(inView($(".about"))){
		$(".about1").removeClass("hidden");
		$(".about1").addClass("fadeInDown");
	};
	if(inView($(".programming"))){
		$(".programming1").removeClass("hidden");
		$(".programming1").addClass("fadeInDown");
	};
	if(inView($(".interests"))){
		$(".interests1").removeClass("hidden");
		$(".interests1").addClass("fadeInDown");
	};
	if(inView($(".footerz"))){
		$(".contact1").removeClass("hidden");
		$(".contact2").removeClass("hidden");
		$(".contact1").addClass("fadeInLeft");
		$(".contact2").addClass("fadeInRight");			
	};*/   
	/* BOUNCING SOCIAL BUTTONS *//*
	if(inView($(".footerz"))){
		dance();
	};
});*/


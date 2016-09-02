//setTimeout(function(){}, 2000);  SET TIMEOUT FOR INTRO
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
    if(inView($(".name"))){
        $(".name").addClass("zoomIn");
    };
        //$(".img-responsive").click(function(){
        //$(this).toggleClass("hinge");});   
    $(window).scroll(function(){  
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
		
		/*
		<li><a class="homenav" href="#home">Kevin Camellini</a></li>
		<li><a class="aboutnav" href="#about">About</a></li>
		<li><a class="programmingnav" href="#programming">programming</a></li>
		<li><a class="interestsnav" href="#interests">Interests</a></li>
		<li><a class="contactnav" href="#contact">Contact</a></li>*/
		if(inView($(".footerz"))){
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
        }; 
        if(inView($(".about"))){
            $(".about1").addClass("slideInDown");
        };
        if(inView($(".services"))){
            $(".programming1").addClass("slideInUp");
        };
        if(inView($(".services"))){
            $(".services2").addClass("slideInDown");
        };
        if(inView($(".codeTxt"))){
            $(".codeTxt").addClass("pulse");
        };
        if(inView($(".interests"))){
            $(".interests1").addClass("pulse");
        };
        if(inView($(".call-to-action"))){
            $(".call-to-action1").addClass("pulse");
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

/*---- SQUISHY NAVBAR ----*/
$(window).scroll(function(){
	if ($(".navbar").offset().top > 50) {
  		$(".navbar-fixed-top").addClass("top-nav-collapse");
	}else{
  		$(".navbar-fixed-top").removeClass("top-nav-collapse");
	}
});
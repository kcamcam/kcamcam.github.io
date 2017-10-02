/* Google Analytics*/
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-93098811-1', 'auto');
ga('send', 'pageview');

/*---- Update your footer ----*/
function setYear(){
    var footer = document.getElementById("yearFooter");
    var date = new Date();
    date = date.getYear().toString();
    date = "20"+ date.substring(1,3);
    footer.innerHTML=date;
}

/* Scroll Function */
$(function() {
	$('a').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1700);
				return false;
			}
		}
	});
});

/* TypeWritter 2.0 */
$(function(){
    $(".occupation").typed({
        strings: ["Developer","Student","Software Engineering Student"],
        typeSpeed: 40,
        startDelay: 300,
        callback: function() {
            return $(".name").siblings('.typed-cursor').remove();
        }
    }); 
});

/* Easter Egg */
var stringVal="";
document.onkeypress = function (e) {
    e = e || window.event;
	switch(e.keyCode){
		case 105:
			stringVal+="i";
			break;
		case 99:
			stringVal+="c";
			break;
		case 117:
			stringVal+="u";
			break;
		default:
		 	stringVal="";
	}
	if(stringVal.indexOf("icu")!=-1)
		window.open("http://instantcena.ca");
};
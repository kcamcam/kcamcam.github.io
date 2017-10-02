<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<!--########## META DATA ##########-->
	<title>Kevin Camellini</title>
	<meta name="description" content="portfolio website for kevin camellini">
	<meta name="keywords" content="kevin camellini, kevin, camellini, crossfit, software, engineer, engineering,developer,programmer, concordia, university, montreal, canada">
	<meta name="author" content="Kevin Camellini">
	<!--########## TAB ICON ##########-->
	<link rel="icon" type="image/png" href="img/code.png"/>
	<!--########## Bootstrap CSS ##########-->	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <!--########## CSS Stylesheet ##########-->
	<link href="css/stylesheet23.css" rel="stylesheet" type="text/css">
	<!--########## Animate CSS ##########-->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
	<!--########## Font Awesome ##########-->
    <script src="https://use.fontawesome.com/19b0c18049.js"></script>
	<!--########## Font Mizz ##########-->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-mfizz/2.3.0/font-mfizz.css">
	<!--########## Emojiis ##########-->
	<link href="https://afeld.github.io/emoji-css/emoji.css" rel="stylesheet">
	<!--########## Google Fonts ##########-->
    <link href="https://fonts.googleapis.com/css?family=Arimo" rel="stylesheet">
</head>
<body onload="setYear()">

    <!--########## Navigation Bar ##########-->
    <div class="navbar">
        <div class="container-fluid">
            <div class="row-fluid">
                <ul class="my-nav list-inline">
                    <li><a href="#about">About</a></li>
                    <li><a href="#programming">Programming</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#footer">Contact</a></li>
                </ul>
            </div>
        </div>
    </div>

	<!--########## Landing Page ##########-->
	<div id="home" class="home">
        <div class="container-fluid" style="height: 100%">
            <div class="row-fluid" style="height: 100%">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-vertical-center">
                    <span class="name">Kevin Camellini</span><br/>
                    <span class="occupation"></span><span class="typed-cursor cursor2">|</span>
                </div>
                <p class="text-right" style="position: absolute; bottom: 0; right: 0; margin-bottom: 0; letter-spacing: 1px; font-family: 'Times New Roman', serif; font-size: 0.9em; color: GhostWhite;">Photos by <a href="http://themilads.com" target="_blank" class="proglink" style="font-size: 0.9em;">themilads.com</a></p>
            </div>
        </div>
	</div>

	<!--########## About ##########-->
	<div id="about" class="about text-center">
        <div class="container-fluid">
            <div class="row-fluid">
                <div class="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10 col-xs-offset-0 col-xs-12">
                    <p class="titles"><a href="#about">Hello<span class="typed-cursor">_</span>World</a></p>
                    <p class="aboutcontent">Welcome to my portfolio website, where I get to showcase some of my awesomeness. I like to think of myself as a humble person but I think modesty goes out the window when it comes to portofilio's, so please forgive me. I'm currently finishing up my second year at <a class="projref" target="_blank" href="https://www.concordia.ca/encs.html"> Concordia University</a>.To sum up who I am, I'm a first generation Canadian born to Italian and Guatemalan parents, student and crossfiter by day, coder by night and waiter on the weekends.</p>
                </div>
            </div>
        </div>
	</div>

    <!--########## Programming Languages ##########-->
	<div id="programming" class="programming">
		<div class="container-fluid">
			<div class="row-fluid text-center">
                <div class=" col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10 col-xs-offset-0 col-xs-12">
                <p class="titleswhite"><a href="#programming">Programming</a></p>
                    <p class="progcontent">Some of the programming langauges i've learned so far. I have studied Java extensively and dablled a little in the rest through personal projects, hackathons, and school.</p><br/>
                </div>
                <div class="clearfix"></div>
                <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">

                    <!--########## JAVA ##########-->
                    <div class="col-lg-offset-0 col-lg-2 col-md-offset-0 col-md-2 col-sm-offset-1 col-sm-3 col-xs-offset-0 col-xs-6">
                        <span class="fa-stack fa-4x progcircle">
                            <i class="fa icon-java-bold fa-stack-1x progicon" onclick="" style="left:7px;"></i>
                        </span>
                        <p class="proglang">Java</p>
                    </div>

                    <!--########## HTML ##########-->
                    <div class="col-lg-offset-0 col-lg-2 col-md-offset-0 col-md-2 col-sm-offset-0 col-sm-4 col-xs-offset-0 col-xs-6">
                        <span class="fa-stack fa-4x progcircle">
                            <i class="fa fa-html5 fa-stack-1x progicon" onclick=""></i>
                        </span>
                        <p class="proglang">HTML5</p>
                    </div>

                    <!--########## CSS ##########-->
                    <div class="col-lg-offset-0 col-lg-2 col-md-offset-0 col-md-2 col-sm-offset-0 col-sm-3 col-xs-offset-0 col-xs-6">
                        <span class="fa-stack fa-4x progcircle">
                            <i class="fa fa-css3 fa-stack-1x progicon" onclick=""></i>
                        </span>
                        <p class="proglang">CSS3</p>
                    </div>

                    <!--########## JS ##########-->
                    <div class="col-lg-offset-0 col-lg-2 col-md-offset-0 col-md-2 col-sm-offset-1 col-sm-3 col-xs-offset-0 col-xs-6">
                        <span class="fa-stack fa-4x progcircle">
                            <i class="fa icon-javascript-alt fa-stack-1x progicon" onclick="" style="left:7px;"></i>
                        </span>
                        <p class="proglang">Java Script</p>
                    </div>

                    <!--########## PHP ##########-->
                    <div class="col-lg-offset-0 col-lg-2 col-md-offset-0 col-md-2 col-sm-offset-0 col-sm-4 col-xs-offset-0 col-xs-6">
                        <span class="fa-stack fa-4x progcircle">
                            <i class="fa icon-php-alt fa-stack-1x progicon" onclick="" style="left:5px; top:6px"></i>
                        </span>
                        <p class="proglang">php</p>
                    </div>

                    <!--########## RUBY ##########-->
                    <div class="col-lg-offset-0 col-lg-2 col-md-offset-0 col-md-2 col-sm-offset-0 col-sm-3 col-xs-offset-0 col-xs-6">
                        <span class="fa-stack fa-4x progcircle">
                            <i class="fa icon-ruby fa-stack-1x progicon" onclick=""></i><!--style="left:3px; top:3px"-->
                        </span>
                        <p class="proglang">Ruby</p>
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>
            <br/>

			<!--########## Hobbies ##########-->
            <div class="row-fluid text-center" id="hobbies" onclick="">
                <br/>

                <!--########## Outdoors ##########-->
                <div class=" col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10 col-xs-offset-0 col-xs-12">
                	<p class="titleswhite"><a href="#hobbies">Hobbies</a></p>
                    <p class="hobbiescontent">When I need to take a break from long hours of mashing away at a keyboard, I like to do just about anything to do with the outdoors, mountains, or the cosmos, it calms my mind. Hiking, kayaking, canoeing, camping, fishing, skiing etc... You name it.</p>
                </div>
                <div class="col-lg-offset-3 col-lg-2 col-md-offset-3 col-md-2 col-sm-offset-3 col-sm-2 col-xs-offset-0 col-xs-4">
                    <img class="img-responsive hobbyimg" onclick="" src="img/hiking.png" alt="hiking"/>
                </div>
                <div class="col-lg-offset-0 col-lg-2 col-md-offset-0 col-md-2 col-sm-offset-0 col-sm-2 col-xs-offset-0 col-xs-4">
                    <img class="img-responsive hobbyimg" onclick="" src="img/kayak.png" alt="kayak"/>
                </div>
                <div class="col-lg-offset-0 col-lg-2 col-md-offset-0 col-md-2 col-sm-offset-0 col-sm-2 col-xs-offset-0 col-xs-4">
                    <img class="img-responsive hobbyimg" onclick="" src="img/camping.png" alt="camping"/>
                </div>
                <div class="clearfix"></div>
                <br/>

                <!--########## Crossfit ##########-->
                <div class=" col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10 col-xs-offset-0 col-xs-12">
                    <p class="hobbiescontent">I'm also a full time CrossFit athlete (the sport of fitness). I competed at <a href="http://classiquetopbox.ca/" class="proglink">La Classique Top Box 16'</a> on a team of 6 and placed 42nd overall. Click the link in the logo for my bio and olympic weightlifting personal bests.</p>
                </div>
                <div class="col-lg-offset-4 col-lg-4 col-md-offset-4 col-md-4 col-sm-offset-3 col-sm-6 col-xs-offset-1 col-xs-10">
                    <a href="https://games.crossfit.com/athlete/898124" target="_blank">
                        <img class="img-responsive hobbyimg" src="img/crossfit.png" alt="crosfit"/>
                    </a>
                </div>
                <div class="clearfix"></div>
                <br/>

                <!--########## Cube ##########-->
                <div class=" col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-offset-0 col-sm-12 col-xs-offset-0 col-xs-12">
                    <p class="hobbiescontent">My fastest time for solving a Rubik's Cube is 1 minute 19 seconds.</p>
                </div>
                <div class="col-lg-offset-4 col-lg-4 col-md-offset-4 col-md-4 col-sm-offset-3 col-sm-6 col-xs-offset-0 col-xs-12">
                        <img class="img-responsive cube" src="img/cube.png" alt="crosfit"/>
                </div>
            </div>
            <div class="row-qfluid hobbiescontent text-right col-xs-12" style="position: relative; right: -10px; bottom: 0; padding-top: 30px; padding-right: 0; font-size: 0.9em;">
               <p style="margin-bottom: 0;">Photos by <a href="http://themilads.com" target="_blank" class="proglink" style="font-size: 0.9em;">themilads.com</a></p>
            </div>
		</div>
	</div>
	<!--########## PROJECTS ##########-->
	<div id="projects" class="projects">
		<div class="container-fluid">
			<div class="row-fluid text-center">
                <div class=" col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10 col-xs-offset-0 col-xs-12">
                	<p class="titles"><a href="#projects">Projects</a></p>
                    <p class="projheadercontent">A few personal projects I did for hackathons, school or just for fun. Here's a link to my <a href="http://www.github.com/" class="projref">GitHub</a>, where you can see more of my projects as well as the code for the projects listed below.</p>
                </div>
                <div class="clearfix"></div>
                <br/>

                <!--########## Trippy ##########-->
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <a class="projtitle" href="http://www.trytrippy.xyz/" target="_blank">Trippy.xyz</a>
                    <div class="clearfix"></div>
                    <br/>
                    <div class="col-lg-offset-0 col-lg-4 col-md-offset-0 col-md-5 col-sm-offset-1 col-sm-10 col-xs-offset-1 col-xs-10 ">
                        <a class="projref" href="http://www.trytrippy.xyz/" target="_blank">
                            <img class="img-responsive projimg" src="img/expedia.png" alt="trippy">
                        </a>
                    </div>
                    <div class="col-lg-offset-0 col-lg-8 col-md-offset-0 col-md-7 col-sm-offset-1 col-sm-10 col-xs-offset-0 col-xs-12 verticalhr">
                        <p class="projcontent"><span class="projdate">Jun 2016 - </span>My first ever hackathon <a class="projref" href="http://angelhack.com/angelhack-montreal-2016/"> Angel Hacks 16'</a>! We built a social media travel suggestion chat bot using <a href="http://developer.expedia.com/docs/" class="projref">Expedia's API</a>.</p>
                    </div>
                    <div class="clearfix"></div>
                    <br/>
                </div>

                <!--########## Exam Bank ##########-->
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <a class="projtitle" href="https://kcamellini.com/exambank/" target="_blank">Exam Bank</a>
                    <div class="clearfix"></div>
                    <br/>
                    <div class="col-lg-offset-0 col-lg-4 col-md-offset-0 col-md-5 col-sm-offset-1 col-sm-10 col-xs-offset-1 col-xs-10">
                        <a href="https://kcamellini.com/exambank/" target="_blank">
                            <img class="img-responsive projimg" src="img/markdown.png" alt="exam">
                        </a>
                    </div>
                    <div class="col-lg-offset-0 col-lg-8 col-md-offset-0 col-md-7 col-sm-offset-1 col-sm-10 col-xs-offset-0 col-xs-12 verticalhr">
                        <p class="projcontent"><span class="projdate">Jul 2016 - </span>A comprehensive exam bank for Software Engineers at Concordia. I've benefited from students before me, who handed these down to me, now it's my turn to pass them down to the next generation of softy's. This was also a project to have some fun using <a href="https://daringfireball.net/projects/markdown/" class="projref">MarkDown</a>.</p>
                    </div>
                    <div class="clearfix"></div>
                    <br/>
                </div>

                <!--########## DOOMSDAY SWITCH ##########-->
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <a class="projtitle" href="https://github.com//doomsdaySwitch" target="_blank">Doomsday Switch</a>
                    <div class="clearfix"></div>
                    <br/>
                    <div class="col-lg-offset-0 col-lg-4 col-md-offset-0 col-md-5 col-sm-offset-2 col-sm-8 col-xs-offset-1 col-xs-10">
                        <a href="https://github.com//doomsdaySwitch" target="_blank">
                            <img class="img-responsive projimg" src="img/bulb.png" alt="hue"/>
                        </a>
                    </div>
                    <div class="col-lg-offset-0 col-lg-8 col-md-offset-0 col-md-7 col-sm-offset-1 col-sm-10 col-xs-offset-0 col-xs-12 verticalhr">
                        <p class="projcontent"><span class="projdate">Oct 2016 - </span>A fun switch that when activated makes the lights in my house go bonkers! All made from scartch a plastic PVC box, some switches, some LED's, wiring, a <a href="https://www.particle.io/" class="projref">Particle Photon</a> (an IOT WI-FI device), Philips HUE system with bulbs, some  <a href="https://isocpp.org/" class="projref">C++</a>, and the <a href="https://developers.meethue.com/" class="projref">Phlips HUE API</a>.</p>
                    </div>
                    <div class="clearfix"></div>
                    <br/>
                </div>

                <!--########## Story Flow ##########-->
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <a class="projtitle" href="http://storyflow.me/id/0" target="_blank">storyflow.me</a>
                    <div class="clearfix"></div>
                    <br/>
                    <div class="col-lg-offset-0 col-lg-4 col-md-offset-0 col-md-5 col-sm-offset-1 col-sm-10 col-xs-offset-1 col-xs-10">
                        <a href="http://storyflow.me/id/0" target="_blank">
                            <img class="img-responsive projimg" src="img/insta.jpg" alt="storfyflow">
                        </a>
                    </div>
                    <div class="col-lg-offset-0 col-lg-8 col-md-offset-0 col-md-7 col-sm-offset-1 col-sm-10 col-xs-offset-0 col-xs-12 verticalhr">
                        <p class="projcontent"><span class="projdate">Jan 2017 - </span>A collaborative Instagram stories app, made at <a class="projref" href="https://conuhacks.io/">ConUHAcks II</a>. You can think of it kind of like Snapchat stories but for Instagram and you get to chose who's in it.</p>
                    </div>
                    <div class="clearfix"></div>
                    <br/>
                </div>
                <div class="clearfix"></div>

                <!--########## miniCalc ##########-->
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <a class="projtitle" href="https://kevincamellini.com/minicalc" target="_blank">minicalc</a>
                    <div class="clearfix"></div>
                    <br/>
                    <div class="col-lg-offset-0 col-lg-4 col-md-offset-0 col-md-5 col-sm-offset-1 col-sm-10 col-xs-offset-1 col-xs-10">
                        <a href="https://kevincamellini.com/minicalc" target="_blank">
                            <img class="img-responsive projimg" src="img/minicalc.png" alt="calc">
                        </a>
                    </div>
                    <div class="col-lg-offset-0 col-lg-8 col-md-offset-0 col-md-7 col-sm-offset-1 col-sm-10 col-xs-offset-0 col-xs-12 verticalhr">
                        <p class="projcontent"><span class="projdate">Feb 2017 - </span><a class="projref" href="https://www.justinleger.ca/">Famingo Labs.</a> released a  gesture based calculator app on Apple Watch. I delivered a website to go along with the app.</p>
                    </div>
                    <div class="clearfix"></div>
                    <br/>
                </div>

                <!--########## instantCena ##########-->
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <a class="projtitle" href="https://www.instantcena.ca" target="_blank">instantcena.ca</a>
                    <div class="clearfix"></div>
                    <br/>
                    <div class="col-lg-offset-0 col-lg-4 col-md-offset-0 col-md-5 col-sm-offset-1 col-sm-10 col-xs-offset-1 col-xs-10">
                        <a href="https://www.instantcena.ca" target="_blank">
                            <img class="img-responsive projimg" src="img/cena.jpg" alt="cena">
                        </a>
                    </div>
                    <div class="col-lg-offset-0 col-lg-8 col-md-offset-0 col-md-7 col-sm-offset-1 col-sm-10 col-xs-offset-0 col-xs-12 verticalhr">
                        <p class="projcontent"><span class="projdate">Mar 2017 - </span> In 2016 <a class="projref" href="https://www.instantcena.com/">instantcena.com</a> went down. Instant cena is similar to being RickRolled. While in one of my first programming classes I was introduced to instantcena. This project is nostalgic resurrection of what once was <a class="projref" href="https://www.instantcena.com/">instantcena.com</a>, don't forget to turn up your volume real high!</p>
                    </div>
                    <div class="clearfix"></div>
                    <br/>
                </div>
                <div class="clearfix"></div>

                <!--########## Quotifier ##########-->
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <a class="projtitle" href="https://quotifier.ca" target="_blank">quotifier.ca</a>
                    <div class="clearfix"></div>
                    <br/>
                    <div class="col-lg-offset-0 col-lg-4 col-md-offset-0 col-md-5 col-sm-offset-1 col-sm-10 col-xs-offset-1 col-xs-10">
                        <a href="https://quotifier.ca" target="_blank">
                            <img class="img-responsive projimg" src="img/quotes.png" alt="quotes">
                        </a>
                    </div>
                    <div class="col-lg-offset-0 col-lg-8 col-md-offset-0 col-md-7 col-sm-offset-1 col-sm-10 col-xs-offset-0 col-xs-12 verticalhr">
                        <p class="projcontent"><span class="projdate">Mar 2017 - </span>Inspired by our teams intuitive code commenting skills at <a class="projref" href="https://conuhacks.io/">ConUHAcks II</a>. A spur of the moment mini-hackathon lead to a <a class="projref" href="https://www.python.org//">python</a> script that injects fun random quotes into your code. Converted to PHP for your commenting pleasure, now everyone can enjoy <a class="projref" href="https://kevincamellini.com/quotifier">Quotifier.ca</a>.</p>
                    </div>
                    <div class="clearfix"></div>
                    <br/>
                </div>

                <!--########## Lights ##########-->
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <a class="projtitle" href="http://kevincamellini.com/lights" target="_blank">Lights <i class="em em-bulb"></i></a>
                    <div class="clearfix"></div>
                    <br/>
                    <div class="col-lg-offset-0 col-lg-4 col-md-offset-0 col-md-5 col-sm-offset-1 col-sm-10 col-xs-offset-1 col-xs-10">
                        <a href="http://kevincamellini.com/lights" target="_blank">
                            <img class="img-responsive projimg" src="img/hue.png" alt="bulb">
                        </a>
                    </div>
                    <div class="col-lg-offset-0 col-lg-8 col-md-offset-0 col-md-7 col-sm-offset-1 col-sm-10 col-xs-offset-0 col-xs-12 verticalhr">
                        <p class="projcontent"><span class="projdate">Apr 2017 - </span> I got fed up of having to reach into my pocket for my phone to control the <i class="em em-bulb"></i> in my <i class="em em-house"></i>. So I made a website using some <a class="projref" href="https://www.javascript.com/">JavaScript</a> that can do it for me <i class="em em-yum"></i>. Then further modified<i class="em em-mag_right"></i> it so that I could publish it online.</p>
                    </div>
                    <div class="clearfix"></div>
                    <br/>
                </div>
                <div class="clearfix"></div>

                <!--########## Binary Converter ##########-->
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <a class="projtitle" href="https://binaryconverter.ca" target="_blank">binaryconverter.ca</a>
                    <div class="clearfix"></div>
                    <br/>
                    <div class="col-lg-offset-0 col-lg-4 col-md-offset-0 col-md-5 col-sm-offset-1 col-sm-10 col-xs-offset-1 col-xs-10">
                        <a href="https://binaryconverter.ca" target="_blank">
                            <img class="img-responsive projimg" src="img/binary.png" alt="binary">
                        </a>
                    </div>
                    <div class="col-lg-offset-0 col-lg-8 col-md-offset-0 col-md-7 col-sm-offset-1 col-sm-10 col-xs-offset-0 col-xs-12 verticalhr">
                        <p class="projcontent"><span class="projdate">May 2017 - </span> Every other binary converter website out there is confusing and cluttered with useles information<i class="em em-worried"></i>. This project is my take on a simple easy to use converter without the clutter <i class="em em-smile"></i>.</p>
                    </div>
                    <div class="clearfix"></div>
                    <br/>
                </div>

                <!--########## Clock ##########-->
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <a class="projtitle" href="https://kevincamellini.com/clock" target="_blank">Binary Clock <i class="em em-clock1"></i></a>
                    <div class="clearfix"></div>
                    <br/>
                    <div class="col-lg-offset-0 col-lg-4 col-md-offset-0 col-md-5 col-sm-offset-1 col-sm-10 col-xs-offset-1 col-xs-10">
                        <a href="https://kevincamellini.com/clock" target="_blank">
                            <img class="img-responsive projimg" src="img/clock.png" alt="clock">
                        </a>
                    </div>
                    <div class="col-lg-offset-0 col-lg-8 col-md-offset-0 col-md-7 col-sm-offset-1 col-sm-10 col-xs-offset-0 col-xs-12 verticalhr">
                        <p class="projcontent"><span class="projdate">May 2017 - </span>Some <a class="projref" href="https://www.javascript.com/">JavaScript</a> fun, a simple binary clock made so that even those who don't know how to read binary can understand it.</p>
                    </div>
                    <div class="clearfix"></div>
                    <br/>
                </div>
                <div class="clearfix"></div>

                <!--########## back to top ##########-->
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <br/>
                    <a href="#home" class="angleup">
                        <i class="fa fa-angle-up"></i>
                    </a>
                </div>
			</div>
		</div>
	</div>

	<!--########## FOOTER ##########-->
	<div id="footer" class="footer">
        <div class="container-fluid">
            <div class="row-fluid text-center">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" onclick="">
                    <p class="email"><a href="https://goo.gl/maps/RmsmAcFAkhw">Montreal</a> | <a href="https://goo.gl/maps/X7UyNju6CJr">Québec</a> | <a href="https://goo.gl/maps/PgEA1fNzTsG2">Canada</a></p>
                    <p class="email"><a href="mailto:kevin@kcamellini.com"><i class="fa fa-envelope-o fa-fw">&nbsp;</i>kevin@kcamellini.com</a></p>
                    <p class="email"><a href="https://etherchain.org/account/0xFE8024cc71b58F1fAEFDfbd9d7902573f6d6904E#txsent"><i class="fa fa-money">&nbsp;</i>ETH: 0xFE8024cc71b58F1fAEFDfbd9d7902573f6d6904E</a></p>
                    <ul class="list-inline social">
                        <li>
                            <a href="https://twitter.com/kevcamcam"><i class="fa fa-twitter fa-fw fa-3x"></i></a>
                        </li>
                        <li>
                            <a href="https://github.com/"><i class="fa fa-github fa-fw fa-3x"></i></a>
                        </li>
                        <li>
                            <a href="https://ca.linkedin.com/in/kevin-camellini-2b569b9b"><i class="fa fa-linkedin fa-fw fa-3x"></i></a>
                        </li>
                        <li>
                            <a href="https://keybase.io/" class="f"><i class="fa fa-key fa-fw fa-3x"></i></a>
                        </li>
                    </ul>
                </div>
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<p class="text-muted">&copy; <span id="yearFooter"></span> Kevin Camellini. All rights reserved.</p>
                    <p class="text-muted email">A subdivision of <a href="http://famingolabs.com" target="_blank">Famingo Labs.</a></p>
				</div>
            </div>
		</div>
	</div>

	<!--########## jQuery JavaScript ##########-->
	<script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
	<!--########## Bootstrap JavaScript ##########-->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous">
	</script>
	<!--########## Custom Scripts ##########-->
	<script src="script/script3.js"></script>
    <!--########## TypeWritter ##########-->
    <script src="script/typed.js"></script>
</body>
</html>
var projectNamesArr = ["classifiedz","exambank","quotifier","clock","converter","ppa","cpi","minicalc","cena","algotime","space","trippy","storyflow","kcamel","emojify","kitty","driverrank","famingo","metro","readings","onesocial"];
for (i = 0; i < projectNamesArr.length; i++) {
    createCard(projectNamesArr[i]);
}

function createCard(project){
	imgurl = bajson[project]['imgurl'];
	title = bajson[project]['title'];
	subtitle = bajson[project]['subtitle'];
	description = bajson[project]['description'];
	urlweb = bajson[project]['urlweb'];
	urlgithub = bajson[project]['urlgithub'];
	date = bajson[project]['date'];
	//<img class=\"activator\" src=\""+imgurl+"\">\
	var template = "\
		<div class=\"col s12 m4 l4 xl3\">\
			<div class=\"card hoverable modal-trigger sticky-action waves-effect waves-block waves-light\" data-target=\"#"+project+"\">\
				<div class=\"card-image\">\
					<h1 class=\"center-align activator\" style=\"font-size: 8.4em;\">"+imgurl+"</h1>\
				</div>\
				<div class=\"card-content\">\
					<span id=\"card-title\" class=\"card-title truncate\">"+title+"</span>\
				</div>\
			</div>\
		</div>\
	";
	var modal = "\
		<div id=\"#"+project+"\" class=\"modal modal-fixed-footer\">\
			<div class=\"modal-content\">\
				<i class=\"material-icons right modal-action modal-close\">close</i>\
				<h4 id=\"card-title\">"+subtitle+"</h4>\
				<p class=\"grey-text text-darken-3 description\">"+description+"</p>\
			</div>\
			<div class=\"modal-footer p-3 links\">\
				<small class=\"left mt-2\">Updated:"+date+"</small>\
				<a class=\"grey-text text-darken-2 hvr-grow globe\" href=\""+urlweb+"\"><i class=\"fas fa-globe\"></i>&nbsp;www&nbsp;&nbsp;</a>\
				<a class=\"grey-text text-darken-2 pr-2 hvr-grow github\" href=\""+urlgithub+"\"><i class=\"fab fa-github\"></i>&nbsp;code</a>\
			</div>\
		</div>\
	";

	$('.'+project).append(template);
	$('.'+project).append(modal);
	$('.modal').modal();
	console.log('create '+project);
}
console.log('everything ok :)');

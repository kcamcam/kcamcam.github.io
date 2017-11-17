var projectNamesArr = ["classifiedz","exambank","quotifier","clock","converter","ppa","cpi","minicalc","cena","algotime","space","trippy","storyflow","kcamel","emojify","kitty"];
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
//<img class=\"activator\" src=\""+imgurl+"\">\
	var template = "\
		<div class=\"col s12 m4 l4 xl3\">\
			<div class=\"card hoverable sticky-action small\">\
				<div class=\"card-image \">\
					<h1 class=\"center-align activator\" style=\"font-size:8em;\">"+imgurl+"</h1>\
				</div>\
				<div class=\"card-content\">\
					<span class=\"card-title activator truncate\">\
						<i class=\"material-icons right activator\">more_vert</i>"
						+title+
					"</span>\
				</div>\
				<div class=\"card-reveal\">\
					<span class=\"card-title grey-text text-darken-3\">\
						<i class=\"material-icons right\">close</i>"
						+subtitle+
					"</span>\
					<p class=\"grey-text text-darken-3\">"
						+description+
					"</p>\
				</div>\
				<div class=\"card-action px-1 right-align links\">\
					<a class=\"grey-text darken-1\" href=\""+urlweb+"\"><i class=\"fa fa-globe\"></i></a>\
					<a class=\"grey-text darken-1\" href=\""+urlgithub+"\"><i class=\"fa fa-github\"></i></a>\
				</div>\
			</div>\
		</div>\
	";
	$('.'+project).append(template);
	console.log('create '+project);
}
console.log('everything ok :)');

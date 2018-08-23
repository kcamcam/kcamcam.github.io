var projectNamesArr = [];

//get an array of all the project names
for(var key in bajson) {
	if(bajson.hasOwnProperty(key)) {
    	projectNamesArr.push(key);
    }
}

var i =0;
for (i = 0; i < projectNamesArr.length; i++) {
    createCard(projectNamesArr[i]);
}

function createCard(project){
	var imgurl = bajson[project]['imgurl'];
	var title = bajson[project]['title'];
	var subtitle = bajson[project]['subtitle'];
	var description = bajson[project]['description'];
	var urlweb = bajson[project]['urlweb'];
	var urlgithub = bajson[project]['urlgithub'];
	var date = bajson[project]['date'];
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
				<span class=\"right modal-action modal-close\">&times;</span>\
				<h4 id=\"card-title\">"+subtitle+"</h4>\
				<span class=\"grey-text text-darken-3 description\">"+description+"</span>\
				</br>\
				<a class=\"grey-text text-darken-2 globe\" target=\"_blank\" href=\""+urlweb+"\"><i class=\"fal fa-link\"></i> "+urlweb+"</a>\
				</br>\
				<span></span><a class=\"grey-text text-darken-2 pr-2 github\" target=\"_blank\" href=\""+urlgithub+"\"><i class=\"fab fa-github\"></i> View the code on GitHub.</a>\
			</div>\
			<div class=\"modal-footer p-3 links\">\
				<small class=\"right mt-2\">Updated:"+date+"</small>\
			</div>\
		</div>\
	";

	$('.'+project).append(template);
	$('.'+project).append(modal);
	$('.modal').modal();
	console.log('create '+project);
}
console.log('everything ok :)');

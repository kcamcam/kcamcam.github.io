// Function to toggle the background and consequently the font color as well 
// from dark theme to light theme. Remove animation (boolean) is used on a 0.2s timer
// to remove the fadein/out animation once it is complete.
function toggleTheme() {
  // if dark background
  if (background.classList.contains("uk-background-default")){
    setCookie("theme", "dark", 7);
    setDarkTheme(true);
    // else if light background
  } else if (background.classList.contains("uk-background-secondary")){
    setCookie("theme", "light", 7);
    setLightTheme(true);
  }
}

function setTheme(){
  var theme = getCookie("theme");
  console.log("The theme is currently set to: "+ theme);
  if (theme == "dark"){
    setDarkTheme(false);
  } else if (theme == "light"){
    setLightTheme(false)
  }
}

function setDarkTheme(animate){
  // set the body background color to dark
  document.body.style.backgroundColor = 'rgb(34,34,34)';
  // set the page background color to dark
  let background = document.getElementById('background');
  background.classList.remove("uk-background-default");
  background.classList.remove("uk-dark");
  if (animate == true) 
    background.classList.add("uk-animation-fade");
  background.classList.add("uk-background-secondary");
  background.classList.add("uk-light");
  
  let cards = document.querySelectorAll('.cards');
  if (cards != null ) {
    cards.forEach(function(card) {
      card.classList.remove("uk-card-default");
      card.classList.add("uk-card-secondary");
    });
  }
  if (animate == true){
    setTimeout(removeAnimation,200);
  }
}

function setLightTheme(animate){
  // set the body background color to light
  document.body.style.backgroundColor = 'rgb(255,255,255)';
  // set the page background color to light
  let background = document.getElementById('background');
  background.classList.remove("uk-background-secondary");
  background.classList.remove("uk-light"); 
  if (animate == true) 
    background.classList.add("uk-animation-fade");
  background.classList.add("uk-background-default");
  background.classList.add("uk-dark");
  
  let cards = document.querySelectorAll('.cards');
  if (cards != null) {
    cards.forEach(function(card) {
      card.classList.remove("uk-card-secondary");
      card.classList.add("uk-card-default");
    });
  }
  if (animate == true){
    setTimeout(removeAnimation,200);
  }

}

// function to remove the fade animation once it has finished
function removeAnimation(){
  background.classList.remove("uk-animation-fade");
}

// he did it all for the cookie
function setCookie(cookieName, cookieValue, daysToKeep) {
  var today = new Date();
  today.setTime(today.getTime() + (daysToKeep*24*60*60*1000));
  var daysToKeep = "expires="+ today.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + ";" + daysToKeep + ";";
}

// so you can take your cookie
function getCookie(cookieName) {
  var name = cookieName + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookieArray = decodedCookie.split(';');
  for(var i = 0; i <cookieArray.length; i++) {
    var coookie = cookieArray[i];
    while (coookie.charAt(0) == ' ') {
      coookie = coookie.substring(1);
    }
    if (coookie.indexOf(name) == 0) {
      return coookie.substring(name.length, coookie.length);
    }
  }
  return "";
}

// update the active nav item
function toggleActiveNavItem(){
  var title = document.title;
  var navItems = document.querySelectorAll('.nav-item-toggle');
  navItems.forEach(function(elem) {
    elem.className = elem.classList.remove("uk-active");
  });

  switch(title) {
    case "kcamel.io":
      addActiveClassToElementWithId('home');
      break;
    case "About":
      addActiveClassToElementWithId('about');
      break;
    case "Hackathons":
      addActiveClassToElementWithId('hackathons');
      break;
    case "Ruby on Rails":
      addActiveClassToElementWithId('rails');
      break;
    case "Laravel":
      addActiveClassToElementWithId('laravel');
      break;
    case "Node.js":
      addActiveClassToElementWithId('node');
      break;
    case "Javascript":
      addActiveClassToElementWithId('js');
      break;
    case "Web":
      addActiveClassToElementWithId('web');
      break;
    case "Android":
      addActiveClassToElementWithId('android');
      break;
    case "Blog":
      addActiveClassToElementWithId('blog');
      break;
    case "Courses":
      addActiveClassToElementWithId('courses');
      break;

  }
}

function addActiveClassToElementWithId(elementId){
  document.getElementById(elementId).classList.add("uk-active");
}

// set the appropriate nav item to active when the page loads
toggleActiveNavItem();

// set the appropriate theme when the page loads
setTheme();
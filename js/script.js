// Function to toggle the background and consequently the font color as well 
// from dark theme to alight theme. Removeanimation is used on a 0.2s timer
// to remove the fadein/out animation once it is complete.
function toggleTheme() {
    var background = document.getElementById('background');
    // if light background
    if (background.classList.contains("uk-background-default")){
        background.classList.remove("uk-background-default");
        background.classList.remove("uk-dark");
        
        background.classList.add("uk-animation-fade");
        background.classList.add("uk-background-secondary");
        background.classList.add("uk-light");

        setTimeout(removeAnimation,200);
    }
    // else if dark background
    else{
        background.classList.remove("uk-background-secondary");
        background.classList.remove("uk-light"); 
        
        background.classList.add("uk-animation-fade");
        background.classList.add("uk-background-default");
        background.classList.add("uk-dark");

        setTimeout(removeAnimation,200);
    }

}
function removeAnimation(){
    background.classList.remove("uk-animation-fade");
}

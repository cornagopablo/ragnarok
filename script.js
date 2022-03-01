// --- Sticky menu --- //

// Execute function when scrolls the page
window.onscroll = function() {rgMenuSticky()};

// Get the header and the menu
var menu = document.getElementById("rgMenu");
var header = document.getElementById("header");

// Get the offset position of the menu
var sticky = menu.offsetTop;

// Add the sticky class to the header when reach menu scroll position. Remove "sticky" when leave scroll position
function rgMenuSticky() {
    if (window.scrollY >= sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};

// Change Active class
/*var btns = document.querySelectorAll (".dropbtn");
Array.from(btns).forEach(item => {
    item.addEventListener("click", () => {
        var selected = document.getElementsByClassName("active");
        selected[0].className = selected[0].className.replace(" active", item.className += " active";
    });
});*/

// --- END ---- //




// --- Same menu for all html pages --- //

// load document inside menu div
$(document).ready(function(){
    $('#rgMenu').load("/menu.html");
});
$(document).ready(function(){
    $('#rgArticle').load("/home.html");
});

// --- END --- //
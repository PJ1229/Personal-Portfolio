
document.getElementById("menu-button").addEventListener("click", function() {
    document.getElementById("nav-menu").style.width = "250px";
    document.getElementById("close-button").style.visibility = 'visible';
});

document.getElementById("close-button").addEventListener("click", function() {
    document.getElementById("nav-menu").style.width = "0";
    document.getElementById("close-button").style.visibility = 'hidden';
});

document.getElementById("close-button").style.visibility = 'hidden';
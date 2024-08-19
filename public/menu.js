function isMobile() {
    return window.innerWidth <= 767;
}

document.getElementById("menu-button").addEventListener("click", function() {
    if (isMobile()) {
        document.getElementById("nav-menu").style.width = "250px";
        document.getElementById("close-button").style.visibility = 'visible';
    }
});

document.getElementById("close-button").addEventListener("click", function() {
    if (isMobile()) {
        document.getElementById("nav-menu").style.width = "0";
        document.getElementById("close-button").style.visibility = 'hidden';
    }
});
if (isMobile()) {
    document.getElementById("close-button").style.visibility = 'hidden';
}

window.addEventListener('resize', function() {
    if (!isMobile()) {
        document.getElementById("nav-menu").style.width = "0";
        document.getElementById("close-button").style.visibility = 'hidden';
    }
});

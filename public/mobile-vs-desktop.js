const desktop = document.querySelectorAll('.desktop');
const mobile = document.querySelectorAll('.mobile');

function updateVisibility() {
    const isMobileWidth = window.innerWidth <= 1300;
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;

    if (isMobileWidth && isPortrait) {
        desktop.forEach(el => {
            el.style.visibility = "hidden";
        });
        mobile.forEach(el => {
            el.style.visibility = "visible";
        });
    } else {
        desktop.forEach(el => {
            el.style.visibility = "visible";
        });
        mobile.forEach(el => {
            el.style.visibility = "hidden";
        });
    }
}

updateVisibility();

window.addEventListener("resize", updateVisibility);
window.addEventListener("orientationchange", () => {
    location.reload();
});

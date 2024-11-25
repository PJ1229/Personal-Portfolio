const desktop = document.querySelectorAll('.desktop');
const mobile = document.querySelectorAll('.mobile');

function updateVisibility() {
    const isMobileWidth = window.innerWidth <= 1200;

    if (isMobileWidth) {
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

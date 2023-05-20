function toggle() {
    this.classList.toggle("summaryHide");
}
window.onload = function () {
    for (let i of document.querySelectorAll(".summary")) {
        i.addEventListener("click", toggle);
    }
}
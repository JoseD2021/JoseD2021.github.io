toggle = (i) => i.classList.toggle("summaryHide");
window.onload = () => {
    for (let i of document.querySelectorAll(".summary")) 
        i.querySelector("section").addEventListener("click", ()=>toggle(i) );
}

const button = document.querySelector("button")
const popup = document.querySelector(".popup-wrapper")
const popupLink = document.querySelector(".popup-link")
const corBackground = document.querySelector("body")
button.addEventListener("click", (event) =>{  
    popup.classList.add("d-block")
});
 
popup.addEventListener("click", (event) =>{
    const clickedElement = event.target
 
    if (clickedElement.classList.contains("popup-close") || clickedElement.classList.contains("popup-wrapper")) {
        popup.classList.remove("d-block")
    }
});

popupLink.addEventListener("click", (event) =>{
    corBackground.classList.add("altColor")
})
 
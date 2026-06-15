//alert("pop-up")const button = document.querySelector("button")
const button = document.querySelector("button")
const popup = document.querySelector(".popup-wrapper")
 
button.addEventListener("click", function(event) {
    popup.classList.add("d-block")
});
 
popup.addEventListener("click", function(event){
    const classOfClickElement = event.target.classList[0] //Indentifica a classe aonde clica
    const classNameListArray = ["popup-close", "popup-wrapper"]
 
    if(classNameListArray.includes(classOfClickElement)){
        popup.classList.remove("d-block")
    }
})
 
/*
    Criando variáveis
*/
const nome = document.querySelector("#nome");
const button = document.querySelector("button");
const lista = document.querySelector(".lista");

/*
    Criando função
 */

    button.addEventListener("click",(event)=>{
        event.preventDefault();
        const inputValue = nome.value;
        const templateHTML = `<li>${inputValue}</li>`

        lista.innerHTML += templateHTML
        nome.value=""
        //incluir itens no HTML
    })
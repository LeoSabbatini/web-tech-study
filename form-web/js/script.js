/*
    Criando variáveis
*/
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const telefone = document.querySelector("#telefone");
const button = document.querySelector("button");
const lista = document.querySelector(".lista");

/*
    Criando função
 */

    button.addEventListener("click",(event)=>{
        event.preventDefault();
        const inputValue = nome.value;
        const inputValueEmail = email.value;
        const inputValueTelefone = telefone.value;
        const templateHTML = `<li>${inputValue} <br>${inputValueEmail}</br>${inputValueTelefone}</li>`

        lista.innerHTML += templateHTML
        nome.value=""
        email.value=""
        telefone.value=""
        //incluir itens no HTML
    })
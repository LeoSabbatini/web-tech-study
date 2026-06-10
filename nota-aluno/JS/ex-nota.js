const inputNota = document.getElementById("nota")
const resultado = document.getElementById("resultado")
 
function resultadoNotaClick(event){
    event.preventDefault();
    const inputNotaValue = inputNota.value

    if (inputNota.value == ""){
        alert("É preciso inserir um valor.")
        return false;
    }


    if(inputNota.value >= 6){
        console.log("O aluno foi aprovado")
    }else{
        console.log("O aluno foi reprovado")
    }
    
}
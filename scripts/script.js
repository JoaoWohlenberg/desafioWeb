const form1 = document.getElementById("form1");
const nome = document.getElementById("nome");
const profissional = document.getElementById("profissional");
const data = document.getElementById("data");
const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const idade = document.getElementById("idade");

form1.addEventListener("submit",(event)=>{
    event.preventDefault();

    getValoresForm1();
})

function getValoresForm1(){
    const nomeValue = nome.value;
    const profissionalValue = profissional.value;
    const dataValue = data.value;
    const pesoValue = peso.value;
    const alturaValue = altura.value;
    const idadeValue = idade.value;
    console.log(nomeValue);


}
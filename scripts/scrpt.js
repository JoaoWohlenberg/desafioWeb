 alert("loaded");
 var form1 = document.getElementById("form1");


// espera o submit do botao salvar dados e realizar o fluxo
form1.addEventListener("submit", (e) =>{

    // nao atualiza a pagina para nao perder as infos
    e.preventDefault();
    console.log("salvar");

    
    // variaveis dos inputs
    var nome = document.getElementById("nome").value;
    var profissional = document.getElementById("profissional").value;
    var data = document.getElementById("data").value;
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var idade = document.getElementById("idade").value;
    
    // testar console *NAO ESQUECER*
    console.log(nome);
    console.log(profissional);
    console.log(data);
    console.log(peso);
    console.log(altura);
    console.log(idade);
    // cria Array de Objetos
    let usuarios = new Array();
    
    // verificar se tem items no localstorage
    if(localStorage.hasOwnProperty("usuarios")){
        //recupera os itens em string no localstorage e converte pra objetos
        usuarios = JSON.parse(localStorage.getItem("usuarios"));
    }
    // adiciona os dados na variavel usuarios com os dados dos input
    usuarios.push({nome, profissional, data, peso, altura, idade});
    
    //converte o objeto em string
    localStorage.setItem("usuarios", JSON.stringify("usuarios"));
    
});
    


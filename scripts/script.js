// teste de pagina step 
//  alert("loaded");
 var form1 = document.getElementById("form1");

// espera o submit do botao salvar dados e realizar o fluxo
form1.addEventListener("submit", (e) =>{

    // nao atualiza a pagina para nao perder as infos
    e.preventDefault();
    // teste de pagina step
    console.log("salvar");

    
    // variaveis dos inputs
    var nome = document.getElementById("nome").value;
    if(nome.)
    var profissional = document.getElementById("profissional").value;
    var data = document.getElementById("data").value;
    var peso = parseInt(document.getElementById("peso").value);
    var altura = parseInt(document.getElementById("altura").value);
    var idade = parseInt(document.getElementById("idade").value);

    var dobraBicipesETricipes = parseInt(document.getElementById("dobraBicipesETricipes").value);
    var dobraSuprailiaca = parseInt(document.getElementById("dobraSuprailiaca").value);
    var dobraSubescapular = parseInt(document.getElementById("dobraSubescapular").value);
    var dobraAuxiliar = parseInt(document.getElementById("dobraAuxiliar").value);
    var cobraAbdominal = parseInt(document.getElementById("cobraAbdominal").value);
    var dobraCoxa = parseInt(document.getElementById("dobraCoxa").value);
    var dobraPanturrilha = parseInt(document.getElementById("dobraPanturrilha").value);
    var somaDobras = dobraBicipesETricipes + dobraSuprailiaca + dobraSubescapular + dobraAuxiliar + cobraAbdominal + dobraCoxa + dobraPanturrilha; 

    var medidaTorax = parseInt(document.getElementById("medidaTorax").value);
    var medidaBracos = parseInt(document.getElementById("medidaBracos").value);
    var medidaCintura = parseInt(document.getElementById("medidaCintura").value);
    var medidaAbdomem = parseInt(document.getElementById("medidaAbdomem").value);
    var medidaQuadril = parseInt(document.getElementById("medidaQuadril").value);
    var medidaCoxas = parseInt(document.getElementById("medidaCoxas").value);
    var medidaGemeos = parseInt(document.getElementById("medidaGemeos").value);
    
    
    // testar console *NAO ESQUECER*
    console.log(nome);
    console.log(profissional);
    console.log(data);
    console.log(peso);
    console.log(altura);
    console.log(idade);
    console.log(somaDobras);
    // cria Array de Objetos
    let usuarios = new Array();
    
    // verificar se tem items no localstorage
    if(localStorage.hasOwnProperty("usuarios")){
        //recupera os itens em string no localstorage e converte pra objetos
        usuarios = JSON.parse(localStorage.getItem("usuarios"));
    }
    // adiciona os dados na variavel usuarios com os dados dos input
    usuarios.push({nome, profissional, data, peso, altura, idade, somaDobras, dobraBicipesETricipes, dobraSuprailiaca, dobraSubescapular, dobraAuxiliar, cobraAbdominal, dobraCoxa, dobraPanturrilha, medidaTorax, medidaBracos, medidaCintura, medidaAbdomem, medidaQuadril, medidaCoxas, medidaGemeos
     });
    console.log(usuarios);
    
    //converte o objeto em string
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    window.location.href = 'relatorio.html';
});

// regra imc = peso/(altura*altura)
function calcularIMC(peso, altura) {
    const alturaMetros = altura/100;
    const imc = peso / (alturaMetros * alturaMetros);
    return imc;
  }

function densidadeCorporal(somaDobras, idade){
    return 1.112 - 0.00043499 * somaDobras + 0.00000055 * somaDobras * somaDobras - 0.00028826 * idade;
}

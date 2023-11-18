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
    var profissional = document.getElementById("profissional").value;
    var data = document.getElementById("data").value;
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var idade = document.getElementById("idade").value;

    var dobraBicipesETricipes = document.getElementById("dobraBicipesETricipes").value;
    var dobraSuprailiaca = document.getElementById("dobraSuprailiaca").value;
    var dobraSubescapular = document.getElementById("dobraSubescapular").value;
    var dobraAuxiliar = document.getElementById("dobraAuxiliar").value;
    var cobraAbdominal = document.getElementById("cobraAbdominal").value;
    var dobraCoxa = document.getElementById("dobraCoxa").value;
    var dobraPanturrilha = document.getElementById("dobraPanturrilha").value;

    var medidaTorax = document.getElementById("medidaTorax").value;
    var medidaBracos = document.getElementById("medidaBracos").value;
    var medidaCintura = document.getElementById("medidaCintura").value;
    var medidaAbdomem = document.getElementById("medidaAbdomem").value;
    var medidaQuadril = document.getElementById("medidaQuadril").value;
    var medidaCoxas = document.getElementById("medidaCoxas").value;
    var medidaGemeos = document.getElementById("medidaGemeos").value;
    
    
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
    usuarios.push({nome, profissional, data, peso, altura, idade, dobraBicipesETricipes, dobraSuprailiaca, dobraSubescapular, dobraAuxiliar, cobraAbdominal, dobraCoxa, dobraPanturrilha, medidaTorax, medidaCintura, medidaAbdomem, medidaQuadril, medidaCoxas, medidaGemeos
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

// teste de pagina step 
//  alert("loaded");
 var form1 = document.getElementById("form1");

// espera o submit do botao salvar dados e realizar o fluxo
form1.addEventListener("submit", (e) =>{

    // nao atualiza a pagina para nao perder as infos
    e.preventDefault();
    // teste de pagina step
    console.log("salvar");

    var dadosPreenchidosCorretamente = true;
    // variaveis dos inputs
    var nome = document.getElementById("nome").value;
    dadosPreenchidosCorretamente = validaDadosTextos(nome, "nome", dadosPreenchidosCorretamente);

    var profissional = document.getElementById("profissional").value;
    dadosPreenchidosCorretamente = validaDadosTextos(profissional, "profissional", dadosPreenchidosCorretamente);
    var data = document.getElementById("data").value;

    var peso = parseInt(document.getElementById("peso").value);
    dadosPreenchidosCorretamente = validaDadosNumericos(peso, "peso", dadosPreenchidosCorretamente);

    var altura = parseInt(document.getElementById("altura").value);
    dadosPreenchidosCorretamente = validaDadosNumericos(altura, "altura", dadosPreenchidosCorretamente);

    var idade = parseInt(document.getElementById("idade").value);
    dadosPreenchidosCorretamente = validaDadosNumericos(idade, "idade",dadosPreenchidosCorretamente);

    var dobraBicipesETricipes = parseInt(document.getElementById("dobraBicipesETricipes").value);
    dadosPreenchidosCorretamente = validaDadosNumericos(dobraBicipesETricipes, "dobraBicipesETricipes",dadosPreenchidosCorretamente);

    var dobraSuprailiaca = parseInt(document.getElementById("dobraSuprailiaca").value);
    dadosPreenchidosCorretamente = validaDadosNumericos(dobraSuprailiaca, "dobraSuprailiaca",dadosPreenchidosCorretamente);

    var dobraSubescapular = parseInt(document.getElementById("dobraSubescapular").value);
    dadosPreenchidosCorretamente = validaDadosNumericos(dobraSubescapular, "dobraSubescapular",dadosPreenchidosCorretamente);

    var dobraAuxiliar = parseInt(document.getElementById("dobraAuxiliar").value);
    dadosPreenchidosCorretamente = validaDadosNumericos(dobraAuxiliar, "dobraAuxiliar",dadosPreenchidosCorretamente);

    var dobraAbdominal = parseInt(document.getElementById("dobraAbdominal").value);
    dadosPreenchidosCorretamente = validaDadosNumericos(dobraAbdominal, "dobraAbdominal",dadosPreenchidosCorretamente);

    var dobraCoxa = parseInt(document.getElementById("dobraCoxa").value);
    dadosPreenchidosCorretamente = validaDadosNumericos(dobraCoxa, "dobraCoxa",dadosPreenchidosCorretamente);

    var dobraPeitoral = parseInt(document.getElementById("dobraPeitoral").value);
    dadosPreenchidosCorretamente = validaDadosNumericos(dobraPeitoral, "dobraPeitoral",dadosPreenchidosCorretamente);

    var somaDobras = dobraBicipesETricipes + dobraSuprailiaca + dobraSubescapular + dobraAuxiliar + dobraAbdominal + dobraCoxa + dobraPeitoral; 

    var medidaTorax = parseInt(document.getElementById("medidaTorax").value);
    dadosPreenchidosCorretamente = validaDadosNumericos(medidaTorax, "medidaTorax",dadosPreenchidosCorretamente);

    var medidaBracos = parseInt(document.getElementById("medidaBracos").value);
    dadosPreenchidosCorretamente = validaDadosNumericos(medidaBracos, "medidaBracos",dadosPreenchidosCorretamente);

    var medidaCintura = parseInt(document.getElementById("medidaCintura").value);
    dadosPreenchidosCorretamente = validaDadosNumericos(medidaCintura, "medidaCintura",dadosPreenchidosCorretamente);

    var medidaAbdomem = parseInt(document.getElementById("medidaAbdomem").value);
    dadosPreenchidosCorretamente = validaDadosNumericos(medidaAbdomem, "medidaAbdomem",dadosPreenchidosCorretamente);

    var medidaQuadril = parseInt(document.getElementById("medidaQuadril").value);
    dadosPreenchidosCorretamente = validaDadosNumericos(medidaQuadril, "medidaQuadril",dadosPreenchidosCorretamente);

    var medidaCoxas = parseInt(document.getElementById("medidaCoxas").value);
    dadosPreenchidosCorretamente = validaDadosNumericos(medidaCoxas, "medidaCoxas",dadosPreenchidosCorretamente);

    var medidaGemeos = parseInt(document.getElementById("medidaGemeos").value);
    dadosPreenchidosCorretamente = validaDadosNumericos(medidaGemeos, "medidaGemeos",dadosPreenchidosCorretamente);

    
    if (dadosPreenchidosCorretamente === true){
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
        usuarios.push({nome, profissional, data, peso, altura, idade, somaDobras, dobraBicipesETricipes, dobraSuprailiaca, dobraSubescapular, dobraAuxiliar, dobraAbdominal, dobraCoxa, dobraPeitoral, medidaTorax, medidaBracos, medidaCintura, medidaAbdomem, medidaQuadril, medidaCoxas, medidaGemeos
        });
        console.log(usuarios);

        //converte o objeto em string
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        window.location.href = 'relatorio.html';
    }
    else{
        alert("Verifique os campos em vermelho e preencha-os corretamente:\n- Nomes não devem conter números\n- Valores numéricos não podem ser menores ou iguais a zero");
    }
    
});

function validaDadosNumericos(valor, id, controle){
    let input = document.getElementById(id);
    if (valor<=0){
        input.style.color = 'red';
        input.style.border = '1px solid red';
        return controle && false;
    }
    else {
        input.style.color = 'black';
        input.style.border = '1px solid black';
        return  controle && true;
    }
}

function validaDadosTextos(valor, id, controle) {
    let input = document.getElementById(id);
    let re = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
    if (!re.test(valor)){
        input.style.color = 'red';
        input.style.border = '1px solid red';
        return controle && false;
    }
    else {
        input.style.color = 'black';
        input.style.border = '1px solid black';
        return  controle && true;
    }
}


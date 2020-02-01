//ligar o painel
function letreiro() 
{
    var letreiro = document.getElementById("letreiro");
    var letra = letreiro.innerHTML.charAt(0);

    var novo = letreiro.innerHTML.slice(1) + letra;

    letreiro.innerHTML = novo;

}

var id;

function ligar()
{
    id = window.setInterval(letreiro, 200);
}

function desligar()
{
    window.clearInterval(id);
}

//cidades

var listaCidades = [];

function adicionar ()
{

    var captura = document.getElementById("cidade");
    var cidade = captura.value;

    var lista = document.getElementById("lista");
    
    listaCidades.push(cidade);


    captura.value= "";
    imprime();
}

function imprime ()
{
    var lista = document.getElementById("lista");
    var cidades = ["curitiba", "Tibagi", "Campo Largo"];

    lista.innerHTML = "";

    var ult = listaCidades.length - 1;

    for (var idx = 0; idx <= ult; idx += 1)
    {
        lista.innerHTML += "<li>"+ listaCidades[idx] +"</li>";
    }

}
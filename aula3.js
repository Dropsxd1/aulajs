function adicionar ()
{

    var captura = document.getElementById("cidade");
    var cidade = captura.value;

    var lista = document.getElementById("lista");
    
    var existe = lista.innerHTML.indexOf(cidade);

    if (existe >= 0)
    {
        window.alert("A cidade já foi cadastrada");
    }   else {
        //lista.innerHTML = lista.innerHTML + cidade;
        lista.innerHTML += "<li>"+ cidade +  "</li>";
    }

    

    captura.value= "";
}

function nome ()
{
    var nome = document.getElementById("nome");
    var box = document.getElementById("box");

    box.innerHTML = nome.value.toUpperCase();
}

function letra ()
{
    var nome = document.getElementById("nome");
    var box = document.getElementById("box");
    
    var letra = nome.value.charAt(0);
    var resto = nome.value.slice(1);
    

    box.innerHTML = letra.toUpperCase() + resto.toLowerCase();


}

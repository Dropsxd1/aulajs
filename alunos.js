$(document).ready (function (){

    $("#btn-cadastrar").click (function (){

        var nome = $("#nome").val();
        var email = $("#email").val();
        var telefone = $("#telefone").val();
        var periodo = $("#periodo").val();
        var sexo = $("input[name=sexo]:checked").val();

        var linha = "<tr>"
        +"<td>"+ nome +"</td>"
        +"<td>"+ email +"</td>"
        +"<td>"+ telefone +"</td>"
        +"<td>"+ sexo +"</td>"
        +"<td>"+ periodo +"</td>"
        +"</tr>";

    $("#alunos").append(linha);

    }); //fim do click

}); // fim do ready

/*
function cadastrar()
{
    var tbody = document.getElementById("alunos");
    var nome = document.getElementById("nome").value;

    if (nome == "")
    {
        alert("O campo nome é obrigatorio");
        return false;
    }

    var linha = "<tr>"
        +"<td>"+ nome +"</td>"
        +"<td>pedro@paulo.com</td>"
        +"<td>11-1234-1234</td>"
        +"<td>Masculino</td>"
        +"<td>Noiturno</td>"
        +"</tr>";
    
    tbody.innerHTML += linha; 
}*/
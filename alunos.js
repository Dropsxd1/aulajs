$(document).ready (function (){



    $("#btn-cadastrar").click (function (){


        var vetor_periodos = ["", "Manhã", "Tarde", "Noite"];

        var nome = $("#nome").val();
        var email = $("#email").val();
        var telefone = $("#telefone").val();
        var sexo = $("input[name=sexo]:checked").val();
        var periodo = $("#periodo").val();

        if (nome.trim().length < 3){
            alert("O campo nome é obrigatório");
            $("#nome").focus();
            return false;
        }   else {
            
            var email_regex = /^[0-9a-z\.\_\-]*@[0-9a-z]*\.[a-z.]*$/gm;
            
            if (email.search(email_regex) == -1){
                alert("O formato do email é invalido");
                $("#email").focus();
                return false;
            }
        }

        if (email == ""){
            alert("O campo email é obrigatório");
            $("#email").focus();
            return false;
        }

        if (telefone == ""){
            alert("O campo telefone é obrigatório");
            $("#telefone").focus();
            return false;
        }   else {
                
            var fone_regex = /^\([0-9][0-9]\)[0-9]{4,5}-[0-9]{4}$/gm;

                if (telefone.search(fone_regex) == -1){
                    alert("O formato do telefone é invalido");
                    $("#telefone").focus();
                    return false;
                }
        }
               
        if (sexo == undefined){
            alert("O campo sexo é obrigatório");
            return false;
        }
        
        if (periodo == "0"){
            alert("O campo periodo é obrigatório");
            $("#periodo").focus();
            return false;
        }

        //if ternario

        var sexo_rotulo = (sexo == "M")? "Masculino" : "Feminino";

        /*
        if (sexo == "M")
        {
            var sexo_rotulo = "Masculino";
        }   else {
            var sexo_rotulo = "Feminino";
        }*/

        var linha = "<tr>"
        +"<td>"+ nome +"</td>"
        +"<td>"+ email +"</td>"
        +"<td>"+ telefone +"</td>"
        +"<td>"+ sexo_rotulo +"</td>"
        +"<td>"+ vetor_periodos[periodo] +"</td>"
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
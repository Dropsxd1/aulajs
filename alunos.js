function cadastrar() {
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var telefone = document.getElementById("telefone");

    var vazio = "Não Informado";

    nome = nome.value;
    email = email.value;
    telefone = telefone.value;

    if (nome == "")
    {
        alert("O campo nome é obrigatório!");
        return false;
    }

    alunos.innerHTML += "<tr>" 
                      + "<td>"+ nome +  "</td>" 
                      + "<td>"+ email +  "</td>" 
                      + "<td>"+ telefone +  "</td>" 
                      + "<td>"+ vazio +  "</td>"
                      + "<td>"+ vazio +  "</td>"
                      + "</tr>";



 }
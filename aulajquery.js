
$(document).ready(function (){
    
    $("h2").click(function () {
        //$(this).css("color", "pink");
        $(this).slideUp(1200, function (){
            alert("El Removido");
        });
    }); // end h2 click
}); // fim do ready
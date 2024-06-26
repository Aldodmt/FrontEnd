$(document).ready(function(){
    $("#Generar").click(function(){
        var doc = new jsPDF();
        var html = $("#content").html();

        var options = {
            margin: {
                top: 10,
                left: 10,
                right: 20,
                bottom: 10
            }
        };
        doc.fromHTML(html, options);

        doc.save("documento.pdf");
    })
});
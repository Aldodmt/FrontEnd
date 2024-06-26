$(document).ready(function(){
    function comprobarCampos() {
        const campo1 = $('#usuario').val();
        const campo2 = $('#correo').val();
        
        if (campo1 && campo2) {
            $('#acceso').prop('disabled', false);
        } else {
            $('#acceso').prop('disabled', true);
        }
    }
    $('#usuario, #correo').on('input', comprobarCampos);
});

$('#pais').append($('<option>',{
    value: 'option1',
    text: 'Capiata'
}));

$('#pais').append($('<option>',{
    value: 'option2',
    text: 'San Lorenso'
}));

$('#pais').append($('<option>',{
    value: 'option3',
    text: 'Ñemby'
}));

$('#pais').append($('<option>',{
    value: 'option4',
    text: 'Asuncion'
}));

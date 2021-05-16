$(document).ready(function(){
    $('#formLogin').validate({
        rules: {
            email:{
                required: true,
                email: true
            },
            senha:{
                required: true,
                rangelength:[4,10]
            }    
        },
        messages:{
            email:{
                required: "Este campo é obrigatório",
                email: "Informe um email valido"
            },
            senha:{
                required: "Este campo é obrigatório",
                rangelength:"Sua senha deve ter de 4 a 10 caracteres"
            }    
        }
    });
});
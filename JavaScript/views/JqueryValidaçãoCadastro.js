$(document).ready(function(){
    $('#register-form').validate({
        rules:{
            email:{
                required: true,
                email: true
            },
            senha:{
                required: true,
                rangelength: [4,10]
            },
            senha2:{
                required: true,
                equalTo: "#senha"
            }
        },
        messages:{
            email:{
                required: "Este campo é obrigatório",
                email: "Informe um email valido"
            },
            senha:{
                required: "Este campo é obrigatório",
                rangelength: "Sua senha deve ter de 4 a 10 caracteres"
            },
            senha2:{
                required: "Este campo é obrigatório",
                equalTo: "As senhas não correspondem"
            }
        }
    });
    
});
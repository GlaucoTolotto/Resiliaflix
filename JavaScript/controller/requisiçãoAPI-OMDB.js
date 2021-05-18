 
function buscaFilme(){
    $.ajax({
        url: (`http://www.omdbapi.com/?i=${procuraFilmes()}&apikey=35ec292f`),
        success: function(result){
            pegaFilme(result);
        }
    })
} 

// url: ("http://www.omdbapi.com/?i=" + movie + "tt3896198&apikey=35ec292f"),
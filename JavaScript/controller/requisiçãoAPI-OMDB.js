var movie = busca;



function procuraFilmes (movie, numero){
    $.ajax({
        url: (`http://www.omdbapi.com/?i=${openPage()}&apikey=35ec292f`),
        success: function(result){
            pegaFilme(result);
        }
    })
}






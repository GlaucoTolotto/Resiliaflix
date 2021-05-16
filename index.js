function buscaFilme(){
    $.ajax({
        url: (`http://www.omdbapi.com/?i=tt1408101&apikey=35ec292f`),
        success: function(result){
            pegaFilme(result);
            //console.log(result);
        }
    })
}
//console.log(buscaFilme()); 

function pegaFilme(result) {
    $('#movieTitle').html(result.Title);
    $('#resumoFilme').html(result.Plot);
    $('#imagemFilme').attr('src', result.Poster);
}

console.log(buscaFilme());


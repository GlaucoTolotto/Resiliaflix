function pegaFilme(result) {
    $('#blocoMain').attr('hidden', true);
    $('.container-geral-info-filmes').attr('hidden', false);
    $('#title').html(result.Title);
    $('#plot-do-filme').html(result.Plot);
    $('#image').attr('src', result.Poster);
    $('#genre').html(result.Genre);
    $('#director').html(result.Director);
    //$('#critica').html(result.Ratings);
}

respostaApi(); 

function pegaFilme2(result) {
    //$('#blocoMain').attr('hidden', true);
    $('.container-geral-info-filmes').attr('hidden', false);
    $('#title').html(result.Title);
    $('#plot-do-filme').html(result.Plot);
    $('#image').attr('src', result.Poster);
    $('#genre').html(result.Genre);
    $('#director').html(result.Director);
    //$('#critica').html(result.Ratings);
}
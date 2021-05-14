function pegaFilme(result) {
    $('#title').html(result.Title);
    $('#plot-do-filme').html(result.Plot);
    $('#image').attr('src', result.Poster);
}
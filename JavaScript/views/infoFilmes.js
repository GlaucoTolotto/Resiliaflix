function pegaFilme(result) {
    $('#title').html(result.Title);
    $('#plot-do-filme').html(result.Plot);
    $('#image').attr('src', result.Poster);
    $('#genre').html(result.Genre);
    $('#director').html(result.Director);
    $('#critica').html(result.Source);
}
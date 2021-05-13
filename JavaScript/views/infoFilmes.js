function pegaFilme(result) {
    $('#title').html(result.Title);
    $('#image').attr('src', result.Poster);
}
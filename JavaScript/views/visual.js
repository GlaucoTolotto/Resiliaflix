
function openPage() {
    var x = document.getElementById("search").value;
    let listaDeFilmes = [
        'De volta para o futuro',
        'Star Wars',
        'Star Trek',
        'Matrix',
        'Interstellar',
        '2001 uma odisseia no espaço',
        'Blade Runner',
        'A chegada',
        'Her',
        'Wall-E',
        'Jogador Numero 1',
        'Inception',];

    for (let i = 0; i < listaDeFilmes.length; i++) {
        console.log(listaDeFilmes)
        if (x === listaDeFilmes[i].length) {
            window.open('/deucerto.html')
        }

    }
    try {
        for (let i = 0; i < listaDeFilmes.length; i++) {
            if (x != listaDeFilmes[i].length) {
                window.open("/erro404.html");

            }
        }

    } catch (erro) {
        window.open("/erro404.html");

    }
}




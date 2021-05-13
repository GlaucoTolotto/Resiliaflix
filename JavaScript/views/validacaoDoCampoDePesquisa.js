
function openPage() {
    let x = document.getElementById("search").value;
    let transformando = x.toLowerCase();
    let listaDeFilmes = [
        'de volta para o futuro',
        'star Wars',
        'star trek',
        'matrix',
        'interstellar',
        '2001 uma odisseia no espaço',
        'blade runner',
        'a chegada',
        'her',
        'wall-e',
        'jogador numero 1',
        'inception',];

    for (let i = 0; i < listaDeFilmes.length; i++) {
        console.log(listaDeFilmes)
        if (transformando === listaDeFilmes[i]) {
            pegaFilme();
            //window.open('/deucerto.html')
        }

    }
    try {
        for (let i = 0; i < listaDeFilmes.length; i++) {
            if (transformando != listaDeFilmes[i]) {
                window.open("/erro404.html");

            }
        }

    } catch (erro) {
        window.open("/erro404.html");

    }
}




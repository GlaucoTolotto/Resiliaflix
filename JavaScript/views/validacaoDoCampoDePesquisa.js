
function openPage() {
    let x = document.getElementById("search").value;
    let transformando = x.toLowerCase();
    let listaDeFilmes = {
        tt0088763: 'devoltaparaofuturo', 
        tt0120915: 'starwars',
        tt1408101: 'startrek',
        tt0133093: 'matrix',
        tt0816692: 'interstellar',
        tt0062622: '2001umaodisseianoespaço', 
        tt0083658: 'bladerunner', 
        tt0115571: 'achegada', 
        tt1798709: 'her', 
        tt0910970: 'wall-e', 
        tt1677720: 'jogadornumero1',
        tt1375666: 'Inception', 
    };

    for (let i = 0; i < listaDeFilmes.length; i++) {
        if (transformando == listaDeFilmes[i]) {
            //window.open('/deucerto.html');
            console.log(listaDeFilmes)
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




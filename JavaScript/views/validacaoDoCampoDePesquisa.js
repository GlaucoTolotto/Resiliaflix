
function procuraFilmes (){
    const listaFilmes = {
        tt0088763: 'devoltaparaofuturo', 
        tt0120915: 'starwars',
        tt1408101: 'startrek',
        tt0133093: 'matrix',
        tt0816692: 'interstellar',
        tt0062622: '2001umaodisseianoespaço', 
        tt0083658: 'bladerunner', 
        tt0115571: 'achegada', 
        tt1798709: 'her', 
        tt0181689: 'minorityreport ', 
        tt1677720: 'jogadornumero1',
        tt1375666: 'inception', 
    }
    function findValue(elementosDaLista, value){
        for (var valores in elementosDaLista){
            if(elementosDaLista.hasOwnProperty(valores) && elementosDaLista[valores] === value){
                return valores;
            }
        }
        //se o valor digitado na busca nao existir, retorne algo
        return window.location = 'erro404.html';
    }

        //valor da busca
        var inputDeBusca = $('#barraPesquisa').val();
        //junta os nomes da busca
        var juntaNomeBusca = inputDeBusca.split(' ').join('').toLowerCase();
        //procura na lista do filme o codigo equivalente ao nome da busca
        let codigoFinal = findValue(listaFilmes, juntaNomeBusca);
        
        return codigoFinal;
}


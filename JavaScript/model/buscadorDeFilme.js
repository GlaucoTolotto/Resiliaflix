    function respostaApi(){
        var gallery = [
          {
            "img": "imagens/filmes/2001.png",
            'imdbID': 'tt0062622',
          },

          {
            "img": "imagens/filmes/arrival.png",
            'imdbID': 'tt0115571',
          },

          {
            "img": "imagens/filmes/backtothefuture.png",
            'imdbID': 'tt0088763',
          },
          {
            "img": "imagens/filmes//bladerunner.png",
            'imdbID': 'tt1856101',
          },
          {
            "img": "imagens/filmes/her.png",
            'imdbID': 'tt1798709',
          },
          {
            "img": "imagens/filmes/inception.png",
            'imdbID': 'tt1375666',
          },
          {
            "img": "imagens/filmes/interstellar.png",
            'imdbID': 'tt0816692',
          },
          {
            "img": "imagens/filmes/jogadorn1.png",
            'imdbID': 'tt1677720',
          },
          {
            "img": "imagens/filmes/matrix.png",
            'imdbID': 'tt0133093',
          },
          {
            "img": "imagens/filmes/minorityreport.png",
            'imdbID': 'tt0181689',
          },
          {
            "img": "imagens/filmes/startrek.png",
            'imdbID': 'tt1408101',
          },
          {
            "img": "imagens/filmes/starwars.png",
            'imdbID': 'tt0076759',
          },
         
        ];
      //procure na div das imagens a imagem que foi clicada
        $('.imagensTeste div').click(function() {
          //guarde o valor do src da imagem clicada  
          var src = $(this).find('img').attr('src');
          var keepGoing = true;
      //para cada elemento da gallery, execute a funcao abaixo
          $.each(gallery, function(index, obj) {
      
            if (!keepGoing)
              return true;
      //se o src da imagem clicada for igual ao nome depois de img na gallery, execute a funcao busca filme
            if (obj.img == src) {
                function buscaFilme(){
                        $.ajax({
                            url: (`https://www.omdbapi.com/?i=${obj.imdbID}&apikey=35ec292f`),
                            success: function(result){
                                pegaFilme2(result);
                                keepGoing = false;
                            }
                        })
                    }
                buscaFilme();
            }
          })
        });
    };
function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    if (filmeFavorito.endsWith(".jpg")) {
      listaFilmesNaTela(filmeFavorito);
    } else {
      console.error("Endereco de filme invalido");
    }
    document.getElementById("filme").value = "";
  }
  
  function listaFilmesNaTela(filme) {
    var elementoFilmeFavorito = "<img src=" + filme + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML =
      elementoListaFilmes.innerHTML + elementoFilmeFavorito;
  }
  
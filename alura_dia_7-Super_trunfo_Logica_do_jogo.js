var carta1 = {
    nome: "Bulbasauro",
    atributos: {
      ataque: 7,
      defesa: 9,
      magia: 6
    }
  };
  var carta2 = {
    nome: "Dart vader",
    atributos: {
      ataque: 9,
      defesa: 8,
      magia: 2
    }
  };
  var carta3 = {
    nome: "shiryu de dragao",
    atributos: {
      ataque: 5,
      defesa: 9,
      magia: 10
    }
  };
  
  var cartas = [carta1, carta2, carta3];
  var cartaMaquina;
  var cartaJogador;
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];
     
    var numeroCartaJogador = parseInt(Math.random() * 3);
    while (numeroCartaMaquina == numeroCartaJogador) {
      numeroCartaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibirOpcoes();
}
  function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes");
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
      opcoesTexto += "<input type='radio' nome='atributo' value='" + atributo + "'>" +
        atributo;
    }
    opcoes.innerHTML = opcoesTexto;
  }
  function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
    for (var i = 0; i < radioAtributos.length; i++) {
      if (radioAtributos[i].checked == true) {
        return radioAtributos[i].value;
      }
    }
  }
  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado(); 
    var elementoResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributo[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributo[atributoSelecionado];
  
    if (valorCartaJogador > valorCartaMaquina) {
      elementoResultado.innerHTML = "Voce venceu";
    } else if (valorCartaMaquina > valorCartaJogador) {
      elementoResultado.innerHTML = "Voce perdeu";
    } else {
      elementoResultado.innerHTML = "Empatou";
    }
    console.log(cartaMaquina)
  }
  
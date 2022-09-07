var nome = "Rafael";
var notaDoPrimeiroBimestre = 9.6;
var notaDoSegundoBimestre = 7.5555;
var notaDoTerceirooBimestre = 4.3;
var notaDoQuartoBimestre = 2.5;
var notaFinal =
  (notaDoPrimeiroBimestre +
    notaDoSegundoBimestre +
    notaDoTerceirooBimestre +
    notaDoQuartoBimestre) /
  4;

var notafixada = notaFinal.toFixed  (1)

console.log("Bem Vindo " + nome);
console.log(notafixada);
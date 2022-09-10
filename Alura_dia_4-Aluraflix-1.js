var listaFilmes = ["Yesterday", "A chegada", "Escolade Rock", "Harry Potter"];

listaFilmes.push("Harry Potter 2");
listaFilmes.push("Harry Potter 3");
listaFilmes.push("Harry Potter 4");
listaFilmes.push("Harry Potter 5");
listaFilmes.push("Harry Potter 6");
listaFilmes.push("Harry Potter 7");

for (var indice = 0; indice < listaFilmes.length; indice++) {
  document.write("<p>" + listaFilmes[indice] + "</p>");
}

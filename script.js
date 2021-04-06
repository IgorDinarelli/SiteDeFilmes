// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal mas apenas um botão funciona
//var btn = document.getElementById("myBtn"); então vou usar direto no html para evitar esse problema

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// pega o botão lateral da lista de filmes pelo seu id e seta como variavel
var btnL = document.getElementById("btnL");

// pega o botão lateral da lista de filmes pelo seu id e seta como variavel
var btnR = document.getElementById("btnR");

// pega o botão lateral da lista de filmes pelo seu id e seta como variavel 1
var btnL1 = document.getElementById("btnL1");

// pega o botão lateral da lista de filmes pelo seu id e seta como variavel 1
var btnR1 = document.getElementById("btnR1");

// pega o botão lateral da lista de filmes pelo seu id e seta como variavel 2
var btnL2 = document.getElementById("btnL2");

// pega o botão lateral da lista de filmes pelo seu id e seta como variavel 2
var btnR2 = document.getElementById("btnR2");

// pega o botão lateral da lista de filmes pelo seu id e seta como variavel 3
var btnL3 = document.getElementById("btnL3");

// pega o botão lateral da lista de filmes pelo seu id e seta como variavel 3
var btnR3 = document.getElementById("btnR3");

btnL.onclick = function () {
  document.getElementById('list').scrollLeft -= 186;
}

btnR.onclick = function () {
  document.getElementById('list').scrollLeft += 186;
}

btnL1.onclick = function () {// 1
  document.getElementById('list1').scrollLeft -= 186;
}

btnR1.onclick = function () {// 1
  document.getElementById('list1').scrollLeft += 186;
}

btnL2.onclick = function () {// 2
  document.getElementById('list2').scrollLeft -= 186;
}

btnR2.onclick = function () {// 2
  document.getElementById('list2').scrollLeft += 186;
}

btnL3.onclick = function () {// 3
  document.getElementById('list3').scrollLeft -= 186;
}

btnR3.onclick = function () {// 3
  document.getElementById('list3').scrollLeft += 186;
}



// When the user clicks the button, open the modal 
/*btn.onclick = function() { subistituido pelo uso direto no html
  modal.style.display = "block";
}*/
// Atualizado pega todos os botões para abrir a modal


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
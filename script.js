// Constantes.
const btnIA = document.getElementById('btn-ia'); // Captura o clique do botão Inteligência Artificial.
const btnInternet = document.getElementById('btn-internet'); // Captura o clique do botão Internet.
const btnFuturo = document.getElementById('btn-futuro'); // Captura o clique do botão Futuro da Informática.
const pagIA = document.getElementById('pag-ia'); // Página da Inteligência Artificial.
const pagInternet = document.getElementById('pag-internet'); // Página da Internet.
const pagFuturo = document.getElementById('pag-futuro'); // Página do Futuro da Informática.

// Execução.
pagIA.style.display = 'none';
pagInternet.style.display = 'block';
pagFuturo.style.display = 'none';

btnIA.addEventListener('click', function() {
  pagIA.style.display = 'block';
  pagInternet.style.display = 'none';
  pagFuturo.style.display = 'none';
});
btnInternet.addEventListener('click', function() {
  pagIA.style.display = 'none';
  pagInternet.style.display = 'block';
  pagFuturo.style.display = 'none';
});
btnFuturo.addEventListener('click', function() {
  pagIA.style.display = 'none';
  pagInternet.style.display = 'none';
  pagFuturo.style.display = 'block';
});
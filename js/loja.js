// script da parte da loja

var eleFiltrarExpansivel = document.querySelectorAll('.filtrar__expansivel-menu')
// var eleMenuExpansivel = document.querySelector('.filtrar__expansivel-menu')

eleFiltrarExpansivel.forEach(function (ele){
  ele.addEventListener('click', function (){
ele.parentElement.classList.toggle('filtrar__expansivel-menu--aberto');
});
});

// script do filtrar

// eleFiltrarFechar = document.querySelector('.filtrar__fechar')
// eleBody = document.getElementsByTagName('body')

// eleFiltrarFechar.addEventListener('click', function(){
//   eleBody.toggle('filtrar-menu');
// })

// como eu vou fazer para o toggle pegar a classe exatamente do body?
// O de cima está errado não sei por qual motivo. Eu ainda nao sei pensar como um desenvolvedor javascrip, então não faço ideia de como fazer esse código de fechar

// Aqui está o correto

var elmFecharFiltro = document.querySelector(".filtrar__fechar");
var elmAbrirFiltro = document.querySelector(".produtos__botao");

elmFecharFiltro.addEventListener("click", function(){
  document.body.classList.remove('filtrar-menu');
});

elmAbrirFiltro.addEventListener("click", function(){
  document.body.classList.add("filtrar-menu");
});
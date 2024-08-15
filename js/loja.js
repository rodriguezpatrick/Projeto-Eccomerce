// script da parte da loja

var eleFiltrarExpansivel = document.querySelectorAll('.filtrar__expansivel-menu')
// var eleMenuExpansivel = document.querySelector('.filtrar__expansivel-menu')

eleFiltrarExpansivel.forEach(function (ele){
  ele.addEventListener('click', function (){
ele.parentElement.classList.toggle('filtrar__expansivel-menu--aberto');
});
});
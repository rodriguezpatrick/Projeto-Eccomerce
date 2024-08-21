var rollers = document.querySelectorAll(".produto__carrossel-botao");
var images = document.querySelector(".produto__fotos");

// function rodarCarrossel(i) {
//   var itemAnt = i - 1;
//   console.log("1");
//   if (i === 0) {
//     itemAnt = rollers.length - 1;
//   }
//   console.log("2");
//   rollers[itemAnt].classList.remove("produto__carrossel-botao--clicado");

//   images.style = `transform: translateX(-${i * 100}%)`;
//   console.log("3");
//   rollers[i].classList.add("produto__carrossel-botao--clicado");
//   console.log("4");
//   var proxItem = i + 1;

//   setTimeout(function (){rodarCarrossel(proxItem)}, 1000);
// }


// rollers.forEach(function (ele) {
//   ele.addEventListener("click", setTimeout(function(){rodarCarrossel(0)}, 1000));
// });

rollers.forEach(function(ele, i){
    ele.addEventListener('click', function(){
        images.style = `transform: translateX(-${i * 100}%)`;
        
        rollers.forEach(function(ele2){
            if (ele2 != ele){
                ele2.classList.remove("produto__carrossel-botao--clicado")
            } else{
                ele2.classList.add("produto__carrossel-botao--clicado")
            }
        })
        // aqui esses rollers nunca vão se coincidir?
    })
})


// aqui a pergunta do milhão é como saber qual é o item anterior se o usuário pode clicar aleatoriamente?
// 1- nós não podemos saber qual é o item anterior, mas nós sabemos qual o item atual. Então todos os elementos a não ser o item atual temos que retirar a classe
// 2 - 
// Agora eu estou pensando em como eu vou saber como identificar um elemento atual nesse código acima.
// eu quero a classe cinza em todos exceto na que estou clicando
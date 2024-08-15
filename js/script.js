// // primeiro vamos selecionar nossos itens que queremos mexer
// // selecionar itens imagens e itens roladores. Como eles vao estar na mesma ordem nós não vamos ter problema quanto a ter que selecionar manualmente cada imagem.
// // agora temos que vincular a primeira imagem com o primeiro rolar. a segunda imagem com o segundo rolador e a terceira imagem com o terceiro rolador.
// // Se eu quero o primeiro banner eu tenho que deixar a estilização como está. Agora se eu quero o segundo ou o terceiro eu tenho que mudar a estilização de transform
// // gerei um nodelist com o queryselector dos dois
// // acredito que descobei como procedemos nesse tipo de animação com o javascript. nós estudamos a como percorrer uma lista. e aqui esse conhecimento vai ser essencial

// const rollers = document.querySelectorAll('.carrossel__preenchimento--completo');
// // const rollers = [0, 1, 2]
// // aqui o tamanho sempre vai se referir aos elementos pesquisados no dom. Se adicionarmos um elemento novo no dom ele vai detectar
// const images = document.querySelectorAll('.carrossel__banners');
// // const images = [0, 1, 2]

// console.log(rollers);
// console.log(images);

// function bannerAnimation(){

//     for(let x in rollers){
//         if(rollers[-1]){
//             // em rollers voce pode mudar todas as classes para carrossel__preenchimento
//             // em image voce pode mudar p transform para translateX(0%)
//         } else {
//             // em rollers voce pode mudar a classe para carrossel__preenchimento--completo
//             // em image voce pode mudar o style de transform

//         }
//     }
//     while(){
//         // se o x for 0 entao pode continuar a repeticao, se o x for 3 então recomece
//     }
// }

// // nao queria colocar um valor fixo aqui por que na medida em que o carrossel crescer quero que ele continue funcionando sem precisar mexer no código
// setTimeout(function () {
//     rodarCarrossel(rollers.length);
//   }, 1000);

var rollers = document.querySelectorAll(".carrossel__rolador");
var images = document.querySelector(".carrossel__banners");

function rodarCarrossel(i) {
  var itemAnt = i - 1;

  if (i === 0) {
    itemAnt = rollers.length - 1;
  }

  console.log("1");

  rollers[itemAnt]
    .querySelector("div")
    .classList.remove("carrossel__preenchimento--completo");

  console.log("2");

  // images.style = "transform: translateX(-" + i * 100 + "%)"; isso aqui é muito feio fazer
  images.style = `transform: translateX(-${i * 100}%)`;

  console.log("imagens mudando");

  rollers[i]
    .querySelector("div")
    .classList.add("carrossel__preenchimento--completo");

  var proxItem = i + 1;

  if (i == rollers.length - 1) {
    proxItem = 0;
  }

  setTimeout(function () {
    rodarCarrossel(proxItem);
  }, 5000);
}

setTimeout(function () {
  rodarCarrossel(0);
}, 1000);

console.log("vamos repetir novamente");

// -------------------------------------------------------Funcionamento inicial

// o cerne de como isso aqui vai funcionar depende do item atual e os itens anteriores e os itens atuais. Vamos pensar nesse problema como se fosse uma ferramenta real. Imagine que isso realmente fosse um sistema mecânico que deve girar de acordo com a quantidade de imagens existentes.
// Vamos escolher essa lista de imagens
// vamos definir um item como atual. Isso é intuitivo pois vai ser o primeiro elemento da lista. O nosso ciclo deve começar por ele.
// Agora precisamos fazer uma função que tenha como parametro o índice correspondente a imagem da lista, no começo vai o zero.
// Eu quero que a primeira imagem apareça enquanto o rolador se preencha totalmente, então eu vou ter que adicionar uma classe "carrossel__preenchimento--completo". A animação dessa mudança de classe nós fazemos utilizando o css então não é necessário se preocupar com isso no javascript
// Para que o rolador comece assim que o outro termina enquanto as imagens mudam em sincronia nós temos que ver qual foi o tempo que colocamos na transição da animação do rolador e colocar esse mesmo valor para a função setTimeout. Também colocamos uma transição no css das imagens para não mudarem abruptamente
// Agora, por fora da função, nós a chamamos com esse número inicial

// --------------------------------------------------------Repetição desse processo

// A lógica acima serve para a primeira imagem na primeira vez que o ciclo ocorre, mas e quando estivemos na segunda imagem ou na segunda repetição do ciclo, onde a primeira imagem aparece novamente?
// Agora faz sentido adicionarmos a lógica de item atual, item anterior e item posterior
// quando a função setTimeout terminar ela tem que chamar a próxima, mas como fazemos isso? Nós chamamos a própria função dentro dela mesma. Isso pode acontecer? Sim, chamamos essas funções de FUNÇÕES RECURSIVAS. Assim, um loop ocorre sem precisarmos usar while.

// ------------------------------------------------------------------------------------------------------------

// Agora quando isso acontecer pela segunda vez o índice vai ser 1, então teremos que colocar algumas lógicas para os itens anteriores e os proximos itens.
// O item anterior vai ser sempre i - 1. então teremos que tirar a classe que havíamos colocado nesse item de rollers.
// Agora que a imagem vai começar a mudar, então temos que dar atenção a fórmula de mudar o valor de transform: translateX(-100%)

// ---------------------------------------------------------Reescrita do código para se encaixar com o ciclo

// Quando estamos aprendendo a escrever o código fazemos ele em etapas. Porém, nesse caso se formos parar para analisar as etapas olhando o código você não consegue, pois ele foi manipulado para que o ciclo funcione com apenas um código. Para que isso funcione as vezes vamos ver coisas que fogem desse algoritmo linear. Por isso em uma primeira leitura fica dificil de ler pois o código já é estruturado de forma a receber parâmetros futuros, contas futuras ao invés de ter etapas separadas para cada etapa.
// Acredito que quem tenha feito o código escreveu na menor forma possível, mas que a funcionalidade esteja funcionando corretamente.
// Ás vezes estamos olhando para um código que está aprimorado, então é dificil de ver a forma nativa do código, que é a mais fácil pois tem logaritmo linear.
// A seguinte questão é: voce tem algumas dicas para desconstruirmos um código aprimorado? Como fazer o caminho contrário?
// "Imagine que você tem um quebra cabeça com milhares de peças e você não teve a oportunidade de ver a foto da capa. Será que ficaria fácil de você pegar uma peça e começar sem saber aonde você vai? Agora imagine um quebra cabeça pronto. Você olha e entende exatamente onde essas peças se encaixam no todo. Através dessa abordagem de desconstrução você entende melhor cada um dos detalhes"

// script para abrir e fechar o cabecalho

var eleCabecalhoMenu = document.querySelector(".cabecalho__menu");
var eleCabecalho = document.querySelector(".cabecalho");
var elemsItemLista = document.querySelectorAll(".cabecalho__item-lista");

eleCabecalhoMenu.addEventListener("click", function () {
  eleCabecalho.classList.toggle("cabecalho--aberto");
  // assim que o cabecalho estiver aberto ele vai cancelar todos os links cabecalho__link. caso contrario os links ainda existem.
  // isso aqui faz sentido por que queremos que isso aconteça apenas quando a tela for menor que 950px. Eu escolhi essa maneira de fazer, mas também poderia falar que quando a tela for menor que tal coisa, então cancele os links
  elemsItemLista.forEach(function(ele){
    ele.querySelector('.cabecalho__link').href = 'javascript: void(0)'
  })
});

// script para abrir e fechar o cabecalho em 950px


elemsItemLista.forEach(function (ele) {
  ele.addEventListener("click", function () {
    ele.classList.toggle("cabecalho__item-lista--aberto");
  });

});



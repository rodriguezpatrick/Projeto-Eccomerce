var botaoEndereco = document.querySelector(".botao--endereco-adicionar");
var enderecoItens = document.querySelector(".checkout__enderecos-itens")

botaoEndereco.addEventListener("click", function(){
enderecoItens.classList.toggle("checkout__enderecos-itens--aberto")
})
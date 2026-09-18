function filtrar(categoria) {
let produtos = document.querySelectorAll(".produto");

produtos.forEach(function(produto) {
    if (categoria == "todos") {
        produto.style.display = "block"
    } else if (produto.classList.contains(categoria)) {
        produto.style.display = "block"
    } else {
        produto.style.display = "none"
    }

})

}

function pedir(produto) {
alert("Você escolheu: " + produto)

}

let formulario = document.querySelector("#formulario")

if (formulario) {

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.querySelector("#nome").value;
    document.querySelector("#mensagemForm").textContent ="Obrigado, " + nome + "! Sua mensagem foi enviada.";
    formulario.reset();

})

}

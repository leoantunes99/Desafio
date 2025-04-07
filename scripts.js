function exibirTexto() {
    const input = document.querySelector("#main-input").value // Selecionei o valor do input
    document.querySelector("#invisible-paragraph").innerHTML = input // Alterei o texto do parágrafo para o valor do input
}

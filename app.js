function criacartao(categoria,pergunta,resposta){
    const container = document.getElementById("container")
    const cartao = document.createElement("article")
    cartao.className = "cartao"
    cartao.innerHTML = `<div class="cartao_conteudo">
                <h3>${categoria}}</h3>
                <div class="pergunta">
                    ${pergunta}
                </div>
                <div class="resposta">
                ${resposta}
                </div>
            </div>`
            container.appendChild(cartao)
}
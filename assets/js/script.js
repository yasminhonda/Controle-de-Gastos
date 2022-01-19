
const controleGastos = {
    orcamento: 0,
    despesas: 0,
    saldo: 0
}

const campoEntradaOrcamento = document.querySelector('.controleGastos__input')
const buttonCalcular = document.querySelector('.calcular')

buttonCalcular.addEventListener("click", calcularOrcamento)

function calcularOrcamento() {
    const totalOrcamento = Number(campoEntradaOrcamento.value)

    controleGastos.orcamento = totalOrcamento;
    controleGastos.saldo = totalOrcamento;

    atualizarInterface()
}

const orcamento = document.querySelector('.impressaoResultados__orcamento p')
const despesas = document.querySelector('.impressaoResultados__despesa p')
const saldo = document.querySelector('.impressaoResultados__saldo p')
const img = document.querySelector('.impressaoResultados__img img')

function atualizarInterface() {
    orcamento.innerText = `+ R$ ${controleGastos.orcamento}`;
    despesas.innerText = `- R$ ${controleGastos.despesas}`;
    saldo.innerText = `R$ ${controleGastos.saldo}`

    if (controleGastos.saldo >= 0){
        img.src = './assets/img/doguinho.png' 
        img.alt = 'doguinho feliz'
    } else {
        img.src = './assets/img/gatinho.png'
        img.alt = 'gatinho espantado'
    }
}

const campoEntradaDespesa = document.querySelector('.valorDespesa')
const buttonAdicionarDespesa = document.querySelector('.adicionarDespesa')

buttonAdicionarDespesa.addEventListener("click", adicionarDespesa)

function adicionarDespesa() {
    const valorDespesa = Number(campoEntradaDespesa.value)

    controleGastos.despesas += valorDespesa
    controleGastos.saldo -= valorDespesa

    atualizarInterface()
    adicionarNomeDespesa(valorDespesa)
}

const listaDespesa = document.querySelector('.containerDespesa__lista')
const campoNomeDespesa = document.querySelector('.nomeDespesa')

function adicionarNomeDespesa(valorDespesa) {

    const nomeDespesa = campoNomeDespesa.value

    const ul = document.createElement("ul")
    const li = document.createElement("li")
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const img = document.createElement('img')

    h3.innerText = nomeDespesa
    p.innerText = `R$ ${valorDespesa}`

    img.src = './assets/img/trash.png'
    img.alt = 'Icone lixeira'
    img.addEventListener('click', removerDespesa)

    li.dataset.valor = valorDespesa
    ul.appendChild(li)
    li.appendChild(h3)
    li.appendChild(p)
    li.appendChild(img)

    listaDespesa.appendChild(ul)
}

function removerDespesa(evento) {
    const despesaClicada = evento.target.parentNode
    const valorDespesaClicada = Number(despesaClicada.dataset.valor)

    controleGastos.despesas -= valorDespesaClicada
    controleGastos.saldo += valorDespesaClicada

    atualizarInterface()
    despesaClicada.remove()
}

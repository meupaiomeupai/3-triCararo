const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-maquiagem.json'

async function visualizarInformacoesMaquiagem() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasUsandoMaquiagem = (dados.total_pessoas_usando / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio_diario)
    const minutos = Math.round((dados.tempo_medio_diario - horas) * 60)
    const porcentagemUsandoMaquiagem = ((pessoasUsandoMaquiagem / pessoasNoMundo) * 100).toFixed(2)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Sabia que no mundo há <span>${pessoasNoMundo} bilhões</span> de pessoas e aproximadamente <span>${pessoasUsandoMaquiagem} bilhões</span> utilizam produtos de maquiagem regularmente? Em média, elas gastam <span>${horas} horas</span> e <span>${minutos} minutos</span> por dia usando produtos de beleza.<br>Isso representa cerca de <span>${porcentagemUsandoMaquiagem}%</span> da população mundial.`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

visualizarInformacoesMaquiagem()

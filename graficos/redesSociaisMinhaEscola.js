import { criarGrafico, getCSS, incluirTexto } from "./common.js"

async function produtosFavoritosMinhaEscola() {
    const dadosLocaisString = localStorage.getItem('respostaProdutosMaquiagem')
    if (dadosLocaisString) {
        const dadosLocais = JSON.parse(dadosLocaisString)
        processarDados(dadosLocais)
    } else {
        const url = 'https://script.googleusercontent.com/macros/echo?user_content_key=EXEMPLO_LINK_MAQUIAGEM'
        const res = await fetch(url)
        const dados = await res.json()
        localStorage.setItem('respostaProdutosMaquiagem', JSON.stringify(dados))
        processarDados(dados)
    }
}

function processarDados(dados) {
    const produtos = dados.slice(1).map(produto => produto[1])
    const contagemProdutos = produtos.reduce((acc, produto) => {
        acc[produto] = (acc[produto] || 0) + 1
        return acc
    }, {})
    const valores = Object.values(contagemProdutos)
    const labels = Object.keys(contagemProdutos)

    const data = [
        {
            values: valores,
            labels: labels,
            type: 'pie',
            textinfo: 'label+percent'
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        height: 700,
        title: {
            text: 'Produtos de Maquiagem Favoritos na Minha Escola',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                family: getCSS('--font'),
                size: 30
            }
        },
        legend: {
            font: {
                color: getCSS('--primary-color'),
                size: 16
            }
        }
    }

    criarGrafico(data, layout)
    incluirTexto(`Os resultados da pesquisa indicam que os produtos mais populares entre os colegas são <span>batons</span>, <span>sombras</span> e <span>pós compactos</span>, destacando-se como os favoritos.`)
}

produtosFavoritosMinhaEscola()

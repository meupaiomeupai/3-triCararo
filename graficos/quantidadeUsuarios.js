import { getCSS, tickConfig, criarGrafico } from "./common.js"

async function quantidadeUsuariosPorProduto() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios-maquiagem.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDosProdutos = Object.keys(dados)
    const quantidadeDeUsuarios = Object.values(dados)

    const data = [
        {
            x: nomeDosProdutos, 
            y: quantidadeDeUsuarios, 
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
            }
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Produtos de Maquiagem Mais Populares',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                family: getCSS('--font'),
                size: 30
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Nome dos Produtos',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Milhões de Usuários',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }
    }

    criarGrafico(data, layout)
}

quantidadeUsuariosPorProduto()

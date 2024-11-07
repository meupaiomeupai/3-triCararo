import { getCSS, criarGrafico, incluirTexto } from "./common.js"

async function produtosFavoritosMaquiagem() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/produtos-favoritos-maquiagem.json'
    const res = await fetch(url)
    const dados = await res.json()
    const produtos = Object.keys(dados)
    const valores = Object.values(dados)

    const data = [
        {
            values: valores,
            labels: produtos,
            type: 'pie',
            textinfo: 'label+percent'
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        height: 700,
        title: {
            text: 'Produtos de Maquiagem Preferidos pelos Usuários',
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

    incluirTexto(`Embora a <span>base</span> seja um item básico na rotina de muitas pessoas, observa-se que o <span>batom</span> é o <span>produto preferido</span> entre os consumidores. Este dado destaca a importância de produtos de destaque e expressão pessoal na maquiagem. Em comparação, itens como <span>máscara de cílios</span> e <span>sombra</span> também possuem uma forte preferência, refletindo a diversidade de interesses e estilo dos usuários.`)
}

produtosFavoritosMaquiagem()

const perguntas = [
    {
        pergunta: "O que significa a sigla 'DOM' em JavaScript?",
        respostas: [
            "Documento de Operações Mínimas",
            "Modelo de Objeto de Documento",
            "Diretório de Operações Mínimas"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o método de JavaScript usado para selecionar um elemento HTML pelo seu ID?",
        respostas: [
            "getElementById()",
            "selectElementById()",
            "queryElementById()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o resultado da expressão 5 + '3' em JavaScript?",
        respostas: [
            "8",
            "53",
            "Erro"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do operador '===' em JavaScript?",
        respostas: [
            "Comparação estrita (valor e tipo)",
            "Atribuição",
            "Comparação solta (apenas valor)"
        ],
        correta: 0
    },
    {
        pergunta: "O que o método 'push()' faz em JavaScript?",
        respostas: [
            "Remove um elemento de um array",
            "Adiciona um elemento ao final de um array",
            "Inverte a ordem dos elementos de um array"
        ],
        correta: 1
    },
    {
        pergunta: "Como você declara uma variável em JavaScript?",
        respostas: [
            "let myVar = 5;",
            "variable myVar = 5;",
            "myVar == 5;"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o tipo de dados do resultado de typeof null em JavaScript?",
        respostas: [
            "null",
            "undefined",
            "object"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a forma correta de comentar uma única linha de código em JavaScript?",
        respostas: [
            "// Este é um comentário",
            "<!-- Este é um comentário -->",
            "/* Este é um comentário */"
        ],
        correta: 0
    },
    {
        pergunta: "O que o método 'split()' faz em JavaScript?",
        respostas: [
            "Concatena duas strings",
            "Separa uma string em um array de substrings",
            "Remove espaços em branco de uma string"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a saída do código: console.log(2 + '2' + 2)?",
        respostas: [
            "222",
            "6",
            "Erro"
        ],
        correta: 0
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for (let item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent=item.pergunta
    for( let resposta of item.respostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name','pergunta-'+ perguntas.indexOf(item))
        dt.querySelector('input').value=item.respostas.indexOf(resposta)

        dt.querySelector('input').onchange = (event) => {
            const estaCorreta=event.target.value==item.correta
            corretas.delete(item)
            if(estaCorreta){
                corretas.add(item)
            }
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }
        

      
        quizItem.querySelector('dl').appendChild(dt)
    }
    quizItem.querySelector('dl dt').remove()
    quiz.appendChild(quizItem)
}
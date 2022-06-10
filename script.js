
const elementoResposta = document.querySelector("#resposta")

const inputPergunta = document.querySelector("#inputPergunta")

const resposta = [ 
    "Certeza", "Não tenho certeza", "Decidimente sim!!!", "Não conte com isso",
    "Sem dúvidas", "Agora não posso responder, porque estou cagando", "Sim definitivamente", "Minha resposta é não", "Você pode contar com isso!!!", "melhor não responder agora", "Não é possível responder agora", "As perspectivas não são boas"
]



const totalRespostas = resposta.length
const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

console.log(numeroAleatorio)

function fazerPergunta() {
    if(inputPergunta.value == "") {
        alert("Digite sua pergunta")
        return
    }

    const pergunta = "<div>" + inputPergunta.value + "<div/>"

const totalRespostas = resposta.length
const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

console.log(resposta[numeroAleatorio])
elementoResposta.innerHTML = pergunta + resposta[numeroAleatorio]
}
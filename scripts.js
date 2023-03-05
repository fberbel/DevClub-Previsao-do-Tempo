// let = Variável é um espaço no computador que guardamos algo let ( guarda valores, um número, uma letra, um texto, uma imagem )
// function = Função é um trecho de código que só é executado quando é chamado

let chave = "4d84fbece14c50151235d310f874a9a0"

function colocarNaTela(dados){
    document.querySelector(".cidade").innerHTML="Tempo em " + dados.name
    document.querySelector(".temperatura").innerHTML= 'Temperatura: ' + Math.floor(dados.main.temp) + "°C"
    document.querySelector(".descricao").innerHTML=dados.weather[0].description
    document.querySelector(".icone").src="https://openweathermap.org/img/wn/" +dados.weather[0].icon + ".png"
    document.querySelector(".umidade").innerHTML='Umidade: '+  (dados.main.humidity) + '%'
    console.log(dados)
}

async function buscarCidade(cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave + "&lang=pt_br" + "&units=metric")
    .then( resposta => resposta.json())
    colocarNaTela(dados)
}

function cliqueNoBotao(){
    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}
//criação JSON

var json1 = `{
    "id": 678,
    "nome": "Guitarra Strinberg Strato STS-100 WH",
    "preco": " R$ 890,00 ",
    "cor": " BRANCO - ESCUDO VINTAGE",
    "peso": "3kg APROX",
    "imagem": "<img src='img/guitarra.webp' width ='300px'>",
    "link": "https://www.lojamtech.com.br/instrumentos-de-corda/guitarra/stratocaster/guitarra-strinberg-strato-sts-100-wh-branco-brilhante-regulada-qualidade-mtech?srsltid=AfmBOop-YmL4gHeG7ymm4ao58TXnHVrxLvw8el0OyfznUZAi9KR5IRz3",

    "id2": 688,
    "nome2": "Gibson Les Paul Classic Heritage Cherry Sunburst",
    "preco2": "R$ 29.099,00",
    "cor2": "gradiente de marrom/laranja",
    "peso2": "8kg APROX",
    "imagem2": "<img src='img/gib.jpg' width ='300px'>",
    "link2": "https://www.royalmusic.com.br/gibson/gibson-les-paul-classic-heritage-cherry-sunburst/",

    "id3": 400,
    "nome3": "Guitarra elétrica 6 cordas Solar V1.6TAINA Seymour Evertune",
    "preco3": "R$ 12.591,00",
    "cor3": "Preto",
    "peso3": "4,5kg APROX",
    "imagem3": "<img src='img/gug.webp'>",
    "link3": "https://www.norrisimports.com.br/guitarra-solar-v16taina-seymour-distortions-evertune?srsltid=AfmBOorNdw-CGxCXb5_nZdClLyEamzN2f2EhOSh-yqfqWTw-6LZKYgCd"

}`;




//converter o texto STRING para JSON
var dados1 = JSON.parse(json1)

//Criar variavel para o link
var link = `<a href="${dados1.link}">compre sua guitarra aqui</a>`;
var link2 = `<a href="${dados1.link2}">compre sua guitarra aqui</a>`;
var link3 = `<a href="${dados1.link3}">compre sua guitarra aqui</a>`;

//front-end
function valor(){
    var identificador = document.getElementById('valorDigitado').value
    if (identificador == dados1.id) {


    document.getElementById('imagem').innerHTML = dados1.imagem
    document.getElementById('nome').innerHTML = dados1.nome
    document.getElementById('sobrenome').innerHTML = dados1.preco
    document.getElementById('cidade').innerHTML = dados1.cor
    document.getElementById('pais').innerHTML = dados1.peso
    document.getElementById('link').innerHTML = link
    } else if (identificador == dados1.id2) {


        document.getElementById('imagem').innerHTML = dados1.imagem2
        document.getElementById('nome').innerHTML = dados1.nome2
        document.getElementById('sobrenome').innerHTML = dados1.preco2
        document.getElementById('cidade').innerHTML = dados1.cor2
        document.getElementById('pais').innerHTML = dados1.peso2
        document.getElementById('link').innerHTML = link2
    } else if (identificador == dados1.id3) {

        document.getElementById('imagem').innerHTML = dados1.imagem3
        document.getElementById('nome').innerHTML = dados1.nome3
        document.getElementById('sobrenome').innerHTML = dados1.preco3
        document.getElementById('cidade').innerHTML = dados1.cor3
        document.getElementById('pais').innerHTML = dados1.peso3
        document.getElementById('link').innerHTML = link3
    } else{
        document.getElementById('imagem').innerHTML = ""
        document.getElementById('nome').innerHTML =""
        document.getElementById('sobrenome').innerHTML = ""
        document.getElementById('cidade').innerHTML = ""
        document.getElementById('pais').innerHTML = ""
        document.getElementById('link').innerHTML = ""
        document.getElementById('erro').innerHTML = "Registro Inválido"
    }
}

console.log(dados1)




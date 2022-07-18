// EX 04

var obj1 = { nome: "Fernando", 
            sobrenome: "Paulo", 
            idade: 32,
            setor: "pista", }
            

var obj2 = { nome: "Joaquim", 
            sobrenome: "Fernandes", 
            idade: 19,
            setor: "camarote", }

var obj3 = { nome: "Cíntia", 
            sobrenome: "Portela", 
            idade: 17, 
            setor: "arquibancada"}

var obj4 = { nome: "Sarah", 
            sobrenome: "Lindim", 
            idade: 15, 
            setor:"pista"}

var obj5 = { nome: "Arthur", 
            sobrenome: "Vilaverde", 
            idade: 35, 
            setor:"camarote"}

var obj6 = { nome: "Íris", 
            sobrenome: "Coimbra", 
            idade: 23, 
            setor:"arquibancada"}

// EX 05
var listaDeConvidados = [obj1, obj2, obj3, obj4, obj5, obj6]

//EX 06
function liberarBebidas(array) {
    var novaLista = [];
    array.forEach((idade,i) => {
        novaLista.push(array[i])
        if (array[i].idade > 17){
            novaLista[i].openBar = true;
            novaLista[i].sobrenome = novaLista[i].sobrenome + " 🍺"
        } else{
            novaLista[i].openBar = false;
            novaLista[i].sobrenome = novaLista[i].sobrenome + " 🔞"
        }
    }
    )
    return novaLista
}

var convidadosComBebida = liberarBebidas(listaDeConvidados)
console.table(convidadosComBebida)

//EX 07


//Camarote
function separarCamarote(array){
    var camarote = listaDeConvidados.filter((setor)=>
       setor.setor === "camarote"
    )
    return camarote
}

var listaCamarote = separarCamarote(convidadosComBebida)
console.table(listaCamarote)

//Arquibancada

function separarArquibancada(array){
    var arquibancada = listaDeConvidados.filter((setor)=>
       setor.setor === "arquibancada"
    )
    return arquibancada
}

var listaArquibancada = separarArquibancada(convidadosComBebida)
console.table(listaArquibancada)


//Pista

function separarPista(array){
    var pista = listaDeConvidados.filter((setor)=>
       setor.setor === "pista"
    )
    return pista
}

var listaPista = separarPista(convidadosComBebida)
console.table(listaPista)

//EX 08
const convidadosCamarote = listaCamarote.forEach((convidados, i)=> {
    var pistaEl = document.getElementById("listaCamarote")
    var item1 = document.createElement("li");
    var nome = listaCamarote[i].nome + " " + listaCamarote[i].sobrenome
    item1.textContent = nome;
    pistaEl.appendChild(item1);
    })

const convidadosArquibancada = listaArquibancada.forEach((convidados, i)=> {
    var pistaEl = document.getElementById("listaArquibancada")
    var item1 = document.createElement("li");
    var nome = listaArquibancada[i].nome + " " + listaArquibancada[i].sobrenome
    item1.textContent = nome;
    pistaEl.appendChild(item1);
    })

const convidadosPista = listaPista.forEach((convidados, i)=> {
var pistaEl = document.getElementById("listaPista")
var item1 = document.createElement("li");
var nome = listaPista[i].nome + " " + listaPista[i].sobrenome
item1.textContent = nome;
pistaEl.appendChild(item1);
})



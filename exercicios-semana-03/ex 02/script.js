var listaConvidados = [
    { nome: "José", sobrenome: "Carlos" },
    { nome: "Alessandro", sobrenome: "Viana" },
    { nome: "Paula", sobrenome: "Souza" },
    { nome: "Cristian", sobrenome: "Schimit" },
    { nome: "Beatriz", sobrenome: "Viana" },
    { nome: "Fernanda", sobrenome: "Silveira" },
    { nome: "Cláudia", sobrenome: "Torres" },
    { nome: "Augusto", sobrenome: "Cesar" },
    { nome: "Noemi", sobrenome: "Nakamura" },
    { nome: "Pedro", sobrenome: "Lobo" },
  ];
 

  var listaEl = document.getElementById("lista");

  const listaCompleta = listaConvidados.forEach((convidados, i)=> {
    console.log(convidados.nome + " " + convidados.sobrenome)
    var item = document.createElement("li");
    var nome = listaConvidados[i].nome + " " + listaConvidados[i].sobrenome
    item.textContent = nome;
    listaEl.appendChild(item);
  })
  

  

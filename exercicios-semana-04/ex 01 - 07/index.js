const contasClientes = [
    {
        id: 1,
        nome: 'Marcelo Fernandes',
        saldo: 500,
    },
    {
        id: 2,
        nome: 'Carla Marcelino Cardoso',
        saldo: 3000,
    },
    {
        id: 3,
        nome: 'Bruno Pedro Gonçalves',
        saldo: 5000,
    },
];

let client = document.getElementById("exibirContas")
    contasClientes.forEach(i => {
    let option = new Option(i.nome)
    client.options[client.options.length] = option 
})

const contasClientes = [
    {
        id: 1,
        nome: 'Marcelo Fernandes',
        saldo: 500,
        password: "",
    },
    {
        id: 2,
        nome: 'Carla Marcelino Cardoso',
        saldo: 3000,
        password: "",
    },
    {
        id: 3,
        nome: 'Bruno Pedro Gonçalves',
        saldo: 5000,
        password: "",
    },
];

const calculaValor = function () {

    let client = document.getElementById("exibirContas")
    let valor = document.getElementById("valor").value || 0
    let BankAccount = document.getElementById("saqueDeposito").value
    let password = document.getElementById("password").value
    let newValue = Number(valor)
    contasClientes.forEach(i => {
        let option = new Option(i.nome, i.id)
        client.options[client.options.length] = option



        if (client.value == i.id && BankAccount == "sacar") {
            item.password = password
            return console.log(i.saldo - newValue)
        }
        if (client.value == i.id && BankAccount == "depositar") {
            item.password = password
            return console.log(i.saldo + newValue)
        }
        new Set(client)
    })
}
import { saudacao } from "./saudacao.js";
import saudacaoEspecial from "./saudacao-especial.js"
let nome = "Julia"
saudacao()
saudacaoEspecial(nome)

class Produto {
    nome:
    preco:
    emEstoque:
    quantidade:
}

let produto1 = Produto
produto1.nome = 'Espelho'
produto1.preco = 35
produto1.emEstoque = true
produto1.quantidade = 5

let produto2 = Produto
produto2.nome = 'Calçado'
produto2.preco = 912
produto2.emEstoque = true
produto2.quantidade = 2

let produto3 = Produto
produto3.nome = 'Bolsa'
produto3.preco = 52
produto3.emEstoque = true
produto3.quantidade = 1

let produto4 = Produto
produto4.nome = 'Vestido'
produto4.preco = 192
produto4.emEstoque = true
produto4.quantidade = 6

let produto5 = Produto
produto5.nome = 'Camiseta'
produto5.preco = 49
produto5.emEstoque = true
produto5.quantidade = 8


class Pedido {
    numeroPedido:
    dataPedido:
    estaPago:
    listaProdutos:
    nomeCliente:
        constructor (){
    this.dataPedido = (new Date().toLocaleDateString());
    this.estaPago = false;
    this.listaProdutos = [];
}

adicionarProduto(produto){
    listaProdutos.push(produto.nome, produto.quantidade, produto.preco)
}

calcularTotal(){
    Total = Produto.quantidade * Produto.preco
}

} 




let pedido1 = Pedido
pedido1.numeroPedido = 20220001
pedido1.nomeCliente = 'Margarida Souza'

let pedido2 = Pedido
pedido2.numeroPedido = 20220002
pedido2.nomeCliente = 'Rafael Brito'
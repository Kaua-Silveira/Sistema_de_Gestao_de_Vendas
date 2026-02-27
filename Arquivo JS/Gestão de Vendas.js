//Criando a classe
class Produto {
    constructor(produto, quantidade, precoUnitario, desconto){
        this.produto = produto;
        this.quantidade = quantidade;
        this.precoUnitario = precoUnitario;
        this.desconto = desconto
    }

    detalheProduto(){ //Método que Detalha o Produto
        return `    -------------------    
    | Produto: ${this.produto} |
    | Quantidade: ${this.quantidade}  |
    | Preço: R$${this.precoUnitario}  |
    | Desconto: ${this.desconto}%    |
    -------------------`
    }

    atualizarQuantidade(pedido){ //Método que atualiza o estoque de acordo com a Qtd. de pedido

        if (this.quantidade >= pedido){
            console.log("Pedido pode ser feito")
            this.quantidade -= pedido
            this.QtdComprada = pedido
            this.valorPedido= pedido * this.precoUnitario
        }else{
            console.log("Pedido não pode ser feito")
        }

        console.log(this.detalheProduto())
    }

    aplicarDesconto(percentual){ //Método que dá o desconto
        this.porcentagem = percentual
        this.ValorTotal = this.valorPedido * (1 - percentual / 100)

    }

    detalhePedido(){ //Método que Detalha o pedido
        return `    -------------------    
    | Produto: ${this.produto}     |
    | Quantidade: ${this.QtdComprada}       |
    | Preço: R$${this.valorPedido}      |
    | Desconto: ${this.porcentagem}%        |       
    | Valor Total: ${this.ValorTotal.toFixed(2)}  | 
    -------------------`
    }

}

const minhaVenda = new Produto("Camisa", 32, 43.89, 0)

console.log(minhaVenda.detalheProduto())

minhaVenda.atualizarQuantidade(2)
minhaVenda.aplicarDesconto(5)


console.log(minhaVenda.detalhePedido())














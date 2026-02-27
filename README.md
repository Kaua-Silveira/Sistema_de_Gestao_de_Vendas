# Sistema de Gestão de Vendas 

Este é um projeto em JavaScript desenvolvido para praticar os conceitos fundamentais de Programação Orientada a Objetos (POO). O sistema simula o fluxo real de uma venda, desde a verificação de estoque até a emissão de um recibo detalhado com descontos.

##  Funcionalidades

#### O sistema foi estruturado através de uma classe Produto que permite:

* Gerenciamento de Estoque: Verifica se há unidades disponíveis antes de confirmar a venda.
* Cálculo Dinâmico: Calcula automaticamente o subtotal com base na quantidade pedida.
* Aplicação de Desconto: Permite aplicar porcentagens de desconto sobre o valor da venda.
* Interface no Terminal: Exibe recibos e detalhes do produto formatados diretamente no console.

## Tecnologias Utilizadas

* JavaScript (ES6+): Uso de Classes, Métodos, Construtores e Template Literals.
* Node.js: Ambiente de execução.

## Como funciona o código?

#### O fluxo do programa segue os seguintes passos:

* Instanciação: O produto é criado com nome, quantidade em estoque e preço.
* Consulta: O método detalheProduto() mostra o estado atual do item.
* Venda: O método atualizarQuantidade(pedido) valida a transação e abate o valor do estoque.
* Promoção: O método aplicarDesconto(percentual) calcula o valor final.
* Recibo: O método detalhePedido() gera o fechamento da venda.

## Aprendizados Relevantes
#### Durante o desenvolvimento deste projeto, foquei em:

* Uso do this: Para manipular propriedades internas da classe de forma segura.
* Encapsulamento: Unir dados e comportamentos em uma única estrutura.

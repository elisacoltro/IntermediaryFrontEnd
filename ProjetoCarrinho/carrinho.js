var valorTotal = [0, 0]; //valor da soma do que eu to adicionando de produto
var valorProduto = [50.0, 30.0]; //array com o valor de cada produto
var qtd = [0, 0]; //quantidade que se inicia o carrinho, ou seja, 0 para caa prouto

function adicionarItem(item) {
  var quantidade = document.getElementById("quantidade" + item);
  var total = document.getElementById("total" + item);
  qtd[item] += 1;
  valorTotal[item] = parseFloat(valorProduto[item]) * qtd[item];
  quantidade.innerHTML = qtd[item];
  total.innerHTML = valorTotal[item].toFixed(2);
  valorCompra();
}

function removerItem(item) {
  if (qtd[item] > 0) {
    qtd[item] -= 1;
    var quantidade = document.getElementById("quantidade" + item);
    var total = document.getElementById("total" + item);
    quantidade.innerHTML = qtd[item];
    valorTotal[item] = parseFloat(valorProduto[item]) * qtd[item];
    total.innerHTML = valorTotal[item].toFixed(2);
    valorCompra();
  }
}

function valorCompra() {
  var valorTotalCompra = document.getElementById("valorTotalCompra");
  var valor = 0;

  for (var i = 0; i < valorTotal.length; i++) {
    valor += valorTotal[i];
  }

  valorTotalCompra.innerHTML = valor.toFixed(2);
}

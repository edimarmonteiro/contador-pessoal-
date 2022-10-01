function calculando(){
/*trasformando input em variavel */
var internet = document.getElementById('internet').value;
var dinhero = document.getElementById('valor_total').value;
var agua = document.getElementById('agua').value;
var luz = document.getElementById('luz').value;
var gas = document.getElementById('gas').value;
var escola = document.getElementById('escola').value;
var compras = document.getElementById('compras').value;
var plano_saude = document.getElementById('plano_saude').value;
var tv = document.getElementById('tv').value;
var passeios = document.getElementById('passeios').value;
var outros = document.getElementById('outros').value;
var cartao = document.getElementById('fatura').value;
var odontológicos = document.getElementById('odontológicos').value;

//Soma dos valores dado colocado pelo usuário
    var resultado = parseFloat(internet) + parseFloat(agua) + parseFloat(luz) + parseFloat(gas) +
    parseFloat(escola) + parseFloat(compras) + parseFloat(tv) + parseFloat(plano_saude) + parseFloat(passeios) + 
    parseFloat(outros) + parseFloat(cartao) + parseFloat(odontológicos);

    //Calculando a sobra
    var sobra = parseFloat(dinhero) - resultado;
    
    //Escrevendo dentro do site
    var resultado_gasto = document.getElementById('total_gastos')
    .innerHTML = `Valor dos gastos:R$${resultado}`;
    
    //IFs para interagir se sobra ou faltar dinhero pra pagar as contas
    if(dinhero > resultado){
        var resultado_sobras = document.getElementById('sobra_gastos')
        .innerHTML = `Sobra do dinhero:R$${sobra}` ;
    } else{
        //Tirando o sinal '-'(negativo) quando faltar dinhero
        var resultado_negativo = sobra
        var sobra_negativo = Math.abs(resultado_negativo)

        var resultado_sobras = document.getElementById('sobra_gastos')
        .innerHTML = `Falta:R$${sobra_negativo} pra pagar as contas` ;
    }
}

// GRAFICO//////////////////

function converter(isDolarParaReal = false) { //// Declara a função converter como uma função com um parâmetro para verificar posteriormente se o valor é dolar para real ou real para dolar

    let valorInserido = document.getElementById('valor').value; // o .value pega o valor de dentro do input, ele é necessário pois se estiver ausente irá imprimir toda a função de valorElemento posteriormente;

    let valorConvertido = document.getElementById('valorConvertido'); // local (h2) onde a variável está guardando o resultado

    if (valorInserido == '') {
        valorConvertido.innerHTML = '';
        return false;
        } 
    // condição que irá verificar se o valor do input está vazio ou não

    function realParaDolar() {
        let dolar = 5.16;
        let resultadoEmDolar = parseFloat(valorInserido * dolar); // transformando o valor em numérico, pois anteriormente estava como string
        valorConvertido.innerHTML = `O resultado em real é R$ ${resultadoEmDolar}`; // o elemento h2 irá receber esse valor dentro do HTML, ou seja, irá imprimir todo o resultado do valorConvertido + valorEmReal;
    }

    function dolarParaReal() {
        let real = 0.19;
        let resultadoEmReal = parseFloat(valorInserido * real); // transformando o valor em numérico, pois anteriormente estava como string
        valorConvertido.innerHTML = `O resultado em real é R$ ${resultadoEmReal}`;
    }

    if (isDolarParaReal) {
        return realParaDolar();
    } else {
        return dolarParaReal();
    } // condição onde irá verificar e chanar a função

}
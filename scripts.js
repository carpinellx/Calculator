function insert(num) {
    var contaElement = document.getElementById('conta');
    var maxCaracteres = 10;

    // Obtém o texto atual do elemento
    var numero = contaElement.textContent;

    // Verifica se o comprimento do texto atual + o novo caractere excede o limite
    if (numero.length + 1 <= maxCaracteres) {
        // Adiciona o novo caractere se o limite não for excedido
        contaElement.textContent += num;
    } else {
        // Exibe uma mensagem de erro ou realiza outra ação (opcional)
        console.log("Limite de caracteres atingido.");
    }
}

function clean(){ //C da calculadora
    document.getElementById('conta').innerHTML = ""; 
}

function back(){ //Backspace da calculadora
    var conta = document.getElementById('conta').innerHTML;
    document.getElementById('conta').innerHTML = conta.substring(0, conta.length -1)
}

function calcular() {
    var contaElement = document.getElementById('conta');
    var maxCaracteres = 15;

    // Obtém a conta atual
    var conta = contaElement.textContent;

    // Verifica se há uma conta a ser calculada
    if (conta) {
        try {
            // Realiza o cálculo
            var resultado = eval(conta);

            // Limita o número de caracteres do resultado
            if (resultado.toString().length > maxCaracteres) {
                resultado = resultado.toString().substring(0, maxCaracteres) + '...';
            }

            // Atualiza o elemento com o resultado
            contaElement.textContent = resultado;
        } catch (error) {
            // Exibe uma mensagem de erro caso ocorra algum problema
            contaElement.textContent = "Erro";
        }
        
    }
}
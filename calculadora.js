var display="";
var numero ="";
var conta=[undefined,undefined,undefined]; //Armazenará o Primeiro valor, o OPERADOR, e o Segundo Valor
var resultado = undefined;

function valorClicado(valor){
    if(valor.innerHTML == '.' && numero.includes('.')){
        return;
    }
    numero = numero.concat(valor.innerHTML);//adiciona valor na variavel numero para realizar operações em seguida
    exibirNaTela(valor.innerHTML);
}

function operadorClicado(operador){
    if(numero == ""){
        return;
    }
    if(conta[1] == undefined){
        conta[0] = numero;
        conta[1] = operador.innerHTML;
        exibirNaTela(operador.innerHTML);
        numero="";
    }
}

function valorIgual(){
    if(conta[0] != undefined && conta[1] != undefined && conta[2] == undefined){
        limparTela();
        exibirNaTela('Erro de operação');
    }    
    if(conta[0] != undefined && conta[1] != undefined && numero != ''){
        var manterResult;
        conta[2] = numero;
        switch(conta[1]){
            case '+':
                resultado = Number(conta[0]) + Number(conta[2]);
                break;

            case '-':
                resultado = Number(conta[0]) - Number(conta[2]);
                break;

            case '*':
                resultado = Number(conta[0]) * Number(conta[2]);
                break;

            case '/':
                resultado = Number(conta[0]) / Number(conta[2]);
                break;
        }
        manterResult = resultado;
        limparTela();
        exibirNaTela(resultado);
        limparMemoria();
        numero = manterResult.toString();
    }
}

function exibirNaTela(conteudo){    
    display = display.concat(conteudo);
    var tela = document.getElementById('resultado');
    tela.value = display;
}

function limparTela(){
    display="";
    var tela = document.getElementById('resultado');
    tela.value  = display;
}

function limparMemoria(){    
    numero="";
    conta=[undefined,undefined,undefined];
    resultado = undefined;
}


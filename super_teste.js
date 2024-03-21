//Variáveis
let num1 = 10;
let num2 = 5;
let resultado;

//Operações
resultado = num1 + num2;
console.log("Resultado da adição: ", resultado);

resultado = num1 - num2;
console.log("Resultado da subtração: ", resultado);

resultado = num1 / num2;
console.log("Resultado da divisão: ", resultado);

//Comparação
if(num1 >= num2){console.log("num1 é maior ou igual a num2")
} else {
    console.log("num1 é menor que num2");
}

//Operadores lógicos
let condição1 = num1 >= 10;
let condição2 = num2 = num2 <= 5;

if(condição1&&condição2){
    console.log("Ambas as condições são verdadeiras");
} else if (condição1 || condição2) {
    console.log("Pelo menos uma das condições é verdadeira");
} else{
    console.log("Nenhuma das condições é verdadeira");
}

//Arrays
let frutas = ["Maça", "Banana", "Laranja"];
console.log("A segunda fruta é: ", frutas[1]);
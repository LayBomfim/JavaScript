//Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, 
//assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, sabendo que o 
//carro custa 60,00 reais por dia e 0,15 centavos por km rodado.


let km = 1000
let dias = 7
let valordodia = 60.00
let valorporkm = 0.15

let preçofinal = (dias * valordodia) + (km * valorporkm)

console.log(preçofinal)

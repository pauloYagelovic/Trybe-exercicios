// Questão 1:

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for (let index = 0; index < numbers.length; index += 1) {

//     console.log(numbers[index]);
// }

//----------------------------------------------------------

// Questão 2:

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let resultado = 0;

// for (let index = 0; index < numbers.length; index += 1) {
// resultado += numbers[index];
// }
// console.log(resultado);

// Questão 3:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;
let divisor = numbers.length;


for (let index = 0; index < numbers.length; index += 1) {
    resultado += numbers[index];
}
let media = resultado / divisor;
console.log(media);
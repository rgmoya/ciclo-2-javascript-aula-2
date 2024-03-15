// O que acontece ao tentar reatribuir um valor a const idade? ou seja, criar uma segunda const idade = 30?
const idade = 25;
//console.log(idade); 

//Resp: Da erro. Não é possível criar uma outra variavel "const" com mesmo nome





////////////////////////////////////////////////////////////////////////


//O que acontece ao chamar a let x dentro e fora do escopo? 
//Resp: Se for dentro do escopo ela só funcionará dentro deste escopo e Fora ela se torna uma variavel global, podendo ser acessada ao longo do código

//Escopo refere-se ao contexto no qual as variáveis e funções são definidas e acessadas.
//Nesse caso as chaves delimitam o nosso escopo

{
    let x = 10;
    // console.log(x); 
}
// console.log(x);



///////////////////////////////////////////////////////////////////////

//Ainda sobre escopo explique a diferença dos console.log

{
    let x = 10;
    var y = 20;
}

// console.log(x);
// console.log(y);
//Resp: No caso do x ele só será acessivel dentro do bloco e do y será içado para fora do bloco e se torna acessivel para todo o programa mesmo sem o valor



///////////////////////////////////////////////////////////////////////

//O que acontece nessa declaração, explique sobre o Hoisting
//Resp: o Hoisting joga a variável "var" para o topo do código, mas não leva junto seu valor atribuido. Nesta declaração ao exibir "a" vai resultar undefined, pois o valor só é atribuido depois de chamar a exibição. Já a variável em formato let se mantem no lugar onde foi declarada então ao chamar o comando para exibi-la ela apresentara erro de referencia pois naquele momento de execução ela ainda não existia.


//console.log(a); 
var a = 5;
console.log(b);
//let b = 10;


/////////////////////////////////////////////////////////////////////////////////

//No código abaixo apresenta um erro, qual?
//Resp:Esta declarando a mesma variável duas vezes


var x = 5;
var x = 10;
// console.log(x); 

let y = 15;
let y = 20;
// console.log(y);


/////////////////////////////////////////////////////////////////////////////////

//// Escreva um programa que print a primeira letra dessa variavel


//let nomecompleto = 'eduardo';
//const letraInicial = nomecompleto.charAt(0);
//console.log(letraInicial);







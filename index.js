// Indexados a partir do 0
// tamanho do array -1
let numeros = [1,2,3,4,5,6]

//Acessar elementos específicos de um array

numeros[0];
numeros[1];
numeros[2];
//...//
//Forma de acessar o último elemento do array de forma dinâmica
console.log (numeros[numeros.length -1]);
console.log("Tamanho do array = " + numeros.length);


//Modificar cada um dos elementos do array e imprimí-los no console
let alfabeto = ["a", "b", "c" ,"z"];
alfabeto [0] = "A";
alfabeto [1] = "B";
alfabeto [2] = "C";
alfabeto [3] = "D";
console.log(alfabeto);

//Adicionar elementos a um array.


//Push - adiciona no final.
alfabeto.push("F");
console.log(alfabeto);

//Unshift - adiciona no começo.
alfabeto.unshift("Y");
console.log(alfabeto);
 
//Extrair elementos de um array

//Remove o último elemento e retorna o elemento removido
alfabeto.pop();

//Remove o primeiro elemento e o retorna
alfabeto.shift();


//Comparar elementos de um array com outro.
const pontuacaoA =[5,6,7];
const pontuacaoB = [7,3, 10];

if (pontuacaoA [0] > pontuacaoB [0]) {
    console.log ("Na primeira rodada o jogador A venceu")
} else if (pontuacaoB [0] > pontuacaoA [0]) {
    console.log ("Na primeira rodada o jogador B venceu")
} else {
    console.log ("Deu empate")
}

let meuArray = [0,1,2,3];
// invertArray= [3,2,1,0];

function invertArray(array) {
    let novoArray = [];
    novoArray.push(array.pop());
    novoArray.push(array.pop());
    novoArray.push(array.pop());
    novoArray.push(array.pop());

    return novoArray;
}
console.log(meuArray);
console.log(invertArray(meuArray));

// Neste exercício, você criará uma função somarArray() que aceita um array de números e retorna a soma de todos eles.
let soma1 = [1,2,3];
let soma2 = [10,3,10,4];
let soma3 = [-5,100];

let resultSomar1 = soma1 [0] + soma1 [1] + soma1 [2];
console.log('Resultado da soma1 = ' + resultSomar1);

let resultSomar2 = soma2 [0] + soma2 [1] + soma2 [2] + soma2 [3];
console.log('Resultado da soma2 = ' + resultSomar2);

let resultSomar3 = soma3 [0] + soma3 [1];
console.log('Resultado da soma3 = ' + resultSomar3);

/* Neste exercício, você criará uma função chamada join que recebe um array e simula o comportamento do método Array.join().
Importante: Não poderá utilizar o método Array.join() original.
Por exemplo:
join(["o","l","á"]) deve retornar a string "olá".
join([“t”,"c","h","a,"u"]) deve retornar a string "tchau".
*/

let frase  = ["o","l","á"];
console.log( frase[0]+frase[1]+frase[2]);

/* join([“t”,"c","h","a,"u"]) deve retornar a string "tchau". */

let palavra = ["t","c" , "h" , "a", "u"];
console.log (palavra[0] + palavra [1] + palavra[2] + palavra[3] + palavra [4]);

/* Coleções de Filmes (e mais…)
O tech leader da equipe precisa conhecer a estrutura de dados do novo projeto. Para isso, devemos:
Criar a estrutura apropriada para armazenar os seguintes filmes e séries:
	"star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela". 
Importante: verifique se tudo funciona corretamente acessando qualquer um dos filmes uma vez que a estrutura correspondente tenha sido criada.
*/

let filmesSeries = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"];

/* Os filmes devem estar todos em letras maiúsculas. Para isso, crie uma função que recebe um array por parâmetro e converta o conteúdo de cada elemento em letras maiúsculas.
Dica: revise o que faz o método de strings .toUpperCase().
*/

const filmesSeriesMaiusculas = filmesSeries.map(filmesSeries => filmesSeries.toUpperCase());

console.log(filmesSeriesMaiusculas);

/* Crie outra estrutura semelhante à primeira, mas com os seguintes filmes de animação:
	"Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"
Em seguida, crie uma função que receba dois arrays como parâmetros, para poder adicionar os elementos contidos no segundo array, dentro do primeiro, a fim de retornar um único array com todos os filmes como seus elementos. */

const filmesAnimacao = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"];

const filmesSeriesAnimacoes = filmesSeries.concat(filmesAnimacao);

console.log(filmesSeriesAnimacoes);

/* Durante o processo, percebemos que o último elemento na série de filmes animados é, na verdade, um game. Agora devemos editar nosso código e modificá-lo para que possamos remover o último elemento antes de migrar o conteúdo para o array que contém todos os filmes.
PS: por precaução, salve o elemento que você vai deletar em uma variável.
*/

const game = filmesSeriesAnimacoes.pop();
console.log(game);

/* Finalmente, recebemos dois arrays com classificações feitas por diferentes usuários do mundo nos filmes com o seguinte formato:
	//const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
	//const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
Crie uma função que compare as notas e nos diga se elas são iguais ou diferentes.
*/

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

if (asiaScores == euroScores){
    console.log("As notas são iguais")
} else {
    console.log("As notas são diferentes")
}

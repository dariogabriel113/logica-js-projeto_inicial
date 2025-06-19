alert('Boas vindas ao jogo do Número Secreto!');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 10');

//se chute for igual ao número secreto
if (numeroSecreto == chute) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
} else {
    alert('Você errou :(');
}
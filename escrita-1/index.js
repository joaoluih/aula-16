
/**
 * 
 * Fa�a um programa que ergunta ao usu�rio a sua idade e imprima no console se ela/e pode dirigir (apenas maiores de idade).
 * 
 * a) Fa�a um "prompt" para receber a idade do usu�rio e guarde em uma vari�vel.
 * 
 * b) Garanta que essa vari�vel � do tipo "Number".
 * 
 * c) Agora veja se essa idade do usu�rio corresponde � idade m�nima que permite dirigir. Se sim, imprima no console "Voc� pode dirigir", caso contr�rio, imprima "Voc� n�o pode dirigir."
 * 
**/


let mensagemIdade = prompt("Diga sua idade")
let digirir = 18

let maiorIdade = function(mensagemIdade, digirir){
  if(mensagemIdade >= digirir)
  console.log("Você pode digirir")
  else{
    console.log("voce nao pode dirigir")
  }
} 
maiorIdade(mensagemIdade, digirir)

/**
 * 
 * Repita o exerc�cio anterior, mas utilizando a estrutura de "switch/case".
 * 
 * Dica: Lembre-se que "switch/case" � como se fosse um "if", mas verifica somente igualdades estritas (===).
 * 
**/

let verificar = prompt("Qual turno você estuda?, M = (Matutino), V = (Vespertino), N = (Noturno)")
verificar = verificar.toLowerCase()

switch (verificar){
  case "m":
    console.log("Bom Dia")
    break 
  case "v":
    console.log("Boa Tarde") 
    break 
  case "n":
    console.log("Boa Noite") 
    break
}    


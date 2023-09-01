
/**
 * 
 * Fa�a um programa que verifica que turno do dia um aluno estuda.
 * 
 * Pe�a para digitar "M" (matutino), "V" (Vespertino) ou "N" (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize os blocos "if/else if/else".
 * 
**/


let verificar = prompt("Qual turno você estuda?, M = (Matutino), V = (Vespertino), N = (Noturno)")
verificar = verificar.toLowerCase() 


let turno = function(verificar){
  if(verificar === "m"){
    console.log("Bom dia")
  }
  else if(verificar === "v"){
    console.log("boa tarde")
  }
  else if (verificar === "n") {
    console.log("Boa noite")
  }
  
  else{
    console.log("Turno não encontrado")
  }
}

turno(verificar)      
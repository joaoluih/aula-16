
// Leia o c�digo

const respostaDoUsuario = prompt("Digite o n�mero que voc� quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 4 === 0) {
	console.log("Passou no teste.")
}
else {
	console.log("N�o passou no teste.")
}

// a) Explique o que o c�digo faz. Qual o teste que ele realiza? Ele verefica se um numero é par ou não atraves do resto da divisão, sempre que um numero for par, o resto sera 0 e você passara no teste

// b) Para que tipos de n�meros ele imprime no console "Passou no teste"? Para todos numeros que não terão sobra na divisão 2 

// c) Para que tipos de n�meros a mensagem � "N�o passou no teste"? Para todos numeros que terão sobra na divisão por 2 


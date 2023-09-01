
// Leia o c�digo

const numero = Number(prompt("Digite o primeiro n�mero."))

if (numero > 0) { 
	console.log("Esse n�mero passou no teste")
	let mensagem = "Essa mensagem � secreta!" 
}



// a) O que a primeira linha est� fazendo? Ela esta criando uma varivel, fazendo uma pergunta com prompt ("digite o primeiro numero") e definindo a resposta como um numeral com = Number

// b) Considere um usu�rio digitou o n�mero 10. Qual ser� a mensagem do terminal? E se fosse o numero -10? Se fosse 10, ele receberia a a mensagem "Esse numero passou no teste", por ser um numero maior que 0, e tambem recebera um erro na linha 11, "mensagem not defined". Caso fosse -10 ele nao receberia mensagem nenhuma no console, por ser numero menor que 0

// c) Haver� algum erro no console? Justifique usando os conceitos de bloco ou escopo.  Na linha 11 vai ter um erro, o console.log(mensagem) nãp esta definido, pois ele foi feito em um bloco separado do IF, então ele nao consegue imprimir a mensagem por estarem e um bloco separados, caso coloque o console.log(mensagem) antes de fechar as chaves, ele imprimira o a mensagem normalmente.  
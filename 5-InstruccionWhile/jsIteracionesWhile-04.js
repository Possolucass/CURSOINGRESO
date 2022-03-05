/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;

	numero = prompt("ingrese un numero");
	numero = parseInt(numero);

	while(numero<0 || numero>9)
	{
		numero = prompt("numero incorrecto, reingrese un numero: ");
		numero = parseInt(numero);
	}

	document.getElementById('txtIdNumero').value = numero ;

	//var numeroIngresado;
	//numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	
}//FIN DE LA FUNCIÓN
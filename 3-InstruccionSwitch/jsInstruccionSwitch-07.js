function mostrar()
{

	let destinoIngresado;
	let mensaje;

	destinoIngresado = document.getElementById('txtIdDestino').value;


	switch(destinoIngresado)
	{
		case "Usuahia":
			mensaje = "Sur";
		break;
		case "Cataratas":
			mensaje = "Norte"
		break;
		case "Mar del plata":
			mensaje = "Oeste"
		break;
		case "Bariloche":
			mensaje = "Este"
		break;


	}
	// destinoIngresado =txtIdDestino.value;
	alert(mensaje);

}//FIN DE LA FUNCIÓN
function mostrar()
{ 
	let destinoIngresado;
	let mensaje;

	destinoIngresado = document.getElementById('txtIdDestino').value;

	switch(destinoIngresado)
	{
		case "Usuahia":
		case "Bariloche":
			mensaje = "Aca hace frio";
		break;
		default:
			mensaje = "Aca hace calor";
		break;	
	}
	//var destinoIngresado =txtIdDestino.value;
	alert(mensaje);

}//FIN DE LA FUNCIÓN
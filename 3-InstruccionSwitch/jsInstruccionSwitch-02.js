function mostrar()
{
	let mesDelAño;

	mesDelAño = document.getElementById('txtIdMes').value;

	switch(mesDelAño)
	{
		case "Julio":
			"Agosto"
			mensaje = "abrigate que hace frio";
		break;
		case "Enero":
			"Febrero"
			"Marzo"
			"Abril"
			"Mayo"
			"Junio"
			mensaje = "falta para el invierno";
		break;
		default:
			mensaje = "ya pasamos el frio, ahora calor";
		break;
	}


	//tomo el mes
	
	alert(mensaje);




}//FIN DE LA FUNCIÓN
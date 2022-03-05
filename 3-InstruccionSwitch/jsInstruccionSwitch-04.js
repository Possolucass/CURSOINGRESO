function mostrar()
{
	let mesDelAño;
	let mensaje;

	mesDelAño = document.getElementById('txtIdMes').value;

	switch (mesDelAño)
	{
		case "Febrero":
		mensaje = "tiene 28 dias";
		break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje = "tienen 30 dias";
		break;
		default:
			mensaje = "tienen 31 dias";
		break;

	}
	//tomo el mes
	
	alert(mensaje);
	
	



}//FIN DE LA FUNCIÓN

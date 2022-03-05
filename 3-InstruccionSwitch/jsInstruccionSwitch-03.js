function mostrar()
{	
	let mesDelAño;
	
	mesDelAño = document.getElementById('txtIdMes').value;

	switch(mesDelAño)
	{
		case "Febrero":
			mensaje = "Este mes no tiene mas de 29 dias";
		break;

	default:
			mensaje = "Este mes tiene mas de 30 dias";
		break;
	}


	//tomo el mes
	
	alert(mensaje);
	
	


}//FIN DE LA FUNCIÓN
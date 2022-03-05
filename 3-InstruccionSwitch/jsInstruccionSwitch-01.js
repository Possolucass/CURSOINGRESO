function mostrar()
{	
	let mesDelAño;
	let mensaje;

	mesDelAño = document.getElementById('txtIdMes').value;

	switch(mesDelAño)
	{
		case "Enero":
			mensaje = "que comiences bien el año";
		break;
		case"Marzo":
			mensaje = "que comiences bien el año";
		break; 
		case "Julio":
			mensaje = " se vienen las vacaciones";
		break;
		case "Diciembre":
			mensaje = "felices fiestas";
		break;

	}
	//tomo el mes
	
	alert(mensaje);

}

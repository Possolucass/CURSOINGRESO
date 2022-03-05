function mostrar()
{ 
	let horaDelDia;
	let mensaje;

	horaDelDia = document.getElementById('txtIdHora').value;
	//horaDelDia = parseInt(horas del dia);
	
	switch (horaDelDia)
	{
		case "siete":
		case "ocho":
		case "nueve":
		case "diez":
		case "once":
		mensaje = "es de mañana";
	break;

	}
	//tomo la hora
	
	alert(mensaje);
	
	



}//FIN DE LA FUNCIÓN
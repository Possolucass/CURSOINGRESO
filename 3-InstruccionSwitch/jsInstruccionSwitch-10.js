/*una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche*/



function mostrar()
{

	let localidadIngresada;
	let estacionIngresada;
	let mensaje;

	localidadIngresada = document.getElementById('txtIdDestino').value;
	estacionIngresada  = document.getElementById('txtIdEstacion').value;

	switch(estacionIngresada)
	{   case "Invierno":
			switch(localidadIngresada)
			{
				case "Bariloche":
					mensaje = "se viaja";
				break;
				default:
					mensaje = "no se viaja";
				break;
		case "Verano":
		break;	
			case "Mar del plata":
			case "Cataratas":
				mensaje = "se viaja";
			break;
		case "Primavera":
		break;
			case "Mar del plata":
			case "Cataratas":
				mensaje = "no se viaja";
			break;
			default:
				mensaje = "se viaja";
			break;
		
			}			
	
	}
	//var estacionIngresada =txtIdEstacion.value;
	alert(mensaje);

}//FIN DE LA FUNCIÓN
/*una agencia de viajes debe sacar las tarifas de los viajes ,
 se cobra $15.000 por cada estadia como base
 , se pide el ingreso de una estacion del año y
  localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas
 y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas
 y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10%
 cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10%
  y Cordoba tiene el precio sin descuento*/

function mostrar()
{ 
	let localidadIngresada;
	let estacionIngresada;
	let porcentaje;
	let tarifa;
	let precioFinal;


	tarifa = 15000 ;
	localidadIngresada = document.getElementById('txtIdDestino').value;
	estacionIngresada = document.getElementById('txtIdEstacion').value;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(localidadIngresada)
			{
				case "Bariloche":
				porcentaje = 20 ;
				break;
				case "Cataratas":
				case "Cordoba":
				porcentaje = 10;
				break;
				case "Mar del plata":
				descuento = -20 ;
				break;
			}
		break;		
		case "Verano":
			switch(localidadIngresada)
			{				
				case "Bariloche":
					porcentaje = -20;
				break;
				case "Cataratas":
				case "Cordoba":
					porcentaje = 10 ;
				break;
				case "Mar del plata":
				 	porcentaje = 20;
				break;
			}
		break;
		case "Otoño":
		case "Primavera":	
			switch(localidadIngresada)
				{	
					case "Bariloche":
						porcentaje = 10 ;
					break;
					case "Cataratas":
					case "Mar del plata":
						porcentaje = 10 ;
					break;
					default:
					 porcentaje = 0;
					break;
					}
			break;
	}
precioFinal = tarifa * porcentaje / 100 ;
precioFinal = tarifa + precioFinal ;
alert("La estadia en dicho lugar cuesta " + precioFinal);

}
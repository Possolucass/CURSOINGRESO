function mostrar()
{
/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/

	let productoIngresado;
	let precioDeBolsas;
	let cantidadDeBolsas;
	let respuesta;
	let contadorBolsas;
	let precioBruto;
	let acumuladorPrecioBruto;
	let contadorCal;
	let contadorCemento;
	let contadorArena;
	let tipoMasCantidadDeBolsas;
	let banderaDeTipoMasCaro;
	let precioMasCaro;
	let tipoMasCaro;



	banderaDeTipoMasCaro = "arriba";
 	contadorCal = 0 ;
	contadorCemento = 0 ;
	contadorArena = 0 ;
	contadorBolsas = 0 ;
	respuesta = "si";
	
	//productoIngresado = prompt("desea ingresar un producto?");

	while(respuesta == "si")
	{
		productoIngresado = prompt("ingrese su producto");

		while(productoIngresado!= "arena" && productoIngresado != "cal" && productoIngresado!= "cemento")
		{
			productoIngresado = prompt("error reingrese el producto: arena, cal o cemento");

		}

		cantidadDeBolsas = prompt("ingrese cant de bolsas");
		cantidadDeBolsas = parseInt(cantidadDeBolsas);

		while(cantidadDeBolsas<0)
		{
			cantidadDeBolsas = prompt("error ,ingrese cant de bolsas");
			cantidadDeBolsas = parseInt(cantidadDeBolsas);
		}

		precioDeBolsas = prompt("ingrese cant de bolsas");
		precioDeBolsas = parseInt(precioDeBolsas);
		
		while(precioDeBolsas<1)
		{
			precioDeBolsas = prompt("error reingrese cant de bolsas");
			precioDeBolsas = parseInt(precioDeBolsas);

		}

		precioBruto = cantidadDeBolsas * precioDeBolsas ;
		acumuladorPrecioBruto = acumuladorPrecioBruto + precioBruto;
		switch(productoIngresado)
		{
			case "arena":
				acumuladorArena = acumuladorArena + cantidadDeBolsas ;
			break;
			case "cal":
				acumuladorCal = acumuladorCal + cantidadDeBolsas ;
			break;
			case "cemento":
				acumuladorCemento = acumuladorCemento + cantidadDeBolsas ;
			break;
		}
		if(banderaDeTipoMasCaro == "arriba")
		{
			precioMasCaro = precioIngresado;
			tipoMasCaro = productoIngresado;
			banderaDeTipoMasCaro = "abajo" ;
		}
		else
		{
			if(precioIngresado>precioMasCaro)
			{
				precioMasCaro = precioIngresado;
				tipoMasCaro = productoIngresado;
			}

		}


		respuesta = prompt("desea seguir ingresando?");


	}//fin del while
	if(acumuladorCemento>acumuladorCal && acumuladorCemento>acumuladorArena)
	{
		tipoMasCantidadDeBolsas = "cemento" ;

	}
	else 
	{	
		if(acumuladorCal>acumuladorArena)
		{	
			tipoMasCantidadDeBolsas = "cal";
		}
		else

		{
			tipoMasCantidadDeBolsas = "arena";
		}


	}

	document.write("el tipo mas caro es " + tipoMasCaro);
} 

function mostrar()
{
/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/

/*	let productoIngresado;
	let precio;
	let cantidadDeUnidades;
	let marcaProducto;
	let fabricante;
	let contador;
	let banderaDelPrimerAlcohol;
	let precioMasBarato;
	let unidadesAlcoholMasBarato;
	let fabricanteMasBarato;
	let acumuladorJabones;
	let contadorBarbijos;
	let acumuladorBarbijos;
	let acumuladorDeAlcohol;
	let promedioPorCompra;
	let totalCompras;
	let mensaje;

	unidadesAlcoholMasBarato = 0 ;
	contador = 0;
	contadorJabones = 0 ;
	acumuladorJabones = 0 ;
	contadorBarbijos = 0;
	acumuladorBarbijos = 0 ;
	acumuladorDeAlcohol = 0 ;

	while(contador<5)
	{
		productoIngresado = prompt("ingrese su producto");

		while(productoIngresado!= "barbijo" && productoIngresado != "jabon" && productoIngresado!= "alcohol")
		{
			productoIngresado = prompt("elija entre alcohol, barbijo o jabon");

		}
		precio = prompt("ingrese el precio");
		precio = parseInt(precio);
		while(precio<100 || precio>300)
		{
			precio = prompt("ingrese entre $100 y $300");
		}
		cantidadDeUnidades = prompt("ingrese cant de unidades");
		cantidadDeUnidades = parseInt(cantidadDeUnidades);
		while(cantidadDeUnidades<0 || cantidadDeUnidades>1000)
		{
			cantidadDeUnidades = prompt("ingrese nuevamente cant de unidades");
			cantidadDeUnidades = parseInt(cantidadDeUnidades);
		}
		marcaProducto = prompt("ingrese la marca");
		fabricante = prompt("fabricante");
		switch(productoIngresado)
		{
			case"alcohol":
			acumuladorDeAlcohol = acumuladorDeAlcohol + cantidadDeUnidades;
			if(banderaDelPrimerAlcohol == "arriba")
			{
				unidadesAlcoholMasBarato = cantidadDeUnidades ;
				precioMasBarato = precio;
				fabricanteMasBarato = fabricante;
				banderaDelPrimerAlcohol = "abajo";
			}
			else
			{
				if(precio<precioMasBarato)
				{
					unidadesAlcoholMasBarato = cantidadDeUnidades ;
					precioMasBarato = precio;
					fabricanteMasBarato = fabricante;
				}
			}	
			break;
			case"barbijo":
				
				acumuladorBarbijos = acumuladorBarbijos + cantidadDeUnidades;
			break;

			case"jabon":
				acumuladorJabones = acumuladorJabones + cantidadDeUnidades;
			break;
		}
	
	}//fin del while

	totalCompras = acumuladorBarbijos + acumuladorJabones + acumuladorDeAlcohol;

	if(acumuladorBarbijos>acumuladorJabones && acumuladorBarbijos>acumuladorDeAlcohol)
	{	
		promedioPorCompra = acumuladorBarbijos*100/totalCompras;
		
	}
	else
	{
		if(acumuladorJabones>acumuladorDeAlcohol)
		{
			promedioPorCompra = acumuladorJabones*100/totalCompras;

		}
		else
		{
			promedioPorCompra = acumuladorDeAlcohol*100/totalCompras;

		}
	}

	document.write("")*/



/*Una agencia de autos nos contrata para generarle un software que permita el ingreso de sus autos,
 sin limite de
ingresos, al comenzar la carga de datos debemos pedir:
- Marca.
- El Peso en kg. del auto que ingresa (tiene que estar entre 917 y 3900).
- El importe del auto en pesos (mayor a 600000).
- Validar que tipo de auto es sedan o coupé.
Debemos informar:
a) Mostrar el promedio total del importe de todos los autos que ingresaron.
b) Mostrar La marca y el importe del auto más liviano que sea sedan.
c) El auto mas pesado que sea coupé.
*/
	

	let marcaIngresada;
	let pesoIngresado;
	let importeIngresado;
	let respuesta;
	let tipoDeAuto;
	let contador;
	let promedioTotalDeImporte;
	let banderaMasPesado; 
	let pesoMasPesado;
	let banderaSedan;
	let marcaMasLiviano;
	let importeMasLiviano;
	let pesoMasLiviano;
	let acumuladorPrecio;

	acumuladorPrecio = 0;
	banderaSedan ="arriba";
	banderaMasPesado = "arriba";
	contador = 0;
	respuesta = "si";
	while(respuesta == "si")
	{

		marcaIngresada=prompt("ingrese su marca");
		pesoIngresado=prompt("ingrese la edad");
		pesoIngresado=parseInt(pesoIngresado);
		while(pesoIngresado>917 && pesoIngresado<3900)
		{
			pesoIngresado=prompt("error re-ingrese la edad");
			pesoIngresado=parseInt(pesoIngresado);
		}
		importeIngresado=prompt("ingrese el importe");
		importeIngresado=parseInt(importeIngresado);
		while(importeIngresado<600000)
		{	

			importeIngresado=prompt("error re-ingrese el importe");
			importeIngresado=parseInt(importeIngresado);
		}
		tipoDeAuto =prompt("ingrese el tipo de auto");
		while(tipoDeAuto!="sedan"&& tipoDeAuto!="coupe")
		{
		  tipoDeAuto =prompt("error re-ingrese el tipo de auto");
		}
   	//b) Mostrar La marca y el importe del auto más liviano que sea sedan.
   	switch(tipoDeAuto)
   	{
   		case"sedan":
   		if(banderaSedan == "arriba")
   		{
   			pesoMasLiviano=pesoIngresado;
   			marcaMasLiviano = marcaIngresada;
   			importeMasLiviano=importeIngresado;
   			banderaSedan="abajo";

   		}
   		else
   		{
   			if(pesoMasLiviano<pesoIngresado)
   			{
   				marcaMasLiviano = marcaIngresada;
   				importeMasLiviano=importeIngresado;
   			}
   		}
   		break;
   		case"coupe"://c) El auto mas pesado que sea coupé.
   		if(banderaMasPesado = "si")
   		{ 
   			pesoMasPesado = pesoIngresado;
   			banderaMasPesado = "abajo";
   		}
   		else
   		{
   			if(pesoIngresado>pesoMasPesado)
   			{
   				pesoMasPesado = pesoIngresado;
   			}
   		}
   		break;
   		acumuladorPrecio=acumuladorPrecio+pesoIngresado;
   	}//a) Mostrar el promedio total del importe de todos los autos que ingresaron.
   		promedioTotalDeImporte=acumuladorPrecio/contador;


		contador++;
		respuesta =  prompt("desea seguir ingresando?");

	}//fin del while
  
}
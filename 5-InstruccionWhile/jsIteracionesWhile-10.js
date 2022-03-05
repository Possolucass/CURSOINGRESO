/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.X
2-Suma de los positivos.X
3-Cantidad de positivos.X
4-Cantidad de negativos.X
5-Cantidad de ceros.X
6-Cantidad de números pares.X
7-Promedio de positivos.X
8-Promedios de negativos.X
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let numerosNegativos;
	let numerosPositivos;
	let respuesta;
	let numeroIngresado;
	let sumaNegativos;
	let sumaPositivos;
	let contadorPositivos;
	let contadorNegativos;
	let promedioNegativos ;
	let promedioPositivos ;
	let contadorCeros;
	let cantidadNumerosPares;

	contadorCeros = 0 ;
	acumulador = 0 ;
	sumaNegativos = 0;
	sumaPositivos = 0 ;
	contadorPositivos = 0 ;
	contadorNegativos = 0 ;


	respuesta="si";
	
	//numeroIngresado = prompt("desea ingresar un numero?");
	//numeroIngresado = parseInt(numeroIngresado);
	while(respuesta == "si")
	{ 
		numeroIngresado = prompt("ingrese su numero");
		numeroIngresado = parseInt(numeroIngresado);
		
		if(numeroIngresado < 0)
		{
			//acumulador = acumulador + numeroIngresado ;
			sumaNegativos = sumaNegativos + numeroIngresado ;
			contadorNegativos = contadorNegativos + 1 ;
			promedioNegativos = sumaNegativos / numeroIngresado ;
		}
		else
		{

			if (numeroIngresado>0) 
			{	
				sumaPositivos = sumaPositivos + numeroIngresado ;
				contadorPositivos = contadorPositivos + 1 ;
				promedioPositivos = sumaPositivos / numeroIngresado ;			
			}
		}
		if(numeroIngresado == 0)
		{
			contadorCeros = contadorCeros + 1 ;
			acumulador = contadorCeros + 1 ;
		}
		if(cantidadNumerosPares %2 == 0)
		{
			cantidadNumerosPares = cantidadNumerosPares + 1 ;
		}
		
		respuesta=prompt("desea continuar?");
	}//fin del while

	document.write("la suma de negativos es :" + sumaNegativos + '<br>');
	document.write("la suma de positivos es :" + sumaPositivos + '<br>');
	document.write("la cantidad de positivos es :" + contadorPositivos + '<br>');
	document.write("la cantidad de negativos es :" + contadorNegativos + '<br>');
	document.write("el promedio de negativos es :" + promedioNegativos + '<br>');
	document.write("el promedio de positivos es :" + promedioPositivos + '<br>');
	document.write("la cantidad de ceros es :" + contadorCeros + '<br>');
	document.write("la cantidad de numeros pares es :" + cantidadNumerosPares + '<br>');







}//FIN DE LA FUNCIÓN
/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{	
	let contador;
	let acumulador;
	let respuesta;
	let promedio;
	let numeroIngresado;

	contador=0;
	acumulador=0;
	respuesta="si";

	while(respuesta == "si")
	{	
		contador = prompt("ingrese un numero");
		contador = parseInt(contador);
		numeroIngresado = prompt("desea ingresar otro numero?");
		contador = contador + 1 ;
		acumulador = acumulador + numeroIngresado ;

		
	}

	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
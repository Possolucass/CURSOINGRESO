/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a  4*/

function mostrar()
{    
	let notaRandom;




	notaRandom = Math.floor(Math.random()*9)+1;// numero que pide mas 1, para el rango.

	 if(notaRandom<9)//NO DEJAR AFUERA EL NUMERO QUE MENCIONA.
	{
		mensaje = "EXCELENTE";
		alert('EXCELENTE TU NOTA ES ' + notas);

	}
	else //sino
	{ 
		if(notaRandom>4)
		mensaje = "APROBÓ";
	    alert('APROBASTE' + notas);

	}
	else
	{
		if(notaRandom>4)

	    mensaje = "VAMOS; LA PROXIMA SE PUEDE";
	    alert(mensaje);// preguntar porque podria ser que la ultima nota vaya antes qe la del +4 asi no usa tanto el micro

	}


	 	   	

}//FIN DE LA FUNCIÓN
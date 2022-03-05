/*Ejercicio 07 BIS V1 (Realizar en los archivos  del ejercicio 07 del IF)
si es menor de 13 , mostrar el mensaje “feliz día”.
Si es adolescente el mensaje es “usted es adolescente”
si tiene 17 años además mostrar el mensaje “último año!!!”
Si es mayor de edad mostrar el mensaje “tenes edad de laburar”.
si tiene 33 años , además mostrar el mensaje “como cristo”
si tiene más de 60 años, además mostrar el mensaje “A jubilarse”.
si tiene 88, además mostrar el mensaje “lindo número''
si la edad es par , además mostrar , “sos par!!”.*/


function mostrar()
{
	let edad;
	let nombreIngresado;
	let estadoCivil;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);
	nombreIngresado = prompt('ingresa su nombre por favor');
	estadoCivil = document.getElementById('estadoCivil').value;

	if(edad<13)
	{
		mensaje = "feliz dia";
		
		if(nombreIngresado == "ricardo")

		{
		   mensaje = mensaje + " muy chiquito para ese nombre";
		}
	}
	else
	{ 
		if(estadoCivil == "Casado")
		{
			mensaje = " casado quiere casa";

		}
	
		else
		{
			if(edad<18)
			{	
				mensaje = " usted es adolescente";

				if(nombreIngresado == "violeta")
				{
					mensaje = "como un color";

				}
		
				if(edad == 17)
				{
					mensaje = mensaje + "  y esta en el utlimo año";
				}
				if(estadoCivil == "Divorciado");
				{
						mensaje = mensaje + ' ,toda una vida por delante';
				}

			}
			else
			{
				mensaje = " a laburar";

			
				if(edad == 33 )
				{
					mensaje = "como cristo";
				}
				if(edad>59)
				{	
					mensaje = "a jubilarse";

					if(nombreIngresado == "alfredo")
					{
						mensaje = mensaje + " como el de QUEEN";
					}
				}
				else
				{
					if (estadoCivil == "Soltero")
					{
						mensaje = mensaje + " y a salir";
					}
				}

				if(edad == 88)
				{
					mensaje = "lindo numerito";
				}
			}
		
		}			
	
	}
		
	if(edad %2 == 0)
	{
		mensaje = mensaje + " y sos par";
	}

		



	

	alert(mensaje);
}	
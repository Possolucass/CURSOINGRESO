/*En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y
estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.*/


function mostrar()
{
	let respuesta;
	let nombreIngresado;
	let nacionalidadIngresada;
	let edadIngresada;
	let sexoIngresado;
	let estadoCivilIngresado;
	let temperaturIngresada;
	let mayorTemperatura;
	let banderaTemperatura;
	let nacionalidadConMasTemperatura;
	let contadorEdadMayor;
	let contadorMujeresViudasOCasadas;
	let contadorTerceraEdad;
	let promedioDeEdadMujeresCasadas;
	let contadorMujeresCasadas;
	let acumuladorDeEdadMujeresCasadas;//cuando es promedio de algo va contador + acumulador.


	
	acumuladorMujeresCasadas = 0 ;
	contadorMujeresCasadas = 0;
	contadorTerceraEdad = 0 ;
	contadorMujeresViudasOCasadas = 0;
	contadorEdadMayor = 0 ;
	banderaTemperatura = "arriba";
	respuesta = "si";


	while(respuesta == "si")
	{
		nombreIngresado = prompt("ingrese su nombre");
		nacionalidadIngresada = prompt("ingrese su nacionalidad");
		edadIngresada = prompt("ingrese su edad");
		edadIngresada = parseInt(edadIngresada);
		sexoIngresado = prompt("ingrese su sexo"); 
		while(sexoIngresado!="m" && sexoIngresado != "f")
		{
			sexoIngresado = prompt("error re-ingrese su sexo");

		}
		estadoCivilIngresado = prompt("ingrese su estado civil")
		while(estadoCivilIngresado!="soltero"&&estadoCivilIngresado!="casado"&&estadoCivilIngresado!="viudo")
		{
			estadoCivilIngresado = prompt("error re-ingrese su estado civil")
		}
		temperaturaIngresada = prompt("ingrese su temperatura");
		temperaturaIngresada = parseFloat("temperaturaIngresada");
		while(temperaturaIngresada<35 || temperaturaIngresada>42)
		{
			temperaturaIngresada = prompt("error re-ingrese su temperatura");
			temperaturaIngresada = parseFloat("temperaturaIngresada");
		}
		//a) la Nacionalidad de la persona con mas temperatura.
		if(banderaTemperatura == "arriba")
		{
			nacionalidadConMasTemperatura = nacionalidadIngresada;
			mayorTemperatura = temperaturaIngresada
			banderaTemperatura = "abajo";
		}
		else
		{
			if(mayorTemperatura>temperaturaIngresada)
			{
				nacionalidadConMasTemperatura = nacionalidadIngresada;
				mayorTemperatura = temperaturaIngresada;

			}
		}
		//b) Cuantos mayores de edad( más de 17) estan solteros
		if(edadIngresada>17 && estadoCivilIngresado == "soltero")
		{
			contadorEdadMayor = contadorEdadMayor + 1;
		}
		if(sexoIngresado == "f")
		{
			if(estadoCivilIngresado =="soltero" || estadoCivilIngresado =="viudo")
			{
				contadorMujeresViudasOSolteras = contadorMujeresViudasOSolteras+1;

			}
			else
			{
				contadorMujeresCasadas = contadorMujeresCasadas +1;
				acumuladorDeEdadMujeresCasadas =acumuladorDeEdadMujeresCasadas+edadIngresada;
			}
		}
		//d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
		if(edadIngresada>60 && temperaturaIngresada>38)
		{
			contadorTerceraEdad = contadorTerceraEdad +1;
		}
		
	}//fin del while

	promedioDeEdadMujeresCasadas = acumuladorMujeresCasadas/contadorMujeresCasadas ;


	document.write("la nacionalidad de la persona con mas temperatura es " + nacionalidadConMasTemperatura +"<br>");
	document.write("la cantidad de mayores solteros es " + contadorEdadMayor + "<br>");
	document.write("la cantidad de mujeres viudas o solteras es " + contadorMujeresViudasOCasadas + "<br>");
	document.write("las personas de la tercera edad con mas de 38° son " + contadorTerceraEdad + "<br>");
	document.write("el promedio de edad de las mujeres casadas es " + promedioDeEdadMujeresCasadas + "<br>");
}

/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	let claveCorrecta;

	claveCorrecta = "utn750";
	
	claveIngresada = prompt("ingrese el número clave.");

	while(claveIngresada != claveCorrecta)
	{
		alert("contraseña incorrecta");
		claveIngresada = prompt("la clave ingresada no es correcta , vuelve a intentarlo");

	}
	alert("contraseña correcta");
	
	
}//FIN DE LA FUNCIÓN

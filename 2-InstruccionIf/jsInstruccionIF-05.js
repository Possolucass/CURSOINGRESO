function mostrar()
{
let edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if(edad <12 || edad >18)
	{
		alert('usted tiene ' + edad + ' y no es un adolecente.');
	}
}
		
	



/*Al ingresar una edad menor a 18 años y 
					un estado civil distinto a "Soltero", NO HACER NADA,
					</br>pero si no es asi, y es soltero y no es menor, 
					mostrar el siguiente mensaje: 'Es soltero y no es menor.' */


 function mostrar()

{
	let edadIngresada;
	let estadoCivil;

	edadIngresada = document.getElementById('txtIdEdad').value;
	edadIngresada = parseInt(edadIngresada);

    estadoCivil = document.getElementById('estadoCivil').value;//tomar dato igual que en el html.


    if (edadIngresada>18 && estadoCivil == "Soltero")

    
		{
    	    // estadoCivil == "Soltero"//RESPETAR HTML. dos veces no.
    		alert('Es soltero y no es menor');
    	}


	


}//FIN DE LA FUNCIÓN
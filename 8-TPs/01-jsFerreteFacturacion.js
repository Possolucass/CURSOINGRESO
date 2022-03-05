/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{ 
	let precioUno;
	let precioDos;
	let precioTres;
	let resultadoFinal;
	let alert;
    let suma;
    
    precioUno = document.getElementById('txtIdPrecioUno').value;
	precioUno = parseint('precioUno');

	precioDos = document.getElementByi('txtIdPrecioDos').value;
	precioDos = parseint('precioDos');

	precioTres = document.getElementById('txtIPrecioTres').value;
	precioTres = parseint('precioTres');

	resultadoFinal = precioUno + precioDos + precioTres ;
	
	alert(resultadoFinal);

	
}
function Promedio () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	let promedio;
	let suma;
	let alert;
	
    precioUno = document.getElementById('txtIdPrecioUno').value;
    precioUno = parseint('precioUno');

    precioDos = document.getElementById('txtIdPrecioDos').value;
	precioDos = parseint ('precioDos');

	precioTres = document.getElementById('txtIdPrecioTres').value;
	precioTres = parseint('precioTres');

	promedio = (precioUno + precioDos + precioTres) / 3 ;
     
    alert(promedio);
}
function PrecioFinal () 
{ 
	let precioUno;
	let precioDos;
	let precioTres;
	let precioFinal;
	let iva; 
	let alert;

	precioUno = document.getElementById('txtIdPrecioUno').value;
	precioUno = parseint('precioUno');

	precioDos = document.getElementById_('txtIdPrecioDos').value;
	precioDos = parseint('precioDos');
  
    precioTres = document.getElementById('precioTres').value;
    precioTres = parseint('precioTres');

    precioFinal = precioUno + precioDos + precioTres + iva ;

    alert(precioFinal);




	
}
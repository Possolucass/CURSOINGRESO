/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO" !!!!10 bis pedir porcentaje por prompt!!! */
function mostrarAumento()
{/*
	let importe;
  let resultado;
  let descuento;
  let importeConDescuento;

  importe = document.getElementById('txtIdImporte').value;
  importe = parseInt(importe);
  
  //importeConDescuento =  //importe *25/100;
	//resultado = parseInt('resultado');// separar para que se vea mejor.
  //resultado = document.getElementById('txtIdResultado');
  //resultado = parseInt(resultado);
  resultado = importe - importeConDescuento 

  //descuento = prompt//ya esta tomado.
  importe = prompt('ingrese el porcentaje de descuento');

  importeConDescuento = parseInt(importeConDescuento);
    

 // importeConDescuento = importe -  *25/100 ;
  

  alert(importeConDescuento);
  */

  
  let importe;
  let importeConDescuento;
  let porcentajeIngresado;
  let resultado;


  importe = document.getElementById('txtIdImporte').value;
  importe = parseInt(importe);
  
  porcentajeIngresado = prompt('ingrese su porcentaje');
  porcentajeIngresado = parseInt(porcentajeIngresado);
  
  importeConDescuento = importe * porcentajeIngresado /100;
  resultado = importe - porcentajeIngresado;

  document.getElementById('txtIdResultado').value = resultado;
}
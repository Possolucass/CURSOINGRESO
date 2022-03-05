
/* lucas posso e/s 9
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{  
    let sueldo;
	let aumento; 
    let resultadoFinal;
    let porcentaje;

    sueldo = document.getElementById('txtIdSueldo').value;
    sueldo = parseInt(sueldo);
   
    porcentaje = prompt('ingrese el porcentaje');
    porcentaje = parseInt(porcentaje);
    
    //porcentaje=prompt("el porcentaje es ");
    aumento = sueldo * porcentaje / 100; 
    sueldoAumentado = aumento + sueldo ;
    
    document.getElementById('txtIdResultado').value = sueldoAumentado ;
  

}

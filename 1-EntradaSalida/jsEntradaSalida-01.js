/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar()

{
	let diametroMayorAb;
	let diametroMenorDc;
	let ladoMayorBdBc;
	let ladoMenorAdAc;
	let metrosVarillasDePlasticos;
	let perimetro;
	let mensaje;
	let cometas;
	let centimetrosMetros;
	let areaPapel;
	let papelCometa;
	let centimetrosPapel;
	let cometaCola;
	
	diametroMayorAb = prompt('ingrese su diametro mayor ');
	diametroMayorAb = parseInt(diametroMayorAb);
	diametroMenorDc = prompt('ingrese su diametro menor ');
	diametroMenorDc = parseInt(diametroMenorDc);
	ladoMayorBdBc = prompt('ingrese su lado mayor ');
	ladoMayorBdBc = parseInt(ladoMayorBdBc);
	ladoMenorAdAc = prompt('ingrese su lado menor ');
	ladoMenorAdAc = parseInt(ladoMenorAdAc);

	perimetro = (ladoMayorBdBc+ladoMenorAdAc)*2;

	metrosVarillasDePlasticos = perimetro+diametroMayorAb+diametroMenorDc;

	cometas = metrosVarillasDePlasticos*10;
	
	centimetrosMetros = cometas/100;

	areaPapel = diametroMayorAb*diametroMenorDc/2;

	
	papelCometa = areaPapel*10;

	centimetrosPapel = papelCometa/100;
	cometaCola = centimetrosPapel *10 /100;

	mensaje = 'Los metros de varillas son ' + centimetrosMetros +' metros ' + ' los metros de papel son, ' + centimetrosPapel + ' metros' + 'y para la cola de cometa se necesitan' + cometaCola + 'metros';

	alert(mensaje);

    
}





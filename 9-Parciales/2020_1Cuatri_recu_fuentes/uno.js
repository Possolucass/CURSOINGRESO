/*1. 
En una pizzería el cajero debe ir cargando los pedidos de los clientes. 
Los datos que se tienen que ingresar son:
Nombre, edad, qué tipo de pizza (muzza, cebolla o rellena), cantidad de pizzas(del mismo tipo) y precio por el total del pedido.
Esto se debe cargar hasta que el cajero decida.
Al final, se deberá presentar:
a) La cantidad de personas cuya edad supere los 25 años, que hayan comprado una pizza de muzza o cebolla.
b) Cuál fue el promedio de precios por tipo de pizza.
c) El nombre de la persona que realizó la compra más barata.
d) Total de dinero que recaudó la pizzeria
*/

function mostrar()
{
	let nombreIngresada;
	let edadIngresada;
	let tipoDePizza;
	let cantidadDePizzas;
	let precioTotal;
	let respuesta;
	let contadorPizzaMuzzaCebolla;
	let contadorPizzaRellena;
	let contadorVueltas;
	let promedioPreciosPorPizza;
	let totalPersonasMayores;
	let acumuladorPrecioMuzzarella;
	let acumuladorPrecioCebolla;
	let acumuladorPrecioRellena;
	let contadorPrecioMuzzarella;
	let acumuladorPrecioCebo;
	let contadorCebo;
	let contadorMuzza;
	let promedioPreciosPorTipoMuzza;
	let banderaBarata;
	let nombreBarato;
	let precioMasBarato;
	let promedioPrecioTipoRellena;
	let promedioPrecioTipoCebolla;

	
	banderaBarata = "arriba";
	acumuladorPrecioMuzzarella=0;
	contadorMuzza =0;
	acumuladorPrecioCebo =0 ;
	acumuladorPrecioMuzza=0;
	acumuladorPrecioCebolla=0;
	acumuladorPrecioRellena=0;
	contadorVueltas = 0;
	contadorPizzaRellena = 0;
	contadorPizzaMuzzaCebolla =0;
	respuesta=0;

	while(respuesta=="si")
	{
		nombreIngresada =prompt("ingrese su nombre");
		edadIngresada=prompt("ingrese su edad");
		edadIngresada=parseInt(edadIngresada);
		while(edadIngresada<0)
			{
				edadIngresada=prompt("error re-ingrese su edad valida");
				edadIngresada=parseInt(edadIngresada);
			}
		tipoDePizza=prompt("ingrese tipo de pizza");
		while(tipoDePizza!="muzza"&&tipoDePizza!="cebolla"&&tipoDePizza!="rellena")
		{
			tipoDePizza=prompt("error re-ingrese tipo de pizza");

		}
		precioTotal=prompt("ingrese el precio");
		precioTotal=parseInt(precioTotal)
		cantidadDePizzas=prompt("ingrese cantidad de pizzas");
		cantidadDePizzas= parseInt(cantidadDePizzas);
		switch(tipoDePizza)
		{
			case"muzza":
			contadorMuzza++;
			acumuladorPrecioMuzzarella=acumuladorPrecioMuzzarella+precioTotal;
			if(edadIngresada>25)
				{
					contadorPizzaMuzza++;
					acumuladorPrecioMuzza=acumuladorPrecioMuzza+precioTotal;
				}
			break;
			case"cebolla":
			contadorCebo++;
			acumuladorPrecioCebo=acumuladorPrecioCebo+precioTotal;
				if(edadIngresada>25)
				{
					contadorPizzaCebolla++;
					acumuladorPrecioCebolla=acumuladorPrecioCebolla+precioTotal;
				}
			break;
			case"rellena":
				contadorPizzaRellena++;
				acumuladorPrecioRellena=acumuladorPrecioRellena+precioTotal;
			break;
		}
		if(banderaBarata=="arriba")
		{ 
			if(precioMasBarato<precioTotal)
			{
				nombreBarato=nombreIngresada;
				precioMasBarato=precioTotal;
				banderaBarata="abajo";

			}
			else
			{
				if(precioMasBarato<precioTotal)
				{
					precioMasBarato=precioTotal;
					nombreBarato=nombreIngresada;
				}
			}
			
		}
		contadorVueltas++;
		respuesta=prompt("desea seguir ingresando?")

	}//fin del while
	if(contadorMuzza > 0) {
		promedioPreciosPorTipoMuzza=acumuladorPrecioMuzzarella/contadorMuzza;
	}
	totalPersonasMayores = contadorPizzaMuzza + contadorPizzaCebolla;
	
	promedioPrecioTipoCebolla=acumuladorPrecioCebo/contadorCebo;
	promedioPrecioTipoRellena=acumuladorPrecioRellena/contadorPizzaRellena;
	totalRecaudado=acumuladorPrecioRellena+acumuladorPrecioCebo+acumuladorPrecioMuzzarella;


	document.write("la cantidad de personas mayores de 25 que compro pizza de muzza es " + contadorPizzaMuzza +"<br>");
	document.write("la cantidad de personas mayores de 25 que compro pizza de cebolla es " + contadorPizzaCebolla + "<br>");
	document.write("el promedio de precio del tipo de pizza de cebolla es " + promedioTipoCebolla + "<br>");
	document.write("el promedio de precio del tipo de pizza de muzza es " + promedioPreciosPorTipoMuzza + "<br>");
	document.write("el promedio de precio del tipo de pizza rellena " + promedioPrecioTipoRellena + "<br>");
	document.write("el nombre de la persona que hizo la compra mas barata es " + nombreBarato + "y el precio es " + precioMasBarato + "<br>");
	document.write("el total recaudado es " + totalRecaudado + "<br>");
}

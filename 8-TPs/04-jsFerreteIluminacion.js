	/*Para el departamento de iluminación:
	Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
	A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
	B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
	C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
	D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
	E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
	 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. */
function CalcularPrecio () 
/*{	

	let precioLampara;
	let cantidadLamparas;
	let marca;
	let precioBruto;
	let precioDescuento;
	let porcentaje;
	let precioFinal;
	let precioFinalConDescuento;
	let incremento;
	let descuento;


	precioLampara = 35;
	porcentaje = 0 ;


	cantidadLamparas = document.getElementById('txtIdCantidad').value;
	cantidadLamparas = parseInt(cantidadLamparas);
	marca = document.getElementById('Marca').value;


	precioBruto = cantidadLamparas*precioLampara;

	if(cantidadLamparas>6)
	{
		porcentaje = 50;
	}
	else
	{
		if(cantidadLamparas == 5)
		{
			if(marca == "ArgentinaLuz")
			{
				porcentaje = 40 ;

			}
			else
			{
				porcentaje = 30 ;

			}

		} 
		else
		{
			if(cantidadLamparas == 4)

			{ 
				if(marca = "ArgentinaLuz" || "FelipeLamparas")
				{
					porcentaje = 25 ;

				}
				else 
				{
					porcentaje = 20 ;

				} 
				if(cantidadLamparas == 3)
				{
					if(marca == ArgentinaLuz)
					{
						porcentaje = 15 ;

					}
				}
				else
				{
					if(marca == "FelipeLamparas")
					{
						porcentaje = 10 ;

					}
					else 
					{
						porcentaje = 5 ;

					}

				}


			}

		}		

				
	} 

	precioFinal = precioBruto + descuento/100;

	if(precioFinal>120)
	{
		incremento = precioBruto *10/100 ;
		precioFinalConDescuento = precioFinal + incremento ;
		aler("Usted pago " + precioFinalConDescuento + "de IIBB" + " siendo" + incremento + " el impuesto que pagó" );
	}
	document.getElementById('txtIdprecioDescuento').value = precioFinalConDescuento;


//alert()
}*//*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un porcentaje del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un porcentaje del 40 % y si es de otra marca el porcentaje es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un porcentaje del 25 % y si es de otra marca el porcentaje es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el porcentaje es del 15%, si es  “FelipeLamparas” se hace un porcentaje del 10 % y si es de otra marca un 5%.
E.	Si el importe final con porcentaje suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
  let cantidadCompra;
  let marcaProducto;
  let precioLampara;
  let mensaje;
  let porcentaje;
  let impuesto;
  let precioBruto;
  let precioConDescuento;
  let importeADescontar;

  precioLampara = 35;
  porcentaje = 50;

  cantidadCompra = document.getElementById("txtIdCantidad").value;
  marcaProducto = document.getElementById("Marca").value;
  cantidadCompra = parseInt(cantidadCompra);
  precioBruto = precioLampara * cantidadCompra;

  mensaje = "Usted compro " + cantidadCompra + " lamparas de " + marcaProducto + " y tuvo un porcentaje del ";
  switch(cantidadCompra)
  {

    case 3:
      switch(marcaProducto)
      {
        case "ArgentinaLuz":
          porcentaje = 15;

        break;
        case "FelipeLamparas":

          porcentaje = 10;

        break;
        default:
          porcentaje = 5;

        break;
      }
    break;

    case 4:
      switch(marcaProducto)
      {
        case "ArgentinaLuz":
        case "FelipeLamparas":
          porcentaje = 25;
        break;
        default:
          porcentaje = 20;
        break;
      }

    break;
    case 5:
      switch(marcaProducto)
      {
        case "ArgentinaLuz":
          porcentaje = 40;
        break;
        default:
          porcentaje = 30;
        break;
      }
    break;
    case 2:
    case 1:
      porcentaje = 0;
    break;

  }


 
  mensaje = mensaje + porcentaje + " %";
  importeADescontar = (precioBruto * porcentaje) / 100;
  precioConDescuento = precioBruto - importeADescontar;

  if (precioConDescuento > 120) {
    impuesto = (precioConDescuento * 10) / 100;
    precioConDescuento = precioConDescuento + impuesto;
    alert("IIBB Usted pago " + impuesto + " de impuesto");
  }
  mensaje = mensaje + " Total a pagar " + precioConDescuento;
  document.getElementById("txtIdprecioDescuento").value = mensaje;
  console.log(mensaje);
}

	
			

		
		

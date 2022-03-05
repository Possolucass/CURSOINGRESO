/*2. 
Debemos realizar un programa que lleve el registro de los 10 partidos jugados por nuestro equipo.
    Se deberá cargar en cada entrada el nombre del equipo contrario, si jugamos de local o visitante(validar , los  goles hechos por nuestro equipo y los goles hechos por el equipo contrario (validar, la cantidad de goles no puede ser negativo).
    El programa deberá evaluar la cantidad de goles de cada equipo y determinará si fue empate, victoria o derrota.
    Al final se deberá mostrar:
 el porcentaje de victorias de nuestro equipo
 cantidad de goles hechos y recibidos.
 nombre y cantidad de goles del equipo que nos hizo más goles.
 informar si nuestra primera victoria fue de visitante. 

*/

function mostrar()
{
  let contador;
  let nombreEquipo;
  let localidadIngresada;
  let golesLocales;
  let golesVisitantes;
  let cantidadGoles;
  let porcentajeVictorias;
  let resultadoPartido;
  let contadorVictorias;
  let acumuladorGolesLocales;
  let acumuladorGolesVisitante;
  let bandera;
  let nombreEquipoConMasGoles;
  let golesGanadores;


  
  bandera="arriba";
  contador =0 ;
  acumuladorGolesVisitante = 0;
  acumuladorGolesLocales = 0;
  contadorVictorias = 0;
  while(contador<10)
  {
    nombreEquipo=prompt("ingrese su equipo");
    localidadIngresada=prompt("ingrese localidad");
    while(localidadIngresada!="local"&&localidadIngresada"visitantes")
    {
      localidadIngresada=prompt("error re- ingrese localidad ,visitantes o local");
    }
    golesVisitantes=prompt("ingrese goles visitantes");
    golesVisitantes=parseInt(golesVisitantes);
    while(golesVisitantes<0)
    {
      golesVisitantes=prompt("error re-ingrese goles visitantes");
      golesVisitantes=parseInt(golesVisitantes);

    }
    golesLocales=prompt("ingrese goles locales");
    golesLocales=parseInt(golesLocales);
    while(golesLocales<0)
    {
      golesLocales=prompt("error re-ingrese cantidad valida");
      golesLocales=parseInt(golesLocales);
    }
    cantidadGoles=prompt("ingrese cantidad de goles");
    cantidadGoles=parseInt(cantidadGoles);
    while(cantidadGoles<0)
    {
      cantidadGoles=prompt("error re-ingrese cantidad valida");
      cantidadGoles=parseInt(cantidadGoles);
    }
    if(golesLocales>golesVisitantes)
    {
      resultadoPartido = "victoria";
    }
    else
    { if(golesLocales==golesVisitantes)
      {
        resultadoPartido = "empate"
      }
      else
      {
        resultadoPartido="derrota"
      }
    }
    if(resultadoPartido=="victoria")
    {

      contadorVictorias++;
    }
    if(bandera == "arriba")
    {
      nombreEquipoConMasGoles = nombreEquipo;
      golesGanadores = golesVisitantes;
      bandera="abajo";

    }
    else
    {
      if(golesVisitantes>golesGanadores)
      {
        nombreEquipoConMasGoles = nombreEquipo;
        golesGanadores = golesVisitantes;
      }
    }
    acumuladorGolesVisitante = acumuladorGolesVisitante + golesVisitantes;
    acumuladorGolesLocales= acumuladorGolesLocales + golesLocales;
    
  }//fin del while
  
  porcentajeVictorias=contadorVictorias*100/contador;



   

}

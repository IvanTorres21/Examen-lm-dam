/* Javascript del examen de Lenguaje de Marcas de 1º DAM
   autor: Iván Torres de Oses       Fecha: 12/12/2019 */

/**
 * Función para hacer que el menu se abra de manera distinta cuando es responsive
 */
function menuResponsive() { 
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
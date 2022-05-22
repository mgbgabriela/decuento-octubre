/*Ejercicio – Descuento Octubre
• Una tienda al cumplir años en Octubre ofrece
un descuento del 15% a sus clientes en todas
sus compras
• Desarrolle un algoritmo que dada una compra:
precio unitario, cantidad y el mes, indicados
por el usuario, determine si el cliente tiene
descuento o no*/



//let precioUnitario = document.getElementById("dato1");
//let cantidad = document.getElementById("dato2");
let mes = document.getElementById("dato3");
let btnEnviar = document.getElementById("enviar");

let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let rotulo3 = document.getElementById("rotulo3");

rotulo1.innerHTML = "Precio unitario";
rotulo2.innerHTML = "Cantidad";
rotulo3.innerHTML = "Mes";



//let precioTotal:number= Number(precioUnitario + cantidad);


btnEnviar.addEventListener("click", () => {
  let precioUnitario : number = Number(dato1.value);
  let cantidad : number = Number(dato2.value);
  let octubre : string = dato3.value; 
  let total: number = precioUnitario*cantidad;

octubre = octubre;
 
 if (octubre == "octubre") {
   let precioConDescuento: number = total - total*0.15;
    console.log("Usted ha obtenido un descuento del 15%, su total es $ " + precioConDescuento);
  } else {
    (console.log("Usted no ha obtenido el descuento, su total es $ " + total);
  }
});

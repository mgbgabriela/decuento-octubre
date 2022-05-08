let precioUnitario = document.getElementById("dato1");
let cantidad = document.getElementById("dato2");
let mes = document.getElementById("dato3");

let btnEnviar = document.getElementById("enviar");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let rotulo3 = document.getElementById("rotulo3");

rotulo1.innerHTML = "Precio unitario";
rotulo2.innerHTML = "Cantidad";
rotulo3.innerHTML = "Mes";

let precioUnitario: number = Number(dato1.value);
let cantidad: number = Number(dato2.value);
let mes : number = (dato3.value);
let totalConDescuento:number= 0;
let descuento: number= 0;
let precioTotal:number= precioUnitario+cantidad;

btnEnviar.addEventListener("click", () => {
  if (mes =="octubre"); {
    console.log("Usted ha obtenido un descuento del 20%")
 } else {
    console.log("Usted no ha obtenido el descuento");
  }
});

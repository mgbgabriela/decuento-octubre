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
let mes : number = Number (dato3.value);

btnEnviar.addEventListener("click", () => {
  let mes = "octubre";
  let montoTotal: number = dato1*dato2;
    if (mes === "octubre"); { montoTotal =(dato1*dato2)
    console.log("Usted ha obtenido un 15 % de descuento, su total es",montoTotal );
 
  } else {
    console.log("Usted NO ha obtenido el descuento");
  }
});

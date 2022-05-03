let btnEnvBase = document.getElementById("btnEnviarBase");
let base = document.getElementById("base");

let btnEnvAltura = document.getElementById("btnEnviarAltura");
let altura = document.getElementById("altura");

let btnCalcular: number = document.getElementById("btnCalcular");
//let btnCalcular = base * altura;

//let rotulo = document.getElementById("rotulo");

btnEnvBase.addEventListener("click", () => {
  console.log("la base ingresado es: ", base.value);
});

btnEnvAltura.addEventListener("click", () => {
  console.log("la altura ingresada es: ", altura.value);
});

btnCalcular.addEventListener("click", () => {
  console.log(" EL AREA DEL RECTANGULO ES: ", base.value * altura.value);
});

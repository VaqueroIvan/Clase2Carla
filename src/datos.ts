//Declarations of variables
let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");
let dato1 = <HTMLInputElement>document.getElementById("dato1");
let dato2 = <HTMLInputElement>document.getElementById("dato2");
let valor1: number = 0;
let valor2: number = 0;

btnEnviar.addEventListener("click", () => {
  //It runs when you press submit button.
  //rotulo.innerHTML = "introduzca su nombre";
  valor1 = number(dato1.value);
  valor2 = number(dato2.value);
  console.log(valor1 + valor2);
});

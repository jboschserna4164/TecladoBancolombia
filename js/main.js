
/*
getElementByid("teclado")  -->  devuelve la referencia del elemento html que tenga el id 'teclado'
querySelectorAll(".tecla") --> almacena un arreglo de todas las referencias de elementos html que tengan la clase '.tecla' especificada
addEventListener('click', (event) => { actualizar_datos(); }) --> cuando se presenta un evento de click, se ejecuta la funcion actualizar_datos()
event.target.temp = almacena el valor al que se la click
sort: ordena los elementos de un arreglo
*/

let numeros = [0,1,2,3,4,5,6,7,8,9];
let teclas;
let teclado;
let txt_clave;
let btn_borrar;
let btn_ok;

window.onload = function(){
  teclado = document.getElementById("teclado");
  teclas = document.querySelectorAll(".tecla");
  txt_clave = document.getElementById("clave");
  btn_borrar = document.getElementById("borrar");
  btn_ok = document.getElementById("btn_ok");
  asignarBtns();
  actualizar_datos();
  teclado.addEventListener('mouseover', (event) =>  {
    cambiarValor("*",true); 
  });
  teclado.addEventListener('mouseout', (event) =>  {
    actualizar_datos();
  });
  btn_borrar.addEventListener("click", function(event){
    txt_clave.value = "";
  });
  asignarEventoTeclas();
}

function asignarBtns() {
  btn_borrar.value = "Borrar";
  btn_ok.value = "Ok";
}
function asignarEventoTeclas(){
  for(i in teclas)
  {
    teclas[i].addEventListener("click",function(event){
      txt_clave.value = txt_clave.value + event.target.temp;       
    });
  }
}

function aleatorios(datos){
  return datos.sort((a, b) => 0.5 - Math.random());
}

function actualizar_datos(){
  let temp = aleatorios(numeros);
  cambiarValor(temp,false);
}

function cambiarValor(datos,bandera)
{
  let cont = 0;
  for(i in teclas)
    {
      if(!bandera)
      {
        teclas[i].temp = datos[cont];
        teclas[i].value = datos[cont++];
      }
      else{
        teclas[i].value = datos;
      }
      
    }
}

function borrar(){
  txt_clave.value = "hola";
}
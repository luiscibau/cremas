document.getElementById("icon_menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

    document.querySelector(".menu").classList.toggle("mostrar_menu");
}

function suma(a, b) {
    return a + b;
  }
  
let numero = 47;
if (numero > 10) {
    console.log("el $$$$$ numero es mayor que 10");
} else {
    console.log("el numero es menor o igual que 10 ");
}

let dia= "Feriado";

switch (dia) {
    case "lunes":
    console.log("hoy es lunes");
    break;
    case "Martes":
    console.log("hoy es Martes");
    break;
    case "Miercoles":
    console.log("hoy es Miercoles");
    break;
    case "Jueves":
    console.log("hoy es Jueves");
    break;
    case "Viernes":
    console.log("hoy es Viernes");
    break;
    case "Sabado":
    console.log("hoy es Sabado");
    break;
    case "Domingo":
    console.log("hoy es Domingo");
    break;
    default:
    console.log("Ese Dia no Existe");
    break;

}

let persona = {
    nombre:"Juan",
    edad: 35,
    profesion: "Medico, Especialista",
    saludar: function() {
        console.log("Hola, agregando la funcion al saludo, mi nombre es " 
        + this.nombre + " y mi profesion es " 
        + this.profesion + " con una edad de " 
        + this.edad);
      }
    };
    
persona.saludar();


console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.profesion);

persona.nacionalidad = "Argentina";

console.log(persona);



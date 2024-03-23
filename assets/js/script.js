import { Propietario } from "../src/propietario.mjs";
import { Animal } from "../src/animal.mjs";
import { Mascota } from "../src/mascotas.mjs";

let form = document.querySelector('form');
form.addEventListener('submit', function(e)
{
    e.preventDefault();

    //Capturar informacion desde el form
    let nombre = document.querySelector('#propietario').value;
    let direccion = document.querySelector('#direccion').value;
    let telefono = document.querySelector('#telefono').value;
    let tipo = document.querySelector('#tipo').value;
    let mascota = document.querySelector('#nombreMascota').value;
    let enfermedad = document.querySelector('#enfermedad').value;

    //Datos Propietario
    let dueno = new Propietario(nombre, direccion, telefono);

    //Acceder a Funcion datosPropietarios
    let datos = dueno.datosPropietario(nombre, direccion, telefono);
    //console.log(datos);

    //Crear Tipo
    let tipoMascota = new Animal(nombre, direccion, telefono, tipo);
    

    //Crear mascota
    let nombreMascota = new Mascota();
    nombreMascota.enfermedad = enfermedad;
    nombreMascota.nombreAnimal = mascota;
    
    //Creamos el Mensaje
    let mensaje = `
        <div class="alert alert-success" role="alert">
            <h4>El dueño del animal es ${datos[0]}, el domicilio es ${datos[1]} y su telefono es ${datos[2]}</h4>
            <h4>El tipo de animal es ${tipoMascota.tipo}, mientras que el nombre de la mascota es ${nombreMascota.nombreAnimal} y la enfermedad es ${nombreMascota.enfermedad}</h4>
        </div>
    `;

    //enviamos el mensaje a la ventana
    document.querySelector('#resultado ul').innerHTML = mensaje;

})
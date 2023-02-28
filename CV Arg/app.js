//Varibles 
const boton = document.querySelector('#boton');
const foto = document.getElementById("foto");
const telefono = document.querySelector('#telefono');
const correo = document.querySelector('#correo');
const sitioWeb = document.querySelector('#sitioWeb');
const linked = document.querySelector('#linked');
const ubicacion = document.querySelector('#ubicacion');
const nombre = document.getElementById("nombre");



//Funciones
const generarUsuario = async() => {
    try {
        const url = 'https://randomuser.me/api/';
        const respuesta = await fetch(url);
        const {results} = await respuesta.json();
        const datos = results[0];

        console.log(datos);
        
        foto.src = datos.picture.large;
        nombre.textContent = datos.name.first;
        correo.textContent = datos.email;
        telefono.textContent = datos.phone;
        ubicacion.textContent = datos.location.city;

    } catch (error) {
        console.log(error);
    }
}

boton.addEventListener('click', generarUsuario);
document.addEventListener('DOMContentLoaded', generarUsuario);
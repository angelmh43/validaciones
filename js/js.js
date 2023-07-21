// validar nombre  1
    //validar que sea un string
    //verificar que no hay numeros ni caracteres especiales en el spring
/**
 * funcion para validad un texto
 * @param {string} nombre 
 * @return {boolean} boolean true or false
 * 
 */
function validarNombre(nombre){
    const name = nombre.trim();
    const pattern = /^[a-zA-ZáéíóúüñÁÉÍÓÚÑ]+(?:[\s][a-zA-ZáéíóúüñÁÉÍÓÚÑ]+)*$/;
    console.log("sin limpiar:", nombre, " y limpio:", name)
// if(!pattern.test(input.value)){
    if (typeof name !== 'string' || name === ""||!pattern.test(name)){
            console.log("entro en el if")
            return false
    } else {
            return true
    }
}
console.log(validarNombre("                    "))
console.log(validarNombre(" MAria Jose  "))
console.log(validarNombre(" MAr ia Jose65656656565656  "))




// 2<!--  validar email -->
function validaremail(email){
    const correo = email.trim();
    const pattern = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
    console.log("sin limpiar:", email, " y limpio:",correo)
// if(!pattern.test(input.value)){
    if (typeof correo !== 'string' || correo === ""||!pattern.test(correo)){
            console.log("entro en el if")
            return false
    } else {
            return true
    }
}
console.log(validaremail("msrle87hotmail.com"))
console.log(validaremail("marel65hotmail.com"))
console.log(validaremail("marel@hotmail"))

//validar fecha
function mirarfecha() {
    document.querySelector("[type=date]").value;
}
























// validar email   2
//localizar que el @ este en medio de el usuario y el servidor 
//que termine en punto y la extencion del correo(buscar lista de la extencion)
//¿aceptar o denegar cualquier direccion de correo?


// validar url     3



// validar Fecha  4
//comprobar si es un string
//comprobar si el formato del string son numeros 



// validar Tiempo  5



// validar fecha y hora de nacimiento  6



// validar mes   7



// validar Semana  8
     


// validar numero  9



// validar Intervalo 10



// validar telefono  11
//verificar que ha introducido un numero
//limitar la entrada de numero a 9



// validar termino de busqueda  12



// validar color Favorito  13
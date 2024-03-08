let usuarioBaseDatos="nuevo"
let contraseñaBaseDatos="12345os"
let correoBaseDatos="nuevo@gmail.com"

let botonFormnulario=document.getElementById("botonIngreso")
let cajaFormnularioNombre=document.getElementById("nombre")
let cajaFormnularioEmail=document.getElementById("email")
let cajaFormnularioTelefono=document.getElementById("telefono")
let cajaFormularioAsunto=document.getElementById("asunto")

botonFormnulario.addEventListener("click", function (evento) {

    evento.preventDefault()


    let nombreUsuario=cajaFormnularioNombre.value
    let correoUsuario=cajaFormnularioEmail.value
    let telefonoUsuario=cajaFormnularioTelefono.value

 
    if(nombreUsuario=="" && correoUsuario=="" && telefonoUsuario==""){
      Swal.fire({
        icon: "error",
        title: "Oops...  "+nombreUsuario+"tienes un problema",
        text: "Verifica tus credenciales  ",
      });
     

    }else{

      Swal.fire({
        icon: "Bienvenido",
        title: "ingresa " +nombreUsuario,
        text: "Adelante ",
      });
       
    }
    
})
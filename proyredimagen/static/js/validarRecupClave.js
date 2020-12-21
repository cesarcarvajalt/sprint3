function validar_RecupClave()
{
    var correoRecupClave = document.getElementById("correoRecupClave").value;
    /*var usuarioRecupClave = document.getElementById("usuarioRecupClave").value;
    var clave = document.getElementById("clave").value;
    var confirClave = document.getElementById("confirClave").value;*/

    if (correoRecupClave == "")
    {
        alert("Debe digitar el correo.");
        document.getElementById("correoRecupClave").focus();
        return false;
    } 

       
    if (correoRecupClave != correo) 
    {
        alert("El correo electronico no esta registrado.");
        document.getElementById("correoRecupClave").focus();
        return false;
    }

    alert("Se ha enviado un correo para restablecer la contraseña.")
    return true;
    
    
    

}

function mostrarPassword() 
{
    document.getElementById("clave").type = "text";
}

function ocultarPassword()
{
    document.getElementById("clave").type = "password";
}



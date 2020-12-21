function validar_Sesion()
{
    /*var correo = document.getElementById("correo").value;*/
    var usuarioSesion = document.getElementById("usuarioSesion").value;
    var claveSesion = document.getElementById("claveSesion").value;

    

    

    if ((usuarioSesion == "") || (usuarioSesion.length < 8))
    {
        alert("El usuario debe tener mínimo 8 caracteres.");
        document.getElementById("usuarioSesion").focus();
        return false;
    }
        
    if ((claveSesion == "") || (claveSesion.length < 8))
    {
        alert("La clave debe tener mínimo 8 caracteres.");
        document.getElementById("claveSesion").focus();
        return false;
    }

    if ((usuarioSesion != usuario) || (claveSesion != clave))
    {
        alert("Usuario o contraseña errónea") 
    }
    
    alert("Inicio de sesión exitoso");
    return true;
    
    
    

}

function mostrarPassword() 
{
    document.getElementById("claveSesion").type = "text";
}

function ocultarPassword()
{
    document.getElementById("claveSesion").type = "password";
}


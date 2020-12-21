function validar()
{
    var correo = document.getElementById("correo").value;
    var usuario = document.getElementById("usuario").value;
    var clave = document.getElementById("clave").value;
    var confirClave = document.getElementById("confirClave").value;
    

    if (correo == "")
    {
        alert("Debe digitar el correo.");
        document.getElementById("correo").focus();
        return false;
    } 

    if ((usuario == "") || (usuario.length < 7))
    {
        alert("El usuario debe tener mínimo 7 caracteres.");
        document.getElementById("usuario").focus();
        return false;
    }
        
    if ((clave == "") || (clave.length < 7))
    {
        alert("La clave debe tener mínimo 7 caracteres.");
        document.getElementById("clave").focus();
        return false;
    }

    if ((confirClave == "") || (confirClave.length < 8))
    {
        alert("La confirmacion de clave debe tener mínimo 8 caracteres.");
        document.getElementById("confirClave").focus();
        return false;
    }
    
    if (confirClave != clave) 
    {
        alert("La confirmacion de clave no coincide.");
        document.getElementById("confirClave").focus();
        return false;
    }
    
    
    

}


function mostrarPassword() 
{
    document.getElementById("clave").type = "text";
}

function ocultarPassword()
{
    document.getElementById("clave").type = "password";
}



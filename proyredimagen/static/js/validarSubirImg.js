function validar_Subir()
{
    var nombreImagen = document.getElementById("nombreImagen").value;
    

    if (nombreImagen == "")
    {
        alert("Debe ingresar el nombre de la imagen");
        document.getElementById("nombreImagen").focus();
        return false;
    } 

    

    alert("Imagen cargada exitosamente")
    return true;
    

}




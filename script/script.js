function encriptar()
{
    let llaveEncriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    let mensajeOriginal = document.querySelector(".mensaje");

    let textoEncriptado = mensajeOriginal.value;

    for(let indice = 0; indice < llaveEncriptacion.length; indice++)
        if(textoEncriptado.includes(llaveEncriptacion[indice][0]))
            textoEncriptado = textoEncriptado.replaceAll(llaveEncriptacion[indice][0], llaveEncriptacion[indice][1]);

    document.querySelector(".mensaje").value = "";
    document.querySelector(".resultado").value = textoEncriptado;

    mostrarAnuncio("MENSAJE ENCRIPTADO");
}

function desencriptar()
{
    let llaveEncriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    let mensajeOriginal = document.querySelector(".mensaje");

    let textoDesencriptado = mensajeOriginal.value;

    for(let indice = 0; indice < llaveEncriptacion.length; indice++)
        if(textoDesencriptado.includes(llaveEncriptacion[indice][1]))
            textoDesencriptado = textoDesencriptado.replaceAll(llaveEncriptacion[indice][1], llaveEncriptacion[indice][0]);

    document.querySelector(".mensaje").value = "";
    document.querySelector(".resultado").value = textoDesencriptado;

    mostrarAnuncio("MENSAJE DESENCRIPTADO");
}

function copiarMensaje()
{
    let texto = document.querySelector(".resultado");

    texto.select();
    texto.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(texto.value);

    texto.value = "";

    mostrarAnuncio("TEXTO COPIADO");
}

function mostrarAnuncio(anuncioMostrar)
{
    let toast = document.getElementById("toast");
    let anuncio = document.querySelector(".anuncio");

    anuncio.innerHTML = anuncioMostrar;
    toast.className = "show";

    setTimeout(function(){
        toast.className = toast.className.replace("show", "");
    }, 3000);

}
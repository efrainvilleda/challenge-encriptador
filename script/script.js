function encriptar()
{
    let mensajeOriginal = document.querySelector(".mensaje").value;

    let textoEncriptado = "";

    for(let indice = 0; indice < mensajeOriginal.length; indice++)
    {
        switch(mensajeOriginal[indice])
        {
            case "e":
                textoEncriptado += "enter";
                break;
            case "i":
                textoEncriptado += "imes";
                break;
            case "a":
                textoEncriptado += "ai";
                break;
            case "o":
                textoEncriptado += "ober";
                break;
            case "u":
                textoEncriptado += "ufat";
                break;
            default:
                textoEncriptado += mensajeOriginal[indice];
        }
    }

    document.querySelector(".mensaje").value = "";
    document.querySelector(".resultado").value = textoEncriptado;
}

function desencriptar()
{
    let mensajeOriginal = document.querySelector(".mensaje").value;

    let textoDesencriptado = "";

    let indice = 0;

    while(indice < mensajeOriginal.length)
    {
        let aux;
        let codifico = false;

        if(mensajeOriginal[indice] == "e")
        {
            if((indice + 5) <= mensajeOriginal.length)
            {
                aux = mensajeOriginal[indice] + mensajeOriginal[indice + 1]
                    + mensajeOriginal[indice + 2] + mensajeOriginal[indice + 3]
                    + mensajeOriginal[indice + 4];

                if(aux == "enter")
                {
                    textoDesencriptado += "e";
                    codifico = true;
                    indice += 5;
                }
            }
        }
        else if(mensajeOriginal[indice] == "i")
        {
            if((indice + 4) <= mensajeOriginal.length)
            {
                aux = mensajeOriginal[indice] + mensajeOriginal[indice + 1]
                    + mensajeOriginal[indice + 2] + mensajeOriginal[indice + 3];

                if(aux == "imes")
                {
                    textoDesencriptado += "i";
                    codifico = true;
                    indice += 4;
                }
            }
        }
        else if(mensajeOriginal[indice] == "a")
        {
            if((indice + 2) <= mensajeOriginal.length)
            {
                aux = mensajeOriginal[indice] + mensajeOriginal[indice + 1]

                if(aux == "ai")
                {
                    textoDesencriptado += "a";
                    codifico = true
                    indice += 2;
                }
            }
        }
        else if(mensajeOriginal[indice] == "o")
        {
            if((indice + 4) <= mensajeOriginal.length)
            {
                aux = mensajeOriginal[indice] + mensajeOriginal[indice + 1]
                    + mensajeOriginal[indice + 2] + mensajeOriginal[indice + 3];

                if(aux == "ober")
                {
                    textoDesencriptado += "o";
                    codifico = true;
                    indice += 4;
                }
            }
        }
        else if(mensajeOriginal[indice] == "u")
        {
            if((indice + 4) <= mensajeOriginal.length)
            {
                aux = mensajeOriginal[indice] + mensajeOriginal[indice + 1]
                    + mensajeOriginal[indice + 2] + mensajeOriginal[indice + 3];

                if(aux == "ufat")
                {
                    textoDesencriptado += "u";
                    codifico = true;
                    indice += 4;
                }
            }
        }
        
        if(!codifico)
        {
            textoDesencriptado += mensajeOriginal[indice];
            indice++;
        }
    }

    document.querySelector(".mensaje").value = "";
    document.querySelector(".resultado").value = textoDesencriptado;
}

function copiarMensaje()
{
    
}
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos []; // almacenar nombres

// agregar nombres amigos funcion
function agragarAmigo(){
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.ariaValueMax.trim();
   
    //valida que no este en blanco nommbre
    if (nombreAmigo === "") {
        alert ("ingresa un nombre");
        return;
    }

    //Validar que nombre no este duplicado
    if (amigos.includes(nombreAmigo)){
        alert (`El nombre ${nombreAmigo} ya esta en lista`);
        return;
    }

    // agregar nombre al array amigos
    amigos.push(nombreAmigo);

    //limpiar campo de entrada
    inputAmigo.nodeValue = "";

    //Actualizar lista en .HTML

}





// agrega a la lista





// sorteo


//entrega nombre
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; // almacenar nombres
let listaSorteados = []; //lista de amigos sorteados
let sorteoAleatorio = 0; //amigo sorteado

function registrarAmigo() { //agregar amigos a la lista
    let ingresaAmigos = document.querySelector('input').value;
    if (ingresaAmigos =='') {
        alert('Por favor ingresa un nombre')
        } else {
            
        if (amigos.includes(ingresaAmigos)) {  //Validar que nombre no este duplicado
        alert (`El nombre ${ingresaAmigos} ya esta en lista`);
        return;
    }
        amigos.push(ingresaAmigos);
   //
}
    limpiarCaja('amigo');
    mostrarAmigos();
    return;   
}



function actualizarLista(){
    const listaAmigos = document.getElementById("listaAmigos");

    //limpiar contenido actual de la lista
    listaAmigos.innerHTML = ""; //borra el contenido previo dento de la lista

    //recorrer array con for
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }

}



//Funcion seleccionar amigo aleatorio desde lista
function sortearAmigo() {
    if (amigos.length === 0) {
        alert ("No hay nombres en la lista, ingresa a tus amigos");
        return;
    }
    // Generar indice aleatoreao para sortear amigo
    const indiceAleatoreo = Math.floor(Math.random() * amigos.length); //Genera numero aleatorioa de 0 a l numero de amigos en array

    const amigoSorteado = amigos[indiceAleatoreo];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Amigo sorteado es:" <strong>${amigoSorteado}<strong> `;
}


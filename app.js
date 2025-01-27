// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; // almacenar nombres
let listaSorteados = []; //lista de amigos sorteados
let sorteoAleatorio = 0; //amigo sorteado

function registrarAmigo() { //agregar amigos a la lista
    let ingresaAmigos = document.querySelector('input').value;
    if (ingresaAmigos =="") {
        alert("¡Campo vacio!, por favor ingresa un nombre")
        } else {   
        if (amigos.includes(ingresaAmigos)) {  //Validar que nombre no este duplicado
        alert (`El nombre " ${ingresaAmigos} " ya esta en lista`);
        return;
    }
        amigos.push(ingresaAmigos);
}
    limpiarCaja("amigo");
    mostrarAmigos();
    return;   
}

function mostrarAmigos(){ //mostrar lista de amigos en pantalla
    
    let listadoAmigos = document.getElementById("listaAmigos");
    listadoAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listadoAmigos.appendChild(li);
    }
    return;
}
//sortear amigo secreto con funcion de numero aleatorio
function sortearAmigo() { 
    let sorteo = document.getElementById("resultado");
    sorteo.innerHTML = "";
    if (amigos == "") {
        alert ("Debes ingresar personas para el sorteo de Amigo Secreto");
    } else {
            sorteoAleatorio = amigos[numeroAleatorio()];
        
            if (amigos.length == listaSorteados.length){
            alert ("Ya se sortearon todos los amigos, por favor reinicia el sorteo");
            reiniciarSorteo();
            } else { 
            while(listaSorteados.includes(sorteoAleatorio)){
                sorteoAleatorio = amigos[numeroAleatorio()];
            }
            let amigoSorteado = (`El amigo secreto sorteado es: "${sorteoAleatorio}"`);
            let li = document.createElement('li');
            li.textContent = amigoSorteado
            sorteo.appendChild(li);
            listaSorteados.push(sorteoAleatorio);
            }
             let listadoAmigos = document.getElementById("listaAmigos"); // Limpiar la lista de amigos
             listadoAmigos.innerHTML = "";
    } 
     return;
}
// generer numero aleatorio para sortear amigo secreto
function numeroAleatorio() { // Generar numero aleatorio
    let aleatorio = Math.floor(Math.random() * amigos.length);
    return aleatorio;
}
function limpiarCaja(elemento){ // limpiar caja de texto
    document.getElementById(elemento).value = ""; 
    return;
}
function reiniciarSorteo() {
    amigos = [];            // Limpiar la lista de amigos
    listaSorteados = [];    // Limpiar la lista de sorteados
    let listadoAmigos = document.getElementById("listaAmigos"); // Limpiar la lista de amigos
    listadoAmigos.innerHTML = "";

    let sorteoResultado = document.getElementById("resultado"); 
    sorteoResultado.innerHTML = ""; // Limpiar la interfaz para que quede vacía
    return; // Reiniciar el sorteo
}

let amigos = [];

function agregarAmigo() {
    const inputNombre = document.getElementById('amigo');
    const nombreIngresado = inputNombre.value;
    
    if (nombreIngresado === '' || nombreIngresado.trim() === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    
    amigos.push(nombreIngresado.trim());
    inputNombre.value = '';
    
    mostrarAmigosEnLista();
    
    console.log('Amigo agregado:', nombreIngresado.trim());
    console.log('Lista actual de amigos:', amigos);
}

function mostrarAmigosEnLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++) {
        const nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = amigos[i];
        lista.appendChild(nuevoElemento);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Por favor, añade al menos un amigo antes de sortear.');
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    
    const elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
    
    console.log('Índice aleatorio generado:', indiceAleatorio);
    console.log('Amigo sorteado:', amigoSorteado);
}

let amigo = [];


function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value;

    if(!nombreAmigo) {
        alert('debes ingresar un nombre');
        return;
    }
    amigo.push(nombreAmigo);
    inputAmigo.value = '';
    inputAmigo.focus();
    renderizarAmigos();

}

    //limpiar lista de amigos
function renderizarAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

   //loop sobre array amigo para elegir sin repetir
    for(let i = 0; i < amigo.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigo.length === 0) {
        alert('no hay amigos para hacer sorteo');
        return;
    }
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];  
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

    let limpiarLista = document.getElementById('listaAmigos');
    limpiarLista.innerHTML = '';
}
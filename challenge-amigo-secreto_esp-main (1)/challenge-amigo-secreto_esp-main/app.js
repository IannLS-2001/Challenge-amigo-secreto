let listaAmigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    listaAmigos.push(nombre);

    let listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = "";

    for (let amigo of listaAmigos) {
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigo;
        listaElement.appendChild(nuevoElemento);
    }

    input.value = "";
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceAleatorio];

    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `Amigo secreto: <strong>${amigoSorteado}</strong>`;
}

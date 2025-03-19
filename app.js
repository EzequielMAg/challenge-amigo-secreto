//* El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombres = [];

function agregarAmigo() {
  const inputNombre = document.getElementById('amigo');
  const nombre = inputNombre.value.trim();

  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  nombres.push(nombre);

  mostrarNombres();
  inputNombre.value = "";
  inputNombre.focus();
}

function mostrarNombres() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = "";

  nombres.forEach((nombre) => {
    const li = document.createElement('li');
    li.textContent = nombre;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (nombres.length === 0) {
    alert("No hay nombres en la lista para sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * nombres.length);
  const amigoSecreto = nombres[indiceAleatorio];

  document.getElementById('resultado').textContent = `🎉 El amigo secreto es: ${amigoSecreto}! 🎉`;
}
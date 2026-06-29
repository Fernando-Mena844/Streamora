let catalogo = [
    { nombre: "Inception", protagonista: "Leonardo DiCaprio", anioLanzamiento: "2010", categoria: "Ciencia Ficción", genero: "Thriller"},
    { nombre: "Sueño de Fuga", protagonista: "Tim Robbins", anioLanzamiento: "1994", categoria: "Drama", genero: "Drama" },
    { nombre: "Star Wars: Episodio IV - Una Nueva Esperanza", protagonista: "Mark Hamill", anioLanzamiento: "1977", categoria: "Ciencia Ficción", genero: "Aventura" },
    { nombre: "One Piece", protagonista: "Monkey D. Luffy", anioLanzamiento: "1999", categoria: "Animación", genero: "Aventura" },
    { nombre: "El Padrino", protagonista: "Marlon Brando", anioLanzamiento: "1972", categoria: "Crimen", genero: "Drama" },   
];

const tablaCatalogo = document.getElementById("tablaCatalogo");
const nombre = document.getElementById("txtNombre");
const protagonista = document.getElementById("txtProtagonista");
const anoLanzamiento = document.getElementById("txtAnoLanzamiento");
const categoria = document.getElementById("txtCategoria");
const genero = document.getElementById("txtGenero");
const agregarBtn = document.getElementById("btnAgregar");

function mostrarCatalogo() {

    tablaCatalogo.innerHTML = ""; //Se vacía la tabla antes de mostrar los datos para evitar duplicados

    catalogo.forEach((audiovisual)=> {
        tablaCatalogo.innerHTML += `
        <tr>
            <td>${audiovisual.nombre}</td>
            <td>${audiovisual.protagonista}</td>
            <td>${audiovisual.anioLanzamiento}</td>
            <td>${audiovisual.categoria}</td>
            <td>${audiovisual.genero}</td>
        </tr>`
    });
};

function agregarAudiovisual() {
    const nuevoAudiovisual = {
        nombre: nombre.value,
        protagonista: protagonista.value,
        anioLanzamiento: anoLanzamiento.value,
        categoria: categoria.value,
        genero: genero.value
    };

    catalogo.push(nuevoAudiovisual);
    mostrarCatalogo();
    limpiarFormulario();
}

btnAgregar.addEventListener("click", agregarAudiovisual);

mostrarCatalogo();

function limpiarFormulario() {
    nombre.value = "";
    protagonista.value = "";
    anoLanzamiento.value = "";
    categoria.value = "";
    genero.value = "";
}
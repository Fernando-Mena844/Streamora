let catalogo = [
    { nombre: "Inception", director: "Christopher Nolan", anioLanzamiento: "2010", categoria: "Ciencia Ficción", genero: "Thriller"},
    { nombre: "Sueño de Fuga", director: "Frank Darabont", anioLanzamiento: "1994", categoria: "Drama", genero: "Drama" },
    { nombre: "Star Wars: Episodio IV - Una Nueva Esperanza", director: "George Lucas", anioLanzamiento: "1977", categoria: "Ciencia Ficción", genero: "Aventura" },
    { nombre: "One Piece", director: "Yasunori Koyama", anioLanzamiento: "1999", categoria: "Animación", genero: "Aventura" },
    { nombre: "El Padrino", director: "Francis Ford Coppola", anioLanzamiento: "1972", categoria: "Crimen", genero: "Drama" },   
];

const tablaCatalogo = document.getElementById("tablaCatalogo");
const nombre = document.getElementById("txtNombre");
const director = document.getElementById("txtDirector");
const anoLanzamiento = document.getElementById("txtAnoLanzamiento");
const categoria = document.getElementById("txtCategoria");
const genero = document.getElementById("txtGenero");
const agregarBtn = document.getElementById("btnAgregar");

function mostrarCatalogo() {

    tablaCatalogo.innerHTML = ""; //Recordando, primero se vacía la tabla para evitar datos repetidos

    catalogo.forEach((audiovisual)=> {
        tablaCatalogo.innerHTML += `
        <tr>
            <td>${audiovisual.nombre}</td>
            <td>${audiovisual.director}</td>
            <td>${audiovisual.anioLanzamiento}</td>
            <td>${audiovisual.categoria}</td>
            <td>${audiovisual.genero}</td>
        </tr>`
    });
};

function agregarAudiovisual() {
    const nuevoAudiovisual = {
        nombre: nombre.value,
        director: director.value,
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
    director.value = "";
    anoLanzamiento.value = "";
    categoria.value = "";
    genero.value = "";
}
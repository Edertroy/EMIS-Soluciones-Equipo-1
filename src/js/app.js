// ==========================================
// CATÁLOGO DE PRODUCTOS - EMIS SOLUCIONES
// ==========================================

const productos = [
    {
        id: 1,
        nombre: "Tubería de Polietileno",
        categoria: "industrial",
        categoriaNombre: "Productos industriales",
        descripcion: "Tubería para diferentes aplicaciones y necesidades.",
        detalle: "Producto disponible dentro del portafolio comercial de EMIS Soluciones S.A.S."
    },

    {
        id: 2,
        nombre: "Tubería PVC",
        categoria: "construccion",
        categoriaNombre: "Construcción",
        descripcion: "Solución para instalaciones y proyectos de construcción.",
        detalle: "Producto orientado a proyectos relacionados con construcción e instalaciones."
    },

    {
        id: 3,
        nombre: "Abrazaderas",
        categoria: "industrial",
        categoriaNombre: "Productos industriales",
        descripcion: "Elementos utilizados para diferentes aplicaciones industriales.",
        detalle: "EMIS comercializa abrazaderas dentro de su línea de productos industriales."
    },

    {
        id: 4,
        nombre: "Acoples Hidráulicos",
        categoria: "industrial",
        categoriaNombre: "Productos industriales",
        descripcion: "Componentes para conexiones hidráulicas.",
        detalle: "Producto perteneciente a la línea de productos industriales de EMIS."
    },

    {
        id: 5,
        nombre: "Elementos de Limpieza",
        categoria: "limpieza",
        categoriaNombre: "Limpieza",
        descripcion: "Productos para limpieza y mantenimiento.",
        detalle: "La empresa cuenta con una amplia variedad de productos relacionados con limpieza."
    },

    {
        id: 6,
        nombre: "Guantes",
        categoria: "limpieza",
        categoriaNombre: "Limpieza",
        descripcion: "Elementos destinados a labores de limpieza y protección.",
        detalle: "Producto incluido dentro de la oferta de elementos de limpieza."
    },

    {
        id: 7,
        nombre: "Productos para Cafetería",
        categoria: "cafeteria",
        categoriaNombre: "Cafetería",
        descripcion: "Suministros para cafetería y consumo empresarial.",
        detalle: "EMIS ofrece productos y suministros relacionados con cafetería."
    },

    {
        id: 8,
        nombre: "Suministros de Oficina",
        categoria: "papeleria",
        categoriaNombre: "Papelería y oficina",
        descripcion: "Artículos para papelería y actividades de oficina.",
        detalle: "Productos destinados a cubrir necesidades de papelería y suministros de oficina."
    },

    {
        id: 9,
        nombre: "Bolsas",
        categoria: "limpieza",
        categoriaNombre: "Limpieza",
        descripcion: "Bolsas para diferentes necesidades de limpieza y manejo de residuos.",
        detalle: "Las bolsas forman parte de los suministros generales comercializados por EMIS."
    },

    {
        id: 10,
        nombre: "Detergentes",
        categoria: "limpieza",
        categoriaNombre: "Limpieza",
        descripcion: "Productos destinados a labores de limpieza.",
        detalle: "Los detergentes hacen parte de la línea de productos de limpieza de EMIS."
    }
];


// ==========================================
// ELEMENTOS DEL HTML
// ==========================================

const contenedorProductos = document.getElementById("productos");

const buscador = document.getElementById("buscador");

const filtroCategoria = document.getElementById("filtroCategoria");

const sinResultados = document.getElementById("sinResultados");

const detalleProducto = document.getElementById("detalleProducto");

const contenidoDetalle = document.getElementById("contenidoDetalle");

const cerrarDetalle = document.getElementById("cerrarDetalle");


// ==========================================
// MOSTRAR PRODUCTOS
// ==========================================

function mostrarProductos(listaProductos) {

    contenedorProductos.innerHTML = "";

    if (listaProductos.length === 0) {

        sinResultados.style.display = "block";

        return;
    }

    sinResultados.style.display = "none";


    listaProductos.forEach(producto => {

        const tarjeta = document.createElement("article");

        tarjeta.classList.add("producto-card");

        tarjeta.innerHTML = `

            <div class="producto-imagen">
                <span>${producto.nombre}</span>
            </div>

            <div class="producto-contenido">

                <span class="producto-categoria">
                    ${producto.categoriaNombre}
                </span>

                <h3>
                    ${producto.nombre}
                </h3>

                <p class="producto-descripcion">
                    ${producto.descripcion}
                </p>

                <button
                    class="btn btn-detalle"
                    onclick="mostrarDetalle(${producto.id})"
                >
                    Ver detalle
                </button>

            </div>
        `;

        contenedorProductos.appendChild(tarjeta);
    });
}


// ==========================================
// BUSCAR Y FILTRAR
// ==========================================

function actualizarCatalogo() {

    const textoBusqueda = buscador.value
        .toLowerCase()
        .trim();

    const categoriaSeleccionada = filtroCategoria.value;


    const productosFiltrados = productos.filter(producto => {

        const coincideBusqueda =
            producto.nombre
                .toLowerCase()
                .includes(textoBusqueda) ||

            producto.descripcion
                .toLowerCase()
                .includes(textoBusqueda);


        const coincideCategoria =
            categoriaSeleccionada === "todos" ||

            producto.categoria === categoriaSeleccionada;


        return coincideBusqueda && coincideCategoria;
    });


    mostrarProductos(productosFiltrados);
}


// ==========================================
// MOSTRAR DETALLE
// ==========================================

function mostrarDetalle(id) {

    const producto = productos.find(
        producto => producto.id === id
    );


    if (!producto) {
        return;
    }


    contenidoDetalle.innerHTML = `

        <div class="detalle-contenido">

            <div class="detalle-imagen">

                <span>
                    ${producto.nombre}
                </span>

            </div>


            <div class="detalle-informacion">

                <span class="producto-categoria">
                    ${producto.categoriaNombre}
                </span>

                <h2>
                    ${producto.nombre}
                </h2>

                <p>
                    <strong>Descripción:</strong>
                </p>

                <p>
                    ${producto.descripcion}
                </p>

                <p>
                    ${producto.detalle}
                </p>

            </div>

        </div>
    `;


    detalleProducto.style.display = "block";


    detalleProducto.scrollIntoView({
        behavior: "smooth"
    });
}


// ==========================================
// CERRAR DETALLE
// ==========================================

cerrarDetalle.addEventListener("click", () => {

    detalleProducto.style.display = "none";

});


// ==========================================
// EVENTOS DE BÚSQUEDA Y FILTRO
// ==========================================

buscador.addEventListener(
    "input",
    actualizarCatalogo
);


filtroCategoria.addEventListener(
    "change",
    actualizarCatalogo
);


// ==========================================
// CARGAR CATÁLOGO INICIAL
// ==========================================

mostrarProductos(productos);
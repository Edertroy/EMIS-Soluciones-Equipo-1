
 // ==========================================
 // CATÁLOGO DE PRODUCTOS - EMIS SOLUCIONES
 // SPRINT 1 Y SPRINT 2
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

const formularioProducto = document.getElementById("formularioProducto");
const nombreProducto = document.getElementById("nombreProducto");
const categoriaProducto = document.getElementById("categoriaProducto");
const descripcionProducto = document.getElementById("descripcionProducto");
const mensajeRegistro = document.getElementById("mensajeRegistro");


// ==========================================
// CONVERTIR LA CATEGORÍA EN TEXTO
// ==========================================

function obtenerNombreCategoria(categoria) {
    const categorias = {
        construccion: "Construcción",
        ferreteria: "Ferretería",
        industrial: "Productos industriales",
        limpieza: "Limpieza",
        cafeteria: "Cafetería",
        papeleria: "Papelería y oficina"
    };

    return categorias[categoria] || "Sin categoría";
}


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

        const imagen = document.createElement("div");
        imagen.classList.add("producto-imagen");

        const nombreImagen = document.createElement("span");
        nombreImagen.textContent = producto.nombre;
        imagen.appendChild(nombreImagen);

        const contenido = document.createElement("div");
        contenido.classList.add("producto-contenido");

        const categoria = document.createElement("span");
        categoria.classList.add("producto-categoria");
        categoria.textContent = producto.categoriaNombre;

        const titulo = document.createElement("h3");
        titulo.textContent = producto.nombre;

        const descripcion = document.createElement("p");
        descripcion.classList.add("producto-descripcion");
        descripcion.textContent = producto.descripcion;

        const botonDetalle = document.createElement("button");
        botonDetalle.classList.add("btn", "btn-detalle");
        botonDetalle.type = "button";
        botonDetalle.textContent = "Ver detalle";

        botonDetalle.addEventListener("click", () => {
            mostrarDetalle(producto.id);
        });

        contenido.append(
            categoria,
            titulo,
            descripcion,
            botonDetalle
        );

        tarjeta.append(imagen, contenido);
        contenedorProductos.appendChild(tarjeta);
    });
}


// ==========================================
// BUSCAR Y FILTRAR PRODUCTOS
// ==========================================

function actualizarCatalogo() {
    const textoBusqueda = buscador.value.toLowerCase().trim();
    const categoriaSeleccionada = filtroCategoria.value;

    const productosFiltrados = productos.filter(producto => {
        const coincideBusqueda =
            producto.nombre.toLowerCase().includes(textoBusqueda) ||
            producto.descripcion.toLowerCase().includes(textoBusqueda);

        const coincideCategoria =
            categoriaSeleccionada === "todos" ||
            producto.categoria === categoriaSeleccionada;

        return coincideBusqueda && coincideCategoria;
    });

    mostrarProductos(productosFiltrados);
}


// ==========================================
// MOSTRAR DETALLE DEL PRODUCTO
// ==========================================

function mostrarDetalle(id) {
    const producto = productos.find(producto => producto.id === id);

    if (!producto) {
        return;
    }

    contenidoDetalle.innerHTML = "";

    const contenedor = document.createElement("div");
    contenedor.classList.add("detalle-contenido");

    const imagen = document.createElement("div");
    imagen.classList.add("detalle-imagen");

    const nombreImagen = document.createElement("span");
    nombreImagen.textContent = producto.nombre;
    imagen.appendChild(nombreImagen);

    const informacion = document.createElement("div");
    informacion.classList.add("detalle-informacion");

    const categoria = document.createElement("span");
    categoria.classList.add("producto-categoria");
    categoria.textContent = producto.categoriaNombre;

    const titulo = document.createElement("h2");
    titulo.textContent = producto.nombre;

    const etiquetaDescripcion = document.createElement("p");
    const negrita = document.createElement("strong");
    negrita.textContent = "Descripción:";
    etiquetaDescripcion.appendChild(negrita);

    const descripcion = document.createElement("p");
    descripcion.textContent = producto.descripcion;

    const detalle = document.createElement("p");
    detalle.textContent = producto.detalle;

    informacion.append(
        categoria,
        titulo,
        etiquetaDescripcion,
        descripcion,
        detalle
    );

    contenedor.append(imagen, informacion);
    contenidoDetalle.appendChild(contenedor);

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
// REGISTRAR PRODUCTOS - SPRINT 2
// ==========================================

formularioProducto.addEventListener("submit", evento => {
    evento.preventDefault();

    const nombre = nombreProducto.value.trim();
    const categoria = categoriaProducto.value;
    const descripcion = descripcionProducto.value.trim();

    // Validar que los campos contengan información.
    if (!nombre || !categoria || !descripcion) {
        mensajeRegistro.textContent =
            "Por favor, completa todos los campos.";
        return;
    }

    // Crear el nuevo producto en memoria.
    const nuevoProducto = {
        id: productos.length > 0
            ? Math.max(...productos.map(producto => producto.id)) + 1
            : 1,

        nombre: nombre,
        categoria: categoria,
        categoriaNombre: obtenerNombreCategoria(categoria),
        descripcion: descripcion,
        detalle: descripcion
    };

    // Agregar el producto al catálogo.
    productos.push(nuevoProducto);

    // Actualizar el catálogo respetando la búsqueda y el filtro actuales.
    actualizarCatalogo();

    // Confirmar el registro y limpiar el formulario.
    mensajeRegistro.textContent =
        `El producto "${nombre}" se registró correctamente.`;

    formularioProducto.reset();
});


// ==========================================
// LIMPIAR MENSAJE AL VOLVER A EDITAR
// ==========================================

formularioProducto.addEventListener("input", () => {
    mensajeRegistro.textContent = "";
});


// ==========================================
// EVENTOS DE BÚSQUEDA Y FILTRO
// ==========================================

buscador.addEventListener("input", actualizarCatalogo);
filtroCategoria.addEventListener("change", actualizarCatalogo);


// ==========================================
// CARGAR CATÁLOGO INICIAL
// ==========================================

mostrarProductos(productos);
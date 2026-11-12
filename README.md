# EMIS Soluciones S.A.S.

## Proyecto

**Sistema de Gestión Comercial para EMIS Soluciones S.A.S.**

## Descripción del proyecto

El proyecto consiste en desarrollar una solución web orientada a facilitar la consulta y gestión de la información comercial de EMIS Soluciones S.A.S.

La aplicación permite organizar y consultar información relacionada con los productos ofrecidos por la empresa, facilitar la búsqueda de productos y apoyar la gestión de solicitudes de información realizadas por los clientes.

Este proyecto se desarrolla con fines académicos mediante la aplicación de la metodología ágil Scrum y el uso de Git y GitHub para gestionar el código fuente, documentar los avances y realizar el seguimiento de cada Sprint.

## Problema

EMIS Soluciones S.A.S. cuenta con un amplio portafolio de productos relacionados con construcción, ferretería, productos industriales, limpieza, cafetería, papelería y suministros de oficina.

El proyecto busca desarrollar una solución web que permita organizar esta información y facilitar su consulta por parte de los clientes, además de sentar las bases para futuras funcionalidades de administración comercial.

## Producto

El producto es una aplicación web para la gestión y consulta de información comercial de EMIS Soluciones S.A.S.

Entre las funcionalidades planteadas para el sistema se encuentran:

* Consulta del catálogo de productos.
* Búsqueda de productos por nombre o descripción.
* Filtrado de productos por categoría.
* Consulta del detalle de los productos.
* Registro de nuevos productos.
* Registro y gestión de solicitudes de información.
* Administración de información comercial.
* Gestión de usuarios y roles.

Las funcionalidades se desarrollarán progresivamente, de acuerdo con las prioridades y la planificación de los Sprints.

## Equipo

**Equipo #1**

* Eder Avendaño
* Nicol Duque
* Cristian Zapata
* Miguel Angel Cañas

## Tecnologías

Las tecnologías y herramientas utilizadas inicialmente son:

* **HTML:** estructura de la aplicación web.
* **CSS:** estilos y diseño adaptable a diferentes tamaños de pantalla.
* **JavaScript:** lógica de la aplicación, búsqueda, filtrado, consulta de detalles y registro temporal de productos.
* **Git:** control de versiones del proyecto.
* **GitHub:** alojamiento del repositorio y seguimiento de los cambios.

Las tecnologías podrán ampliarse según las necesidades que se definan durante los siguientes Sprints.

## Metodología de trabajo

El proyecto se desarrolla utilizando la metodología ágil Scrum.

La planificación y el seguimiento del trabajo se organizan mediante:

* Product Backlog.
* Épicas.
* Features.
* Historias de Usuario.
* Sprint Backlog.
* Sprints.
* Revisiones de Sprint.
* Seguimiento de avances y control de versiones.

El repositorio se mantiene durante la evolución del proyecto. El Product Backlog reúne las historias del producto, mientras que cada Sprint cuenta con su propia documentación.

## Organización del repositorio

```text
EMIS-Soluciones-Equipo-1/
│
├── docs/
│   ├── product-backlog.md
│   ├── user-stories.md
│   └── sprints/
│       ├── sprint-01/
│       │   ├── sprint-backlog.md
│       │   └── sprint-review.md
│       └── sprint-02/
│           ├── sprint-backlog.md
│           └── sprint-review.md
│
├── src/
│   ├── index.html
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── app.js
│
├── README.md
└── .gitignore
```

## Sprint 1 — Consulta del catálogo

**Objetivo:** desarrollar la funcionalidad inicial para consultar los productos del catálogo comercial.

### Funcionalidades implementadas

* Visualización de los productos del catálogo.
* Búsqueda por nombre o descripción.
* Filtrado por categoría.
* Consulta del detalle de cada producto.
* Interfaz adaptable a diferentes tamaños de pantalla.

### Historias de usuario completadas

* **US04:** Consultar catálogo de productos.
* **US05:** Buscar productos.
* **US06:** Filtrar productos por categoría.
* **US07:** Consultar información detallada de un producto.

**Estimación total:** 16 puntos.

**Estado:** Completado.

## Sprint 2 — Registro de productos

**Objetivo:** implementar una funcionalidad que permita registrar nuevos productos y agregarlos al catálogo.

### Funcionalidades implementadas

* Formulario para ingresar el nombre del producto.
* Selección de categoría.
* Campo para ingresar la descripción.
* Validación de campos obligatorios.
* Mensaje de confirmación del registro.
* Incorporación de los productos registrados al catálogo.
* Compatibilidad con la búsqueda y el filtrado por categoría.
* Consulta del detalle de los nuevos productos.

### Historia de usuario completada

* **US01:** Registrar productos.

**Estimación:** 5 puntos.

**Estado:** Completado.

### Alcance y limitaciones

Los productos registrados durante el Sprint 2 se almacenan temporalmente en la memoria de la aplicación. Por este motivo, desaparecen cuando se recarga la página.

En esta etapa no se implementó una base de datos ni un mecanismo de almacenamiento persistente.

## Estado actual del proyecto

El proyecto cuenta con una versión funcional que integra las funcionalidades desarrolladas durante los Sprints 1 y 2:

* Consulta del catálogo de productos.
* Búsqueda y filtrado por categoría.
* Visualización del detalle de los productos.
* Registro temporal de nuevos productos.

Las funcionalidades desarrolladas han sido probadas manualmente.

Las historias relacionadas con solicitudes de información, administración comercial y gestión de usuarios y roles permanecen como funcionalidades planteadas para futuras etapas, según la planificación del Product Backlog.

## Próximos pasos

Continuar con la planificación del siguiente Sprint, seleccionando las historias pendientes del Product Backlog según su prioridad y el objetivo definido para el producto.

## Versionamiento

* **Sprint 1:** v0.1.0 — consulta del catálogo de productos.
* **Sprint 2:** v0.2.0 — registro temporal de productos.

## Empresa de referencia

**EMIS Soluciones S.A.S.**

*Comprometidos con tu satisfacción.*

Sitio web: https://emissoluciones.com/

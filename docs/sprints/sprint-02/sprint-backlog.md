# Sprint Backlog — Sprint 2

## Proyecto

**Sistema de Gestión Comercial para EMIS Soluciones S.A.S.**

**Equipo:** Equipo 1

**Integrantes:**

* Eder Avendaño
* Nicol Duque
* Cristian Zapata
* Miguel Angel Cañas

## Objetivo del Sprint

Implementar una funcionalidad que permita registrar nuevos productos en el catálogo de EMIS Soluciones S.A.S., utilizando HTML, CSS y JavaScript.

Los productos registrados se mantendrán temporalmente en memoria mientras la aplicación esté abierta. No se implementará persistencia de datos en esta etapa.

## Historia seleccionada

### US01 — Registrar productos

**Épica:** E1 — Gestión del catálogo de productos

**Feature:** F01 — Registrar productos

**Prioridad:** Alta

**Estimación:** 5 puntos

**Estado:** Completada

**Historia de usuario:**

> Como administrador, quiero registrar productos con su información básica, para mantener actualizado el catálogo.

## Criterios de aceptación

* El sistema debe permitir ingresar el nombre del producto.
* Debe permitir seleccionar una categoría.
* Debe permitir ingresar una descripción.
* Debe permitir registrar el producto.
* El sistema debe confirmar cuando el registro sea exitoso.
* El nuevo producto debe aparecer en el catálogo mientras la aplicación permanezca abierta.
* El sistema debe validar los campos obligatorios antes de registrar el producto.

## Alcance técnico

* HTML para estructurar el formulario.
* CSS para mantener el diseño de la aplicación.
* JavaScript para validar los datos y agregar productos al catálogo.
* No se implementará una base de datos ni almacenamiento persistente en este Sprint.

## Resultado esperado

Una versión funcional de la aplicación que permita registrar productos temporalmente y visualizarlos en el catálogo, conservando las funciones de búsqueda, filtrado y consulta del detalle.

## Resultado del Sprint

La funcionalidad de registro de productos fue implementada y probada satisfactoriamente.

Se verificó que:

- El formulario permite ingresar el nombre, la categoría y la descripción.
- El sistema valida los campos obligatorios.
- Los productos registrados aparecen en el catálogo.
- Es posible buscar y filtrar los nuevos productos.
- Se puede consultar el detalle de los productos registrados.
- Los productos nuevos se mantienen temporalmente en memoria y desaparecen al recargar la página.

**Estado de la historia US01:** Completada.

**Observación:** En este Sprint no se implementó persistencia de datos ni conexión a una base de datos.

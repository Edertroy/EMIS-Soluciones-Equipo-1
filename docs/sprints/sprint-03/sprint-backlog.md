# Sprint Backlog — Sprint 3

## Proyecto

**Sistema de Gestión Comercial para EMIS Soluciones S.A.S.**

**Equipo:** Equipo 1

**Integrantes:**
- Eder Avendaño
- Nicol Duque
- Cristian Zapata
- Miguel Angel Cañas

## Objetivo del Sprint

Implementar una funcionalidad que permita editar la información de los productos existentes en el catálogo comercial de EMIS Soluciones S.A.S.

El objetivo es facilitar la actualización del nombre, la categoría y la descripción de los productos, conservando las funcionalidades desarrolladas en los Sprints anteriores.

## Historia seleccionada

### US02 — Editar información de productos

**Épica:** E1 — Gestión del catálogo de productos

**Feature:** F02 — Editar información de productos

**Prioridad:** Alta

**Estimación:** 5 puntos

**Estado:** Completada

**Historia de usuario:**

> Como administrador, quiero editar la información de los productos, para mantener actualizado el catálogo comercial.

## Criterios de aceptación

- El sistema debe permitir seleccionar un producto existente para editarlo.
- El formulario de edición debe mostrar la información actual del producto seleccionado.
- El administrador debe poder modificar el nombre del producto.
- El administrador debe poder modificar la categoría del producto.
- El administrador debe poder modificar la descripción del producto.
- El sistema debe validar los campos obligatorios antes de guardar los cambios.
- El sistema debe mostrar una confirmación cuando la actualización sea exitosa.
- Los cambios deben reflejarse en el catálogo y en el detalle del producto.
- Las funciones de búsqueda y filtrado deben continuar funcionando.
- Los cambios se conservarán temporalmente mientras la página permanezca abierta.

## Tareas del Sprint

### Tarea 1. Preparar el formulario de edición
- Crear la sección de edición en `src/index.html`.
- Agregar los campos para el nombre, la categoría y la descripción.
- Incorporar los botones para guardar los cambios y cancelar la edición.

### Tarea 2. Implementar la lógica de edición
- Identificar el producto seleccionado.
- Cargar los datos actuales en el formulario.
- Permitir modificar los campos del producto.
- Validar los campos obligatorios antes de guardar.

### Tarea 3. Actualizar el catálogo
- Guardar los cambios en el objeto del producto seleccionado.
- Actualizar la presentación de los productos en el catálogo.
- Comprobar que los cambios se reflejen en la consulta de detalles.
- Conservar el funcionamiento de la búsqueda y los filtros.

### Tarea 4. Verificar la interfaz
- Revisar la presentación del formulario mediante `src/css/styles.css`.
- Comprobar el funcionamiento de los botones de guardar y cancelar.
- Verificar los mensajes de confirmación y validación.

### Tarea 5. Realizar pruebas funcionales
- Probar la edición del nombre, la categoría y la descripción.
- Comprobar el comportamiento cuando faltan campos obligatorios.
- Verificar que cancelar no guarde modificaciones.
- Comprobar la búsqueda, los filtros y la consulta de detalles después de editar.
- Documentar los resultados de las pruebas.

### Tarea 6. Actualizar la documentación
- Registrar los resultados en `sprint-review.md`.
- Actualizar el estado de US02 en el Product Backlog cuando se hayan verificado los criterios de aceptación.
- Registrar los cambios mediante Git y sincronizarlos con GitHub.

## Alcance técnico

- **HTML:** estructura del formulario de edición.
- **CSS:** presentación visual de la aplicación y del formulario.
- **JavaScript:** selección de productos, carga de datos, validación y actualización del catálogo.
- **Almacenamiento:** los datos se administrarán temporalmente en memoria.
- **Restricción:** no se implementará una base de datos ni almacenamiento persistente en este Sprint.

## Resultado esperado

Una versión funcional de la aplicación que permita editar los datos de los productos existentes y visualizar los cambios en el catálogo, manteniendo las funcionalidades desarrolladas en los Sprints 1 y 2.

## Definición de terminado (Definition of Done)

La historia US02 podrá considerarse terminada cuando:

- La edición de productos funcione correctamente.
- Los campos obligatorios se validen antes de guardar.
- Los cambios se reflejen en el catálogo y en el detalle del producto.
- La búsqueda y los filtros continúen funcionando.
- La cancelación de la edición funcione correctamente.
- Las pruebas funcionales hayan sido realizadas y documentadas.
- Los cambios correspondientes estén guardados y registrados en el repositorio.

**Nota:** los cambios se mantienen únicamente mientras la aplicación permanece abierta. Al recargar la página, los datos modificados no se conservan.
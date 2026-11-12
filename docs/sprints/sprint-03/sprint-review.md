# Sprint Review - Sprint 3

## 1. Información general

- **Proyecto:** Sistema de Gestión Comercial para EMIS Soluciones S.A.S.
- **Equipo:** Equipo 1
- **Integrantes:** Eder Avendaño, Nicol Duque y Cristian Zapata, Miguel Angel Cañas.
- **Sprint:** 3
- **Historia de usuario:** US02 - Editar información de productos.

## 2. Objetivo del Sprint

Implementar la funcionalidad de edición de productos para permitir modificar la información de los productos registrados en el catálogo, utilizando HTML, CSS y JavaScript.

## 3. Funcionalidad desarrollada

Se trabaja en la implementación de un formulario de edición que permite modificar la información de un producto existente.

La funcionalidad contempla:

- Seleccionar un producto para editarlo.
- Cargar la información actual del producto en el formulario.
- Modificar el nombre, la categoría y la descripción.
- Validar los campos obligatorios.
- Guardar los cambios y actualizar la información presentada en el catálogo.
- Cancelar la edición sin guardar cambios.

## 4. Criterios de aceptación

La historia de usuario US02 se considerará completada cuando se verifique que:

- El usuario puede seleccionar un producto existente.
- El formulario muestra los datos actuales del producto.
- Los campos obligatorios son validados.
- Los cambios guardados se reflejan en el catálogo.
- La búsqueda, los filtros y la consulta de detalles continúan funcionando.
- La edición puede cancelarse sin modificar el producto.

## 5. Aspectos técnicos

La funcionalidad se desarrolla con HTML, CSS y JavaScript.

Los datos se administran temporalmente en memoria, por lo que los cambios no se conservan después de recargar la página. La persistencia en una base de datos no forma parte del alcance de este Sprint.

## 6. Resultado de la revisión

**Estado:** Validación funcional satisfactoria.

Se realizaron pruebas funcionales de la edición de productos en la aplicación web de EMIS Soluciones S.A.S. Los resultados obtenidos fueron satisfactorios.

Las pruebas realizadas confirmaron que:

- El botón de edición aparece en las tarjetas del catálogo.
- El formulario carga la información actual del producto seleccionado.
- Los cambios guardados se reflejan en el catálogo.
- El sistema valida los campos obligatorios antes de guardar.
- La cancelación permite salir de la edición sin guardar las modificaciones.
- La búsqueda, los filtros y la consulta de detalles continúan funcionando después de editar un producto.

La información continúa almacenándose temporalmente en memoria, por lo que los cambios no persisten después de recargar la página.

**Conclusión:** Las pruebas funcionales realizadas fueron satisfactorias. La historia US02 puede considerarse completada respecto a los criterios verificados, sujeta a la revisión final de la documentación y al registro de los cambios en el repositorio.

## 7. Próximos pasos

- Ejecutar las pruebas funcionales de edición.
- Corregir los errores que se identifiquen.
- Confirmar el cumplimiento de los criterios de aceptación.
- Actualizar el Product Backlog y el estado de la historia US02.
- Registrar los cambios en Git y GitHub.
# Historias de Usuario — EMIS Soluciones S.A.S.

## Información del proyecto

**Proyecto:** Sistema de Gestión Comercial para EMIS Soluciones S.A.S.

**Equipo:** Equipo 1

**Integrantes:**
- Eder Avendaño
- Nicol Duque
- Cristian Zapata

---

# Épica E1 — Gestión del catálogo de productos

## US01 — Registrar productos

**Feature:** F01 — Registrar productos

**Historia de usuario:**

> Como administrador, quiero registrar productos con su información básica, para mantener actualizado el catálogo.

**Criterios de aceptación:**

- El sistema debe permitir ingresar el nombre del producto.
- Debe permitir seleccionar una categoría.
- Debe permitir ingresar una descripción.
- Debe permitir registrar el producto.
- El sistema debe confirmar cuando el registro sea exitoso.

---

## US02 — Editar información de productos

**Feature:** F02 — Editar información de productos

**Historia de usuario:**

> Como administrador, quiero editar la información de un producto, para mantener sus datos actualizados.

**Criterios de aceptación:**

- El administrador debe poder seleccionar un producto.
- El sistema debe mostrar su información actual.
- Debe permitir modificar los datos.
- Debe permitir guardar los cambios.
- El sistema debe confirmar la actualización.

---

## US03 — Organizar productos por categorías

**Feature:** F03 — Organizar productos por categorías

**Historia de usuario:**

> Como administrador, quiero clasificar los productos por categorías, para facilitar su organización y consulta.

**Criterios de aceptación:**

- El sistema debe permitir seleccionar una categoría.
- Un producto debe pertenecer a una categoría.
- Las categorías deben poder visualizarse.
- Los productos deben mostrarse asociados a su categoría.

---

# Épica E2 — Consulta de productos

## US04 — Consultar catálogo de productos

**Feature:** F04 — Consultar catálogo de productos

**Historia de usuario:**

> Como cliente, quiero consultar el catálogo de productos, para conocer la oferta disponible.

**Criterios de aceptación:**

- El cliente debe poder visualizar los productos.
- Cada producto debe mostrar información básica.
- Los productos deben estar organizados.
- El catálogo debe ser accesible desde la aplicación.

---

## US05 — Buscar productos

**Feature:** F05 — Buscar productos

**Historia de usuario:**

> Como cliente, quiero buscar productos por nombre, para encontrar rápidamente el producto que necesito.

**Criterios de aceptación:**

- Debe existir un campo de búsqueda.
- El cliente debe poder ingresar el nombre del producto.
- El sistema debe mostrar los resultados relacionados.
- Si no existen resultados, debe informarlo.

---

## US06 — Filtrar productos por categoría

**Feature:** F06 — Filtrar productos por categoría

**Historia de usuario:**

> Como cliente, quiero filtrar los productos por categoría, para consultar solamente los productos que me interesan.

**Criterios de aceptación:**

- El sistema debe mostrar las categorías disponibles.
- El cliente debe poder seleccionar una categoría.
- El sistema debe mostrar los productos correspondientes.
- Debe existir una opción para quitar el filtro.

---

## US07 — Consultar información detallada de un producto

**Feature:** F07 — Consultar información detallada de un producto

**Historia de usuario:**

> Como cliente, quiero consultar el detalle de un producto, para conocer mejor sus características.

**Criterios de aceptación:**

- El cliente debe poder seleccionar un producto.
- El sistema debe mostrar su nombre.
- Debe mostrar su descripción.
- Debe mostrar su categoría.
- La información debe ser clara y legible.

---

# Épica E3 — Gestión de solicitudes de los clientes

## US08 — Registrar solicitudes de información

**Feature:** F08 — Registrar solicitudes de información

**Historia de usuario:**

> Como cliente, quiero enviar una solicitud de información sobre un producto, para recibir atención por parte de EMIS.

**Criterios de aceptación:**

- El cliente debe poder seleccionar o indicar el producto.
- Debe poder escribir su solicitud.
- Debe poder registrar sus datos de contacto.
- El sistema debe confirmar el envío.

---

## US09 — Consultar solicitudes de clientes

**Feature:** F09 — Consultar solicitudes de clientes

**Historia de usuario:**

> Como administrador, quiero consultar las solicitudes realizadas por los clientes, para realizar su seguimiento.

**Criterios de aceptación:**

- El administrador debe poder visualizar las solicitudes.
- Cada solicitud debe mostrar la información del cliente.
- Debe mostrar la fecha de la solicitud.
- Debe mostrar el estado de la solicitud.

---

## US10 — Gestionar el estado de una solicitud

**Feature:** F10 — Gestionar el estado de una solicitud

**Historia de usuario:**

> Como administrador, quiero actualizar el estado de una solicitud, para realizar un seguimiento de su atención.

**Criterios de aceptación:**

- El administrador debe poder seleccionar una solicitud.
- Debe poder modificar su estado.
- El sistema debe guardar el cambio.
- El nuevo estado debe visualizarse correctamente.

---

# Épica E4 — Administración de la información comercial

## US11 — Actualizar información comercial

**Feature:** F11 — Actualizar información comercial

**Historia de usuario:**

> Como administrador, quiero actualizar la información comercial de EMIS, para mantenerla vigente.

**Criterios de aceptación:**

- El administrador debe poder modificar la información autorizada.
- Debe poder guardar los cambios.
- El sistema debe confirmar la actualización.
- La información actualizada debe visualizarse correctamente.

---

## US12 — Administrar información de contacto

**Feature:** F12 — Administrar información de contacto

**Historia de usuario:**

> Como administrador, quiero administrar los datos de contacto de EMIS, para mantener disponibles los medios de comunicación con la empresa.

**Criterios de aceptación:**

- Debe permitir actualizar teléfonos.
- Debe permitir actualizar correos electrónicos.
- Debe permitir actualizar otros datos de contacto definidos para el proyecto.
- Los cambios deben guardarse correctamente.

---

# Épica E5 — Gestión de usuarios

## US13 — Registrar usuarios

**Feature:** F13 — Registrar usuarios

**Historia de usuario:**

> Como administrador, quiero registrar usuarios, para permitirles acceder al sistema según sus funciones.

**Criterios de aceptación:**

- Debe permitir ingresar los datos requeridos.
- Debe permitir asignar un rol.
- Debe validar los datos obligatorios.
- Debe confirmar el registro.

---

## US14 — Iniciar sesión

**Feature:** F14 — Iniciar sesión

**Historia de usuario:**

> Como usuario, quiero iniciar sesión, para acceder a las funciones correspondientes a mi cuenta.

**Criterios de aceptación:**

- Debe solicitar las credenciales.
- Debe validar los datos ingresados.
- Si son correctos, debe permitir el acceso.
- Si son incorrectos, debe mostrar un mensaje.
- El usuario debe poder cerrar sesión.

---

## US15 — Gestionar roles de usuario

**Feature:** F15 — Gestionar roles de usuario

**Historia de usuario:**

> Como administrador, quiero gestionar los roles de los usuarios, para controlar las funciones disponibles para cada uno.

**Criterios de aceptación:**

- El administrador debe poder consultar los usuarios.
- Debe poder asignar o modificar un rol.
- El sistema debe guardar el cambio.
- Las funciones disponibles deben corresponder al rol asignado.
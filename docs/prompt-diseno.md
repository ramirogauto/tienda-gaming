# Prompt de diseño — MVP e-commerce Gaming/PC

Brief para cliente, kickoff o SDD. Proyecto: **tienda-gaming**.

---

## Contexto

Diseñar y especificar un **MVP de tienda online** de productos **gaming/PC**, inspirado en la experiencia de **CompraGamer** y **Mercado Libre** (catálogo claro, confianza, compra simple), con **diseño cuidado y profesional** — no un prototipo feo, sino un MVP **lindo y usable**.

**Objetivo del MVP:** que un usuario pueda **ver productos, filtrarlos, ver detalle, agregar al carrito y simular una compra**, mientras un admin puede **cargar productos** desde un panel.

---

## Alcance MVP — qué entra

### Roles

- **Cliente (comprador):** navega, filtra, compra (mock).
- **Admin:** carga y gestiona productos.

### Funcionalidades incluidas

| Módulo | Qué debe hacer |
|--------|----------------|
| **Catálogo** | Listado de productos con imagen, nombre, precio. **Filtros:** al menos orden **menor precio → mayor precio** y **mayor → menor**. |
| **Ficha de producto** | Producto + **características** (specs: marca, modelo, RAM, etc. según categoría). Botón **Agregar al carrito**. |
| **Carrito** | Ver productos agregados, cantidades, **suma total**. Agregar / quitar / ajustar cantidad. |
| **Checkout (mock)** | Flujo de compra **completo en pantalla**: datos de envío, resumen del pedido, **selección de método de pago** (tarjeta, transferencia, etc.) **sin cobro real**. Mensaje final tipo “Pedido simulado / confirmado (demo)”. |
| **Login** | Registro e inicio de sesión para clientes. |
| **Panel admin** | Alta/edición de productos: nombre, precio, imagen, categoría, características. |

---

## Fuera de alcance (Fase 2 — no incluir en este MVP)

- Pagos reales (Mercado Pago, tarjetas, etc.)
- Facturación AFIP
- Armador de PC / compatibilidad entre componentes
- Stock en tiempo real avanzado, múltiples depósitos
- Envíos reales con integración a couriers
- Cupones, cuotas, wishlist, comparador
- App nativa (solo web responsive)

---

## Pantallas mínimas a diseñar

1. **Home** — destacados / categorías gaming
2. **Catálogo** — grilla + filtros (precio)
3. **Ficha de producto** — specs + agregar al carrito
4. **Carrito** — ítems + total
5. **Checkout (mock)** — pasos: envío → pago (UI) → confirmación
6. **Login / registro**
7. **Panel admin** — listado y formulario de producto

---

## Dirección visual

- Estilo **gaming/comercio digital**: referencia **CompraGamer** (oscuro, tech, producto protagonista) y **Mercado Libre** (claridad, jerarquía, confianza en la compra).
- **Mobile first** + desktop.
- Tipografía legible, CTAs claros (“Agregar al carrito”, “Finalizar compra”).
- Cards de producto consistentes; precio siempre visible.
- Checkout mock debe **verse creíble** (como si fuera real), con disclaimer de demo.

---

## Criterios de “listo” (Definition of Done — diseño)

1. Un usuario puede **ordenar el catálogo por precio** y abrir una ficha con características.
2. Puede **agregar al carrito** y ver el **total** actualizado.
3. Puede completar un **checkout mock** hasta pantalla de confirmación.
4. Un admin puede **cargar un producto** y verlo en el catálogo.
5. El diseño se ve **profesional y coherente** en mobile y desktop (no wireframe gris).

---

## Entregables esperados del diseño

Antes de programar, se espera:

- **Mapa de pantallas** y flujo (catálogo → ficha → carrito → checkout).
- **Wireframes o mockups** de las 7 pantallas (MVP).
- **Lista de datos por producto** (campos del admin y de la ficha).
- **Propuesta visual** (colores, tipografía, estilo de cards y botones).
- **Nota explícita:** checkout y pagos son **simulación**, no producción.

---

## Gate de aprobación (cliente)

No se avanza a desarrollo hasta que el cliente confirme por escrito:

- [ ] Alcance MVP (tabla de arriba)
- [ ] Pantallas listadas
- [ ] Estilo visual (CompraGamer / Mercado Libre)
- [ ] Checkout mock aceptado (sin pagos reales en Fase 1)

---

## Preguntas abiertas para el cliente (opcional)

> ¿Hay **3 categorías** prioritarias para el lanzamiento? (ej. placas de video, notebooks, periféricos)
> ¿Hay **logo, colores de marca** o partimos de referencia CompraGamer/ML?

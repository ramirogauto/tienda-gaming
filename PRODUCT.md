# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Comprador (cliente):** gamers y entusiastas de PC en Argentina que buscan hardware y periféricos gaming. Navegan catálogo, comparan specs, agregan al carrito y completan una compra simulada. Esperan claridad tipo Mercado Libre y estética tech tipo CompraGamer.

**Admin:** operador de la tienda que carga y gestiona productos (alta, edición, categorías, características) desde un panel interno.

## Product Purpose

MVP de tienda online gaming/PC que demuestre un flujo de compra completo y creíble — catálogo, ficha, carrito y checkout mock — más gestión básica de productos, sin pagos reales. El éxito es que un cliente potencial apruebe el alcance, las pantallas y la calidad visual antes de avanzar a desarrollo productivo.

## Positioning

Tienda gaming argentina con la claridad comercial de Mercado Libre y la estética tech de CompraGamer, entregada como MVP demo funcional: checkout simulado pero visualmente real, admin incluido, sin la complejidad de pagos, facturación ni logística de Fase 2.

## Operating Context

- Proyecto para **cliente** con gate de aprobación escrito antes de desarrollo productivo.
- Brief de diseño en `docs/prompt-diseno.md` define alcance MVP, pantallas mínimas y criterios de "listo".
- Stack ya iniciado: Next.js 16 (App Router), React 19, Tailwind CSS 4, TypeScript.
- Idioma de interfaz: **español (Argentina)**. Precios en **ARS**.
- Mobile first con soporte desktop responsive. Sin app nativa.

## Capabilities and Constraints

### Incluido en MVP

| Módulo | Comportamiento |
|--------|----------------|
| Catálogo | Listado con imagen, nombre, precio. Filtro/orden por precio (menor→mayor, mayor→menor). |
| Ficha de producto | Specs por categoría (marca, modelo, RAM, etc.). Botón "Agregar al carrito". |
| Carrito | Ver ítems, cantidades, total. Agregar, quitar, ajustar cantidad. |
| Checkout (mock) | Flujo completo en pantalla: envío → pago (UI) → confirmación demo. Sin cobro real. |
| Login | Registro e inicio de sesión para clientes. |
| Panel admin | Alta/edición de productos: nombre, precio, imagen, categoría, características. |

### Pantallas mínimas

1. Home (destacados / categorías gaming)
2. Catálogo (grilla + filtros)
3. Ficha de producto
4. Carrito
5. Checkout mock
6. Login / registro
7. Panel admin

### Fuera de alcance (Fase 2)

Pagos reales (Mercado Pago, tarjetas), facturación AFIP, armador de PC / compatibilidad, stock avanzado, envíos con couriers, cupones, cuotas, wishlist, comparador, app nativa.

### Decisiones abiertas

- **Categorías prioritarias de lanzamiento** (ej. placas de video, notebooks, periféricos): pendiente confirmación del cliente.
- **Datos de producto:** no hay catálogo real confirmado; se asume contenido demo/mock hasta que el cliente provea inventario.

## Brand Commitments

- Nombre de trabajo: **tienda-gaming** (sin logo ni paleta definida).
- Referencias visuales vinculantes para diseño futuro (no producto): estética CompraGamer (oscuro, tech, producto protagonista) + claridad Mercado Libre (jerarquía, confianza en la compra).
- CTAs esperados: "Agregar al carrito", "Finalizar compra". Precio siempre visible en cards.

## Evidence on Hand

- Brief de producto y diseño: `docs/prompt-diseno.md`
- Scaffold Next.js con página default (sin UI de tienda implementada)
- **No hay:** logo, paleta de marca, testimonios, catálogo real, imágenes de producto del cliente. Futuro trabajo no debe fabricar prueba social, precios de mercado reales ni claims de negocio no confirmados.

## Product Principles

1. **Demo creíble, no producción:** el checkout mock debe verse real con disclaimer explícito de simulación.
2. **Claridad antes que ornamentación:** jerarquía de compra tipo marketplace; el usuario encuentra precio, specs y CTA sin fricción.
3. **MVP completo, no wireframe:** diseño profesional y coherente en mobile y desktop, no prototipo gris.
4. **Gate de cliente:** no avanzar a desarrollo productivo sin aprobación escrita de alcance, pantallas, estilo y checkout mock.
5. **Alcance cerrado:** resistir scope creep de Fase 2 (pagos, AFIP, armador PC) hasta post-MVP.

## Accessibility & Inclusion

Mobile first. Tipografía legible, CTAs claros, contraste suficiente para lectura de precios y specs. Sin requisito de estándar formal (WCAG AA) confirmado por el cliente; tratar accesibilidad básica como expectativa de calidad del MVP.

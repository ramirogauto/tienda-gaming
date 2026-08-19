# tienda-gaming

MVP demo de e-commerce gaming/PC para aprobación de cliente — catálogo, carrito, checkout simulado, login/registro demo y panel admin.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Flujo demo (comprador)

1. **Home** — destacados y categorías
2. **Catálogo** (`/catalogo`) — filtrar por categoría, ordenar por precio, buscar desde el header
3. **Ficha** (`/producto/[id]`) — specs y agregar al carrito
4. **Carrito** (`/carrito`) — cantidades y total
5. **Checkout** (`/checkout`) — envío → pago → confirmación **simulada** (sin cobro real)
6. **Login / Registro** — sesión demo en localStorage (sin backend)

## Panel admin

- `/admin` — listado, editar, eliminar productos
- `/admin/producto/nuevo` — alta de producto
- Los cambios persisten en **localStorage** del navegador y se reflejan en la tienda al instante

## Datos demo

- Productos, precios e imágenes son **ilustrativos** (placeholders SVG)
- Carrito, catálogo admin y sesión de usuario usan **localStorage**
- No hay pagos reales, facturación ni stock en backend

## Pantallas del MVP

| # | Pantalla | Ruta |
|---|----------|------|
| 1 | Home | `/` |
| 2 | Catálogo | `/catalogo` |
| 3 | Ficha | `/producto/[id]` |
| 4 | Carrito | `/carrito` |
| 5 | Checkout mock | `/checkout` |
| 6 | Login / Registro | `/login`, `/registro` |
| 7 | Panel admin | `/admin` |

Brief de producto: `PRODUCT.md` · Brief de diseño: `docs/prompt-diseno.md`

---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: []
---

# Surface Brief — Home (`app/page.tsx`)

**Mode:** Operate  
**Target:** `app/page.tsx`  
**Seed:** bcaf3658 · Dirección elegida: Consola Dark-First

## 1. Job y audiencia

- **Quién llega:** gamer/entusiasta PC argentino, mobile o desktop, buscando hardware/periféricos con precio claro en ARS.
- **Situación:** primera visita o retorno; quiere ver ofertas/destacados sin perder tiempo.
- **Modo visitante:** Operate — orientarse y entrar al catálogo o a una ficha en segundos.
- **Trabajo principal:** productos destacados primero; el hero y la grilla empujan hacia ficha o catálogo filtrado.

## 2. Outcome y proof

- **Acción primaria:** explorar destacados → abrir ficha o ir al catálogo por categoría.
- **Éxito:** usuario identifica al menos un producto de interés y entiende precio + CTA en <10 s; navegación real hacia `/catalogo`, `/producto/[id]`, `/carrito`, `/login`.
- **Proof real:** contenido demo creíble (synthetic), precios ARS de ejemplo, disclaimer demo en checkout (otra pantalla). Sin testimonios, stock real ni claims comerciales inventados.
- **Verdad de producto:** 3 categorías demo (Placas de video, Notebooks, Periféricos) + 4–8 productos destacados mock.

## 3. Dirección seleccionada

- **Mundo:** Consola Dark-First — superficie de trabajo oscura con paneles persistentes separados por costuras hairline de 1 px, sin sombras pesadas.
- **Tesis estructural:** la home es un panel de control de compra: rail de categorías fijo, campo central de destacados, header utilitario con búsqueda y carrito.
- **Paleta (roles):** ground grafito (#1e1e1e), paneles elevados un tono (#252526), acento primario syntax-blue para CTAs/estado activo, acento cálido para promos, texto #d4d4d4.
- **Tipografía:** sans compacta para UI; cifras de precio en monoespaciado alineado.
- **Momento focal:** primera fila de destacados bajo un hero compacto (1 slide o strip) — producto + precio ARS + "Agregar al carrito" legibles sin scroll en mobile.
- **Consecuencia de build:** cards, nav, inputs y botones reconstruidos en vocabulario de panel/console, no componentes stock genéricos sobre fondo oscuro.

## 4. Alcance y límites

- **Fidelidad:** pantalla lista para aprobación del cliente — contenido demo creíble, enlaces/navegación real hacia rutas MVP (aunque otras pantallas puedan ser stub).
- **Incluye:** header global (logo tienda-gaming, búsqueda, carrito con badge, login), hero compacto de destacados, rail/chips de 3 categorías, grilla 4–8 productos, footer mínimo confianza/demo.
- **No incluye:** pagos reales, búsqueda funcional avanzada, wishlist, cupones, armador PC, panel admin en esta superficie.
- **Anti-objetivos:** wireframe gris, hero decorativo sin productos, precio oculto, copy en inglés, claims de envío/stock no confirmados.

## 5. Estados y rangos

- **Contenido:** 3 categorías; 4–8 destacados; 1 hero promo; precios ARS formateados ($XXX.XXX).
- **Estados:** loading skeleton en grilla; carrito vacío (badge 0); carrito con ítems (badge N) — header refleja estado; sin sesión vs logueado (link "Ingresar" / avatar stub).
- **Vacío:** si no hay destacados, mensaje claro + CTA al catálogo (no pantalla rota).

## 6. Interacción y layout

- **Mobile first:** header sticky; categorías en scroll horizontal o drawer; grilla 1→2 cols; hero full-bleed compacto.
- **Desktop:** rail categorías persistente (col izquierda ~200px) o barra horizontal bajo header; grilla 3–4 cols en panel central.
- **Jerarquía:** logo → búsqueda → carrito; hero destacado → categorías → grilla productos → footer.
- **Affordances:** cards clicables enteras → ficha; CTA secundario "Ver catálogo"; categoría → catálogo filtrado.
- **Feedback:** hover/focus en cards (borde acento); badge carrito actualiza; transiciones panel expand/collapse en mobile (eje único, sin motion decorativo).

## 7. Constraints y decisiones abiertas

- **Stack:** Next.js 16 App Router, Tailwind 4, TypeScript, español AR.
- **Assets:** imágenes producto synthetic/demo; reemplazar cuando cliente provea catálogo.
- **A11y:** contraste suficiente precio/CTA; focus visible; labels en iconos.
- **Abierto:** categorías finales del cliente (usar 3 demo hasta confirmación); copy exacto del hero promo; si búsqueda es visual-only o filtra mock en MVP.

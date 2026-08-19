"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/cart-provider";
import { formatPrice } from "@/lib/data";

export function CartView() {
  const { getLineItems, setQuantity, removeItem, total } = useCart();
  const lines = getLineItems();

  if (lines.length === 0) {
    return (
      <div className="rounded-xl border border-[var(--panel-border)] bg-[var(--panel)] p-10 text-center">
        <p className="text-sm text-[var(--text-secondary)]">Tu carrito está vacío.</p>
        <Link
          href="/catalogo"
          className="mt-4 inline-flex h-10 items-center rounded-md bg-[var(--accent)] px-5 text-sm font-medium text-white hover:bg-[var(--accent-hover)]"
        >
          Ver catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <div className="space-y-3">
        {lines.map(({ product, quantity, subtotal }) => (
          <article
            key={product.id}
            className="flex gap-4 rounded-xl border border-[var(--panel-border)] bg-[var(--panel)] p-4"
          >
            <Link href={`/producto/${product.id}`} className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md bg-[var(--ground)]">
              <Image src={product.image} alt={product.name} fill unoptimized className="object-cover" />
            </Link>
            <div className="flex min-w-0 flex-1 flex-col gap-2">
              <Link href={`/producto/${product.id}`} className="text-sm font-medium text-[var(--text-primary)] hover:text-[var(--accent)]">
                {product.name}
              </Link>
              <p className="font-mono text-sm tabular-nums text-[var(--accent)]">{formatPrice(product.price)}</p>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center rounded-md border border-[var(--panel-border)]">
                  <button
                    type="button"
                    onClick={() => setQuantity(product.id, quantity - 1)}
                    className="flex h-8 w-8 items-center justify-center text-[var(--text-secondary)] hover:bg-[var(--ground)]"
                    aria-label="Disminuir cantidad"
                  >
                    −
                  </button>
                  <span className="flex h-8 min-w-8 items-center justify-center font-mono text-sm tabular-nums">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(product.id, quantity + 1)}
                    className="flex h-8 w-8 items-center justify-center text-[var(--text-secondary)] hover:bg-[var(--ground)]"
                    aria-label="Aumentar cantidad"
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => removeItem(product.id)}
                  className="text-xs text-[var(--text-muted)] hover:text-[var(--promo)]"
                >
                  Quitar
                </button>
              </div>
            </div>
            <p className="hidden font-mono text-sm font-semibold tabular-nums text-[var(--text-primary)] sm:block">
              {formatPrice(subtotal)}
            </p>
          </article>
        ))}
      </div>

      <aside className="h-fit rounded-xl border border-[var(--panel-border)] bg-[var(--panel)] p-5">
        <h2 className="text-sm font-semibold text-[var(--text-primary)]">Resumen</h2>
        <div className="mt-4 flex items-center justify-between text-sm">
          <span className="text-[var(--text-secondary)]">Subtotal</span>
          <span className="font-mono tabular-nums text-[var(--text-primary)]">{formatPrice(total)}</span>
        </div>
        <p className="mt-2 text-[11px] text-[var(--text-muted)]">Envío calculado en checkout (demo)</p>
        <Link
          href="/checkout"
          className="mt-5 flex h-11 items-center justify-center rounded-md bg-[var(--accent)] text-sm font-medium text-white hover:bg-[var(--accent-hover)]"
        >
          Finalizar compra
        </Link>
      </aside>
    </div>
  );
}

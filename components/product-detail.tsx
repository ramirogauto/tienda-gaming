"use client";

import Image from "next/image";
import Link from "next/link";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { formatPrice, getCategoryLabel, type Product } from "@/lib/data";

export function ProductDetail({ product }: { product: Product }) {
  return (
    <div className="p-4 lg:p-6">
      <nav className="mb-4 text-xs text-[var(--text-muted)]">
        <Link href="/" className="hover:text-[var(--accent)]">Inicio</Link>
        <span className="mx-2">/</span>
        <Link href={`/catalogo?categoria=${product.category}`} className="hover:text-[var(--accent)]">
          {getCategoryLabel(product.category)}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[var(--text-secondary)]">{product.name}</span>
      </nav>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-xl border border-[var(--panel-border)] bg-[var(--panel)]">
          <Image src={product.image} alt={product.name} fill unoptimized className="object-cover" priority />
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-[var(--accent)]">{product.brand}</p>
            <h1 className="mt-1 text-2xl font-semibold text-[var(--text-primary)]">{product.name}</h1>
          </div>

          <p className="font-mono text-3xl font-semibold tabular-nums text-[var(--accent)]">
            {formatPrice(product.price)}
          </p>
          {product.installments && (
            <p className="text-sm text-[var(--text-muted)]">{product.installments}</p>
          )}

          <AddToCartButton
            productId={product.id}
            className="flex h-11 w-full items-center justify-center gap-2 rounded-md bg-[var(--accent)] text-sm font-medium text-white hover:bg-[var(--accent-hover)] sm:w-auto sm:px-8"
          />

          <div className="rounded-xl border border-[var(--panel-border)] bg-[var(--panel)]">
            <h2 className="border-b border-[var(--panel-border)] px-4 py-3 text-sm font-semibold text-[var(--text-primary)]">
              Características
            </h2>
            <dl className="divide-y divide-[var(--panel-border)]">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between gap-4 px-4 py-2.5 text-sm">
                  <dt className="text-[var(--text-muted)]">{key}</dt>
                  <dd className="text-right font-medium text-[var(--text-primary)]">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <p className="text-[11px] text-[var(--text-muted)]">
            Producto demo · precio ilustrativo · reemplazar con datos reales del cliente
          </p>
        </div>
      </div>
    </div>
  );
}

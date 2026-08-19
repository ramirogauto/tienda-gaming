"use client";

import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { useProducts } from "@/components/products-provider";

export function FeaturedProducts() {
  const { products, hydrated } = useProducts();
  const featured = products.filter((p) => p.featured);

  if (!hydrated) {
    return (
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="aspect-[3/4] animate-pulse rounded-xl bg-[var(--panel)]" />
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="text-sm font-semibold tracking-wide text-[var(--text-primary)]">
          PRODUCTOS DESTACADOS
        </h2>
        <Link
          href="/catalogo"
          className="text-xs font-medium text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)]"
        >
          Ver todos →
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

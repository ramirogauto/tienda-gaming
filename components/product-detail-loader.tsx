"use client";

import Link from "next/link";
import { ProductDetail } from "@/components/product-detail";
import { useProducts } from "@/components/products-provider";

export function ProductDetailLoader({ id }: { id: string }) {
  const { getProductById, hydrated } = useProducts();
  const product = getProductById(id);

  if (!hydrated) {
    return <div className="m-6 h-96 animate-pulse rounded-xl bg-[var(--panel)]" />;
  }

  if (!product) {
    return (
      <div className="p-8 text-center">
        <p className="text-sm text-[var(--text-secondary)]">Producto no encontrado.</p>
        <Link href="/catalogo" className="mt-4 inline-block text-sm text-[var(--accent)] hover:underline">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return <ProductDetail product={product} />;
}

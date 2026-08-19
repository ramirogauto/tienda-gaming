"use client";

import Link from "next/link";
import { ProductForm } from "@/components/admin-product-form";
import { useProducts } from "@/components/products-provider";

export function EditProductClient({ id }: { id: string }) {
  const { getProductById, hydrated } = useProducts();
  const product = getProductById(id);

  if (!hydrated) {
    return <div className="h-64 animate-pulse rounded-xl bg-[var(--panel)]" />;
  }

  if (!product) {
    return (
      <>
        <p className="text-sm text-[var(--text-secondary)]">Producto no encontrado.</p>
        <Link href="/admin" className="mt-4 inline-block text-sm text-[var(--accent)] hover:underline">
          Volver al panel
        </Link>
      </>
    );
  }

  return <ProductForm initial={product} />;
}

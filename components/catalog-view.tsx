"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { categories, type CategoryId } from "@/lib/data";
import { useProducts } from "@/components/products-provider";

type SortOrder = "asc" | "desc";

export function CatalogView() {
  const { products } = useProducts();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const categoria = searchParams.get("categoria") as CategoryId | null;
  const orden = (searchParams.get("orden") as SortOrder | null) ?? "asc";

  const filtered = products
    .filter((p) => !categoria || p.category === categoria)
    .sort((a, b) => (orden === "asc" ? a.price - b.price : b.price - a.price));

  const activeCategory = categories.find((c) => c.id === categoria);

  function updateParam(key: string, value: string | null) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="p-4 lg:p-6">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-lg font-semibold text-[var(--text-primary)]">
            {activeCategory ? activeCategory.label : "Catálogo"}
          </h1>
          <p className="text-sm text-[var(--text-muted)]">
            {filtered.length} producto{filtered.length !== 1 ? "s" : ""}
            {activeCategory ? ` en ${activeCategory.label.toLowerCase()}` : ""}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <label className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
            Ordenar por precio
            <select
              value={orden}
              onChange={(e) => updateParam("orden", e.target.value)}
              className="h-9 rounded-md border border-[var(--panel-border)] bg-[var(--panel)] px-2 text-sm text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
            >
              <option value="asc">Menor a mayor</option>
              <option value="desc">Mayor a menor</option>
            </select>
          </label>
        </div>
      </div>

      {/* Mobile category chips */}
      <div className="mb-4 flex gap-2 overflow-x-auto lg:hidden">
        <button
          type="button"
          onClick={() => updateParam("categoria", null)}
          className={`shrink-0 rounded-md border px-3 py-1.5 text-xs font-semibold transition-colors ${
            !categoria
              ? "border-[var(--accent)] bg-[var(--accent)] text-white"
              : "border-[var(--panel-border)] bg-[var(--panel)] text-[var(--text-primary)]"
          }`}
        >
          Todos
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => updateParam("categoria", cat.id)}
            className={`shrink-0 rounded-md border px-3 py-1.5 text-xs font-semibold transition-colors ${
              categoria === cat.id
                ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                : "border-[var(--panel-border)] bg-[var(--panel)] text-[var(--text-primary)]"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-xl border border-[var(--panel-border)] bg-[var(--panel)] p-8 text-center">
          <p className="text-sm text-[var(--text-secondary)]">No hay productos en esta categoría.</p>
          <Link href="/catalogo" className="mt-3 inline-block text-sm text-[var(--accent)] hover:underline">
            Ver todo el catálogo
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

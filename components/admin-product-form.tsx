"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { buildProductFromForm, useProducts } from "@/components/products-provider";
import { categories, formatPrice, type CategoryId, type Product } from "@/lib/data";

type ProductFormProps = {
  initial?: Product;
};

export function ProductForm({ initial }: ProductFormProps) {
  const router = useRouter();
  const { saveProduct } = useProducts();
  const [error, setError] = useState<string | null>(null);

  const specs = initial?.specs ?? {};
  const specKeys = Object.keys(specs).filter((k) => k !== "Marca" && k !== "Modelo");
  const extraKey = specKeys[0] ?? "";
  const extraValue = extraKey ? specs[extraKey] : "";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);

    const name = String(fd.get("name") ?? "").trim();
    const brand = String(fd.get("brand") ?? "").trim();
    const priceRaw = String(fd.get("price") ?? "").replace(/\./g, "");
    const price = Number(priceRaw);

    if (!name || !brand || !price || price <= 0) {
      setError("Completá nombre, marca y un precio válido.");
      return;
    }

    const product = buildProductFromForm({
      id: initial?.id,
      name,
      brand,
      price,
      category: fd.get("category") as CategoryId,
      featured: fd.get("featured") === "on",
      installments: String(fd.get("installments") ?? "").trim(),
      specMarca: String(fd.get("specMarca") ?? brand).trim(),
      specModelo: String(fd.get("specModelo") ?? name).trim(),
      specExtra: String(fd.get("specExtra") ?? "").trim(),
      specExtraValue: String(fd.get("specExtraValue") ?? "").trim(),
    });

    if (initial?.image) product.image = initial.image;
    saveProduct(product);
    router.push("/admin");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-4 rounded-xl border border-[var(--panel-border)] bg-[var(--panel)] p-5">
      <h2 className="text-lg font-semibold text-[var(--text-primary)]">
        {initial ? "Editar producto" : "Nuevo producto"}
      </h2>

      {error && (
        <p className="rounded-md border border-[var(--promo)]/40 bg-[var(--promo)]/10 px-3 py-2 text-sm text-[var(--promo)]">
          {error}
        </p>
      )}

      <Field label="Nombre" name="name" defaultValue={initial?.name} required />
      <Field label="Marca" name="brand" defaultValue={initial?.brand} required />

      <label className="block text-sm">
        <span className="mb-1 block text-[var(--text-secondary)]">Categoría</span>
        <select
          name="category"
          defaultValue={initial?.category ?? "gpu"}
          className="h-10 w-full rounded-md border border-[var(--panel-border)] bg-[var(--ground)] px-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
        >
          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.label}
            </option>
          ))}
        </select>
      </label>

      <Field
        label="Precio (ARS, sin puntos)"
        name="price"
        type="number"
        defaultValue={initial?.price}
        required
        placeholder="1250000"
      />

      <Field
        label="Cuotas (opcional)"
        name="installments"
        defaultValue={initial?.installments}
        placeholder="6 cuotas sin interés"
      />

      <label className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
        <input
          type="checkbox"
          name="featured"
          defaultChecked={initial?.featured ?? false}
          className="rounded border-[var(--panel-border)]"
        />
        Producto destacado (aparece en home)
      </label>

      <fieldset className="space-y-3 rounded-md border border-[var(--panel-border)] bg-[var(--ground)] p-4">
        <legend className="px-1 text-sm font-medium text-[var(--text-primary)]">Características</legend>
        <Field label="Marca (spec)" name="specMarca" defaultValue={specs.Marca ?? initial?.brand} />
        <Field label="Modelo (spec)" name="specModelo" defaultValue={specs.Modelo ?? initial?.name} />
        <Field label="Spec adicional (ej. RAM, VRAM)" name="specExtra" defaultValue={extraKey} />
        <Field label="Valor spec adicional" name="specExtraValue" defaultValue={extraValue} />
      </fieldset>

      <p className="text-[11px] text-[var(--text-muted)]">
        La imagen se genera automáticamente como placeholder demo. Reemplazable en Fase 2.
      </p>

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          className="h-10 rounded-md bg-[var(--accent)] px-5 text-sm font-medium text-white hover:bg-[var(--accent-hover)]"
        >
          {initial ? "Guardar cambios" : "Crear producto"}
        </button>
        <Link
          href="/admin"
          className="flex h-10 items-center rounded-md border border-[var(--panel-border)] px-4 text-sm text-[var(--text-secondary)] hover:bg-[var(--ground)]"
        >
          Cancelar
        </Link>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  defaultValue,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  defaultValue?: string | number;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block text-[var(--text-secondary)]">{label}</span>
      <input
        name={name}
        type={type}
        defaultValue={defaultValue}
        required={required}
        placeholder={placeholder}
        className="h-10 w-full rounded-md border border-[var(--panel-border)] bg-[var(--ground)] px-3 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none"
      />
    </label>
  );
}

export function AdminProductList() {
  const { products, deleteProduct, resetProducts } = useProducts();

  return (
    <div>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-lg font-semibold text-[var(--text-primary)]">Productos</h1>
          <p className="text-sm text-[var(--text-muted)]">{products.length} en catálogo (persistido en demo local)</p>
        </div>
        <button
          type="button"
          onClick={() => {
            if (confirm("¿Restaurar catálogo inicial demo? Se pierden cambios locales.")) {
              resetProducts();
            }
          }}
          className="text-xs text-[var(--text-muted)] hover:text-[var(--promo)]"
        >
          Restaurar catálogo demo
        </button>
      </div>

      <div className="overflow-hidden rounded-xl border border-[var(--panel-border)]">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-[var(--panel-border)] bg-[var(--panel)] text-xs uppercase tracking-wide text-[var(--text-muted)]">
            <tr>
              <th className="px-4 py-3 font-medium">Producto</th>
              <th className="hidden px-4 py-3 font-medium sm:table-cell">Categoría</th>
              <th className="px-4 py-3 font-medium">Precio</th>
              <th className="px-4 py-3 font-medium">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--panel-border)] bg-[var(--ground)]">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-[var(--panel)]/50">
                <td className="px-4 py-3">
                  <p className="font-medium text-[var(--text-primary)]">{product.name}</p>
                  <p className="text-xs text-[var(--text-muted)]">{product.brand}</p>
                </td>
                <td className="hidden px-4 py-3 text-[var(--text-secondary)] sm:table-cell">
                  {product.category}
                  {product.featured && (
                    <span className="ml-2 text-[10px] text-[var(--accent)]">destacado</span>
                  )}
                </td>
                <td className="px-4 py-3 font-mono tabular-nums text-[var(--accent)]">
                  {formatPrice(product.price)}
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href={`/admin/producto/${product.id}`}
                      className="text-xs text-[var(--accent)] hover:underline"
                    >
                      Editar
                    </Link>
                    <Link
                      href={`/producto/${product.id}`}
                      className="text-xs text-[var(--text-muted)] hover:underline"
                    >
                      Ver
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        if (confirm(`¿Eliminar "${product.name}"?`)) deleteProduct(product.id);
                      }}
                      className="text-xs text-[var(--promo)] hover:underline"
                    >
                      Eliminar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

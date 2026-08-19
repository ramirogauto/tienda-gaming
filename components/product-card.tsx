import Image from "next/image";
import Link from "next/link";
import { formatPrice, type Product } from "@/lib/data";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-[var(--panel-border)] bg-[var(--panel)] transition-colors hover:border-[var(--accent)]">
      <Link href={`/producto/${product.id}`} className="relative block aspect-square overflow-hidden bg-[var(--ground)]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          unoptimized
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-3">
        <Link
          href={`/producto/${product.id}`}
          className="line-clamp-2 text-sm font-medium leading-snug text-[var(--text-primary)] hover:text-[var(--accent)]"
        >
          {product.name}
        </Link>
        <p className="font-mono text-base font-semibold tabular-nums text-[var(--accent)]">
          {formatPrice(product.price)}
        </p>
        {product.installments && (
          <p className="text-[11px] text-[var(--text-muted)]">{product.installments}</p>
        )}
        <Link
          href={`/producto/${product.id}`}
          className="mt-auto flex h-9 items-center justify-center gap-1.5 rounded-md bg-[var(--accent)] text-xs font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
        >
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
          </svg>
          Agregar al carrito
        </Link>
      </div>
    </article>
  );
}

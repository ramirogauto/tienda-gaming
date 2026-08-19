import Image from "next/image";
import Link from "next/link";
import { AddToCartButton } from "@/components/add-to-cart-button";
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
        <div className="mt-auto">
          <AddToCartButton productId={product.id} className="flex h-9 w-full items-center justify-center gap-1.5 rounded-md bg-[var(--accent)] text-xs font-medium text-white transition-colors hover:bg-[var(--accent-hover)]" />
        </div>
      </div>
    </article>
  );
}

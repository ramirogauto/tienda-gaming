"use client";

import { useCart } from "@/components/cart-provider";

type AddToCartButtonProps = {
  productId: string;
  className?: string;
  label?: string;
};

export function AddToCartButton({
  productId,
  className = "",
  label = "Agregar al carrito",
}: AddToCartButtonProps) {
  const { addItem } = useCart();

  return (
    <button
      type="button"
      onClick={() => addItem(productId)}
      className={
        className ||
        "flex h-9 items-center justify-center gap-1.5 rounded-md bg-[var(--accent)] text-xs font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
      }
    >
      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
      {label}
    </button>
  );
}

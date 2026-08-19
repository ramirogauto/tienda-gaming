import { CartView } from "@/components/cart-view";
import { StoreShell } from "@/components/store-shell";

export default function CarritoPage() {
  return (
    <StoreShell showTrustBar={false}>
      <div className="p-4 lg:p-6">
        <h1 className="mb-6 text-lg font-semibold text-[var(--text-primary)]">Carrito</h1>
        <CartView />
      </div>
    </StoreShell>
  );
}

import { CheckoutView } from "@/components/checkout-view";
import { StoreShell } from "@/components/store-shell";

export default function CheckoutPage() {
  return (
    <StoreShell showTrustBar={false}>
      <div className="p-4 lg:p-6">
        <h1 className="mb-6 text-lg font-semibold text-[var(--text-primary)]">Checkout</h1>
        <CheckoutView />
      </div>
    </StoreShell>
  );
}

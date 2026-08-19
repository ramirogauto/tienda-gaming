"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/components/cart-provider";
import { formatPrice } from "@/lib/data";

type Step = "envio" | "pago" | "confirmacion";

export function CheckoutView() {
  const router = useRouter();
  const { getLineItems, total, clearCart } = useCart();
  const lines = getLineItems();
  const [step, setStep] = useState<Step>("envio");
  const [payment, setPayment] = useState<"tarjeta" | "transferencia">("tarjeta");

  if (lines.length === 0 && step !== "confirmacion") {
    return (
      <div className="rounded-xl border border-[var(--panel-border)] bg-[var(--panel)] p-10 text-center">
        <p className="text-sm text-[var(--text-secondary)]">No hay productos para checkout.</p>
        <Link href="/catalogo" className="mt-4 inline-block text-sm text-[var(--accent)] hover:underline">
          Ir al catálogo
        </Link>
      </div>
    );
  }

  if (step === "confirmacion") {
    return (
      <div className="mx-auto max-w-lg rounded-xl border border-[var(--panel-border)] bg-[var(--panel)] p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent)]/20 text-2xl text-[var(--accent)]">
          ✓
        </div>
        <h1 className="mt-4 text-xl font-semibold text-[var(--text-primary)]">Pedido simulado confirmado</h1>
        <p className="mt-2 text-sm text-[var(--text-secondary)]">
          Este es un checkout demo. No se realizó ningún cobro real.
        </p>
        <p className="mt-4 rounded-md border border-[var(--panel-border)] bg-[var(--ground)] p-3 text-xs text-[var(--text-muted)]">
          Demo MVP · tienda-gaming · Sin pagos reales en Fase 1
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex h-10 items-center rounded-md bg-[var(--accent)] px-5 text-sm font-medium text-white hover:bg-[var(--accent-hover)]"
        >
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
      <div className="rounded-xl border border-[var(--panel-border)] bg-[var(--panel)] p-5">
        <div className="mb-6 flex gap-2 text-xs">
          {(["envio", "pago"] as const).map((s, i) => (
            <span
              key={s}
              className={`rounded-md px-2 py-1 font-medium ${
                step === s ? "bg-[var(--accent)] text-white" : "bg-[var(--ground)] text-[var(--text-muted)]"
              }`}
            >
              {i + 1}. {s === "envio" ? "Envío" : "Pago"}
            </span>
          ))}
        </div>

        {step === "envio" && (
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setStep("pago");
            }}
          >
            <h2 className="text-sm font-semibold text-[var(--text-primary)]">Datos de envío</h2>
            <Field label="Nombre completo" name="nombre" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Teléfono" name="telefono" required />
            <Field label="Dirección" name="direccion" required />
            <Field label="Ciudad" name="ciudad" required />
            <Field label="Código postal" name="cp" required />
            <button type="submit" className="h-10 rounded-md bg-[var(--accent)] px-5 text-sm font-medium text-white hover:bg-[var(--accent-hover)]">
              Continuar al pago
            </button>
          </form>
        )}

        {step === "pago" && (
          <div className="space-y-4">
            <h2 className="text-sm font-semibold text-[var(--text-primary)]">Método de pago</h2>
            <p className="text-xs text-[var(--text-muted)]">Selección visual — sin cobro real (demo)</p>
            <div className="grid gap-2 sm:grid-cols-2">
              {(
                [
                  { id: "tarjeta", label: "Tarjeta de crédito/débito" },
                  { id: "transferencia", label: "Transferencia bancaria" },
                ] as const
              ).map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setPayment(opt.id)}
                  className={`rounded-md border p-4 text-left text-sm transition-colors ${
                    payment === opt.id
                      ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--text-primary)]"
                      : "border-[var(--panel-border)] bg-[var(--ground)] text-[var(--text-secondary)]"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            {payment === "tarjeta" && (
              <div className="space-y-3 rounded-md border border-[var(--panel-border)] bg-[var(--ground)] p-4">
                <Field label="Número de tarjeta" name="tarjeta" placeholder="1234 5678 9012 3456" />
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Vencimiento" name="venc" placeholder="MM/AA" />
                  <Field label="CVV" name="cvv" placeholder="123" />
                </div>
              </div>
            )}
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep("envio")}
                className="h-10 rounded-md border border-[var(--panel-border)] px-4 text-sm text-[var(--text-secondary)] hover:bg-[var(--ground)]"
              >
                Volver
              </button>
              <button
                type="button"
                onClick={() => {
                  clearCart();
                  setStep("confirmacion");
                  router.refresh();
                }}
                className="h-10 rounded-md bg-[var(--accent)] px-5 text-sm font-medium text-white hover:bg-[var(--accent-hover)]"
              >
                Confirmar pedido (demo)
              </button>
            </div>
          </div>
        )}
      </div>

      <aside className="h-fit rounded-xl border border-[var(--panel-border)] bg-[var(--panel)] p-5">
        <h2 className="text-sm font-semibold text-[var(--text-primary)]">Tu pedido</h2>
        <ul className="mt-3 space-y-2">
          {lines.map(({ product, quantity }) => (
            <li key={product.id} className="flex justify-between gap-2 text-xs">
              <span className="text-[var(--text-secondary)]">
                {product.name} × {quantity}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex justify-between border-t border-[var(--panel-border)] pt-3 text-sm">
          <span className="text-[var(--text-secondary)]">Total</span>
          <span className="font-mono font-semibold tabular-nums text-[var(--accent)]">{formatPrice(total)}</span>
        </div>
      </aside>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block text-[var(--text-secondary)]">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-10 w-full rounded-md border border-[var(--panel-border)] bg-[var(--ground)] px-3 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none"
      />
    </label>
  );
}

import Link from "next/link";
import { StoreShell } from "@/components/store-shell";

export default function LoginPage() {
  return (
    <StoreShell showTrustBar={false}>
      <div className="flex justify-center p-4 lg:p-6">
        <form className="w-full max-w-md rounded-xl border border-[var(--panel-border)] bg-[var(--panel)] p-6">
          <h1 className="text-lg font-semibold text-[var(--text-primary)]">Ingresar</h1>
          <p className="mt-1 text-sm text-[var(--text-muted)]">Demo MVP — sin autenticación real</p>

          <div className="mt-6 space-y-4">
            <label className="block text-sm">
              <span className="mb-1 block text-[var(--text-secondary)]">Email</span>
              <input
                type="email"
                className="h-10 w-full rounded-md border border-[var(--panel-border)] bg-[var(--ground)] px-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
                placeholder="tu@email.com"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block text-[var(--text-secondary)]">Contraseña</span>
              <input
                type="password"
                className="h-10 w-full rounded-md border border-[var(--panel-border)] bg-[var(--ground)] px-3 text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
              />
            </label>
          </div>

          <button
            type="button"
            className="mt-6 flex h-10 w-full items-center justify-center rounded-md bg-[var(--accent)] text-sm font-medium text-white hover:bg-[var(--accent-hover)]"
          >
            Iniciar sesión (demo)
          </button>

          <p className="mt-4 text-center text-xs text-[var(--text-muted)]">
            ¿No tenés cuenta?{" "}
            <span className="text-[var(--accent)]">Registrarse (demo)</span>
          </p>

          <Link href="/" className="mt-4 block text-center text-xs text-[var(--text-muted)] hover:text-[var(--accent)]">
            ← Volver al inicio
          </Link>
        </form>
      </div>
    </StoreShell>
  );
}

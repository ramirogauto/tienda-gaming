import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-full flex-col items-center justify-center bg-[var(--ground)] px-4 py-16 text-center">
      <p className="font-mono text-6xl font-bold text-[var(--accent)]">404</p>
      <h1 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">Página no encontrada</h1>
      <p className="mt-2 max-w-sm text-sm text-[var(--text-muted)]">
        La ruta que buscás no existe en esta demo del MVP.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--accent-hover)]"
        >
          Ir al inicio
        </Link>
        <Link
          href="/catalogo"
          className="rounded-md border border-[var(--panel-border)] px-4 py-2 text-sm text-[var(--text-secondary)] hover:bg-[var(--panel)]"
        >
          Ver catálogo
        </Link>
      </div>
    </div>
  );
}

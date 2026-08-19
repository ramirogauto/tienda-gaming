import Link from "next/link";

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-full bg-[var(--ground)]">
      <header className="border-b border-[var(--panel-border)] bg-[var(--panel)]">
        <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-4 lg:px-6">
          <div className="flex items-center gap-4">
            <Link href="/admin" className="font-semibold text-[var(--text-primary)]">
              Panel admin
            </Link>
            <span className="hidden text-xs text-[var(--text-muted)] sm:inline">tienda-gaming · demo</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Link href="/" className="text-[var(--text-secondary)] hover:text-[var(--accent)]">
              Ver tienda
            </Link>
            <Link
              href="/admin/producto/nuevo"
              className="rounded-md bg-[var(--accent)] px-3 py-1.5 text-xs font-medium text-white hover:bg-[var(--accent-hover)]"
            >
              + Nuevo producto
            </Link>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-[1200px] p-4 lg:p-6">{children}</main>
    </div>
  );
}

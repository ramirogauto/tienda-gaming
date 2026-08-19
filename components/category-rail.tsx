import Link from "next/link";
import { categories } from "@/lib/data";

export function CategoryRail() {
  return (
    <aside className="hidden w-[220px] shrink-0 border-r border-[var(--panel-border)] bg-[var(--panel)] lg:block">
      <nav aria-label="Categorías" className="sticky top-14 max-h-[calc(100vh-3.5rem)] overflow-y-auto p-3">
        {categories.map((category) => (
          <div key={category.id} className="mb-1">
            <Link
              href={`/catalogo?categoria=${category.id}`}
              className="flex items-center justify-between rounded-md px-2 py-2 text-xs font-semibold tracking-wide text-[var(--text-primary)] transition-colors hover:bg-[var(--ground)]"
            >
              {category.label}
              <svg className="h-3 w-3 text-[var(--text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <ul className="ml-2 border-l border-[var(--panel-border)] pl-2">
              {category.subcategories.map((sub) => (
                <li key={sub}>
                  <Link
                    href={`/catalogo?categoria=${category.id}`}
                    className="block rounded px-2 py-1.5 text-xs text-[var(--text-secondary)] transition-colors hover:bg-[var(--ground)] hover:text-[var(--text-primary)]"
                  >
                    {sub}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="mt-6 space-y-3 border-t border-[var(--panel-border)] pt-4">
          <InfoBlock title="ENVÍOS A TODO EL PAÍS">
            Gratis en compras superiores a $75.000
          </InfoBlock>
          <InfoBlock title="PAGOS SEGUROS">
            Tarjetas · Transferencia · MercadoPago
          </InfoBlock>
          <InfoBlock title="ATENCIÓN AL CLIENTE">
            Lun a Vie 10 a 18 hs
          </InfoBlock>
        </div>
      </nav>
    </aside>
  );
}

function InfoBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-md border border-[var(--panel-border)] bg-[var(--ground)] p-2.5">
      <p className="text-[10px] font-semibold tracking-wide text-[var(--accent)]">{title}</p>
      <p className="mt-1 text-[11px] leading-snug text-[var(--text-muted)]">{children}</p>
    </div>
  );
}

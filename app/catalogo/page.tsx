import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

export default function CatalogoPage() {
  return (
    <div className="min-h-full bg-[var(--ground)]">
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-4 py-16 text-center">
        <h1 className="text-xl font-semibold text-[var(--text-primary)]">Catálogo</h1>
        <p className="mt-2 text-sm text-[var(--text-muted)]">Pantalla en construcción — MVP demo</p>
        <Link href="/" className="mt-6 inline-block text-sm text-[var(--accent)] hover:underline">
          ← Volver al inicio
        </Link>
      </main>
    </div>
  );
}

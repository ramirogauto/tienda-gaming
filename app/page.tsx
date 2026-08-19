import Link from "next/link";
import Image from "next/image";
import { heroPlaceholder } from "@/lib/placeholders";
import { CategoryRail } from "@/components/category-rail";
import { ProductCard } from "@/components/product-card";
import { SiteHeader } from "@/components/site-header";
import { TrustBar } from "@/components/trust-bar";
import { categories, products } from "@/lib/data";

export default function Home() {
  const featured = products.filter((p) => p.featured);

  return (
    <div className="flex min-h-full flex-col bg-[var(--ground)]">
      <SiteHeader cartCount={2} />

      <div className="mx-auto flex w-full max-w-[1400px] flex-1">
        <CategoryRail />

        <main className="min-w-0 flex-1">
          {/* Mobile categories */}
          <div className="flex gap-2 overflow-x-auto border-b border-[var(--panel-border)] bg-[var(--panel)] p-3 lg:hidden">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/catalogo?categoria=${cat.id}`}
                className="shrink-0 rounded-md border border-[var(--panel-border)] bg-[var(--ground)] px-3 py-1.5 text-xs font-semibold text-[var(--text-primary)]"
              >
                {cat.label}
              </Link>
            ))}
          </div>

          {/* Hero */}
          <section className="border-b border-[var(--panel-border)] p-4 lg:p-6">
            <div className="relative overflow-hidden rounded-xl border border-[var(--panel-border)] bg-[var(--panel)]">
              <div className="relative flex min-h-[180px] flex-col justify-center gap-3 p-6 sm:min-h-[220px] sm:p-8 lg:min-h-[260px]">
                <div className="relative z-10 max-w-md">
                  <h1 className="text-2xl font-bold leading-tight text-[var(--text-primary)] sm:text-3xl">
                    ARMÁ TU SETUP
                    <span className="block text-[var(--accent)]">AL MÁXIMO NIVEL</span>
                  </h1>
                  <p className="mt-2 text-sm text-[var(--text-secondary)]">
                    Componentes premium para gamers exigentes
                  </p>
                  <Link
                    href="/catalogo"
                    className="mt-4 inline-flex h-10 items-center rounded-md bg-[var(--accent)] px-5 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
                  >
                    Ver ofertas
                  </Link>
                </div>
                <Image
                  src={heroPlaceholder()}
                  alt=""
                  width={1200}
                  height={400}
                  unoptimized
                  className="absolute inset-0 h-full w-full object-cover opacity-30"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--panel)] via-[var(--panel)]/90 to-transparent" />
              </div>
            </div>
          </section>

          {/* Featured products */}
          <section className="p-4 lg:p-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <h2 className="text-sm font-semibold tracking-wide text-[var(--text-primary)]">
                PRODUCTOS DESTACADOS
              </h2>
              <Link
                href="/catalogo"
                className="text-xs font-medium text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)]"
              >
                Ver todos →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
              {featured.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>

          <p className="px-4 pb-4 text-center text-[10px] text-[var(--text-muted)] lg:px-6 lg:pb-6">
            Contenido demo · tienda-gaming MVP · precios y productos ilustrativos
          </p>
        </main>
      </div>

      <TrustBar />
    </div>
  );
}

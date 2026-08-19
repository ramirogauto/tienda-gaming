"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useCart } from "@/components/cart-provider";
import { useAuth } from "@/components/auth-provider";

export function SiteHeader() {
  const router = useRouter();
  const { count } = useCart();
  const { user, logout, hydrated } = useAuth();
  const [query, setQuery] = useState("");

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    const q = query.trim();
    if (!q) {
      router.push("/catalogo");
      return;
    }
    router.push(`/catalogo?q=${encodeURIComponent(q)}`);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--panel-border)] bg-[var(--panel)]">
      <div className="mx-auto flex h-14 max-w-[1400px] items-center gap-4 px-4 lg:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[var(--accent)] text-sm font-bold text-white">
            TG
          </span>
          <span className="hidden font-semibold tracking-tight text-[var(--text-primary)] sm:block">
            tienda-gaming
          </span>
        </Link>

        <form onSubmit={handleSearch} className="flex min-w-0 flex-1 items-center">
          <label className="relative w-full max-w-2xl">
            <span className="sr-only">Buscar productos</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar productos, marcas y más…"
              className="h-9 w-full rounded-md border border-[var(--panel-border)] bg-[var(--ground)] pl-3 pr-10 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded text-[var(--text-muted)] hover:text-[var(--accent)]"
              aria-label="Buscar"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
              </svg>
            </button>
          </label>
        </form>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/admin"
            className="hidden rounded-md px-3 py-1.5 text-sm text-[var(--text-muted)] transition-colors hover:bg-[var(--ground)] hover:text-[var(--text-primary)] md:block"
          >
            Admin
          </Link>
          {hydrated && user ? (
            <div className="hidden items-center gap-2 sm:flex">
              <span className="max-w-[120px] truncate text-xs text-[var(--text-secondary)] lg:max-w-[160px]">
                {user.name}
              </span>
              <button
                type="button"
                onClick={logout}
                className="rounded-md px-2 py-1.5 text-xs text-[var(--text-muted)] hover:bg-[var(--ground)] hover:text-[var(--text-primary)]"
              >
                Salir
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="hidden rounded-md px-3 py-1.5 text-sm text-[var(--text-secondary)] transition-colors hover:bg-[var(--ground)] hover:text-[var(--text-primary)] sm:block"
            >
              Mi cuenta
            </Link>
          )}
          <Link
            href="/carrito"
            className="relative flex items-center gap-2 rounded-md border border-[var(--panel-border)] bg-[var(--ground)] px-3 py-1.5 text-sm text-[var(--text-primary)] transition-colors hover:border-[var(--accent)]"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            <span className="hidden sm:inline">Carrito</span>
            {count > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--accent)] px-1 text-[10px] font-semibold text-white">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}

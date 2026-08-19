import { Suspense } from "react";
import { CatalogView } from "@/components/catalog-view";
import { StoreShell } from "@/components/store-shell";

export default function CatalogoPage() {
  return (
    <StoreShell>
      <Suspense fallback={<CatalogSkeleton />}>
        <CatalogView />
      </Suspense>
    </StoreShell>
  );
}

function CatalogSkeleton() {
  return (
    <div className="p-4 lg:p-6">
      <div className="mb-4 h-8 w-48 animate-pulse rounded bg-[var(--panel)]" />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="aspect-[3/4] animate-pulse rounded-xl bg-[var(--panel)]" />
        ))}
      </div>
    </div>
  );
}

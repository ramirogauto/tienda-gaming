import { CategoryRail } from "@/components/category-rail";
import { SiteHeader } from "@/components/site-header";
import { TrustBar } from "@/components/trust-bar";

type StoreShellProps = {
  children: React.ReactNode;
  showTrustBar?: boolean;
};

export function StoreShell({ children, showTrustBar = true }: StoreShellProps) {
  return (
    <div className="flex min-h-full flex-col bg-[var(--ground)]">
      <SiteHeader />
      <div className="mx-auto flex w-full max-w-[1400px] flex-1">
        <CategoryRail />
        <div className="min-w-0 flex-1">{children}</div>
      </div>
      {showTrustBar && <TrustBar />}
    </div>
  );
}

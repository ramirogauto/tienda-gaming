import { ProductDetailLoader } from "@/components/product-detail-loader";
import { StoreShell } from "@/components/store-shell";

export default async function ProductoPage({
  params,
}: PageProps<"/producto/[id]">) {
  const { id } = await params;

  return (
    <StoreShell>
      <ProductDetailLoader id={id} />
    </StoreShell>
  );
}

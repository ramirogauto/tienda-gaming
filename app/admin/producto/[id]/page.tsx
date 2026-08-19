import { AdminShell } from "@/components/admin-shell";
import { EditProductClient } from "@/components/edit-product-client";

export default async function EditarProductoPage({
  params,
}: PageProps<"/admin/producto/[id]">) {
  const { id } = await params;
  return (
    <AdminShell>
      <EditProductClient id={id} />
    </AdminShell>
  );
}

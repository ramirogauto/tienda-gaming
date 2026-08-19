"use client";

import { ProductForm } from "@/components/admin-product-form";
import { AdminShell } from "@/components/admin-shell";

export default function NuevoProductoPage() {
  return (
    <AdminShell>
      <ProductForm />
    </AdminShell>
  );
}

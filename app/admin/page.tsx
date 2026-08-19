"use client";

import { AdminProductList } from "@/components/admin-product-form";
import { AdminShell } from "@/components/admin-shell";

export default function AdminPage() {
  return (
    <AdminShell>
      <AdminProductList />
    </AdminShell>
  );
}

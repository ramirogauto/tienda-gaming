import { AuthForm } from "@/components/auth-form";
import { StoreShell } from "@/components/store-shell";

export default function RegistroPage() {
  return (
    <StoreShell showTrustBar={false}>
      <div className="flex justify-center p-4 lg:p-6">
        <AuthForm mode="register" />
      </div>
    </StoreShell>
  );
}

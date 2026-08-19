"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/components/auth-provider";

type AuthFormProps = {
  mode: "login" | "register";
};

export function AuthForm({ mode }: AuthFormProps) {
  const router = useRouter();
  const { login } = useAuth();
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") ?? "").trim();
    const password = String(fd.get("password") ?? "").trim();
    const name = String(fd.get("name") ?? "").trim();

    if (!email || !password) {
      setError("Completá email y contraseña.");
      return;
    }
    if (mode === "register" && !name) {
      setError("Completá tu nombre.");
      return;
    }

    login({
      email,
      name: mode === "register" ? name : email.split("@")[0],
    });
    router.push("/");
    router.refresh();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md rounded-xl border border-[var(--panel-border)] bg-[var(--panel)] p-6"
    >
      <h1 className="text-lg font-semibold text-[var(--text-primary)]">
        {mode === "login" ? "Ingresar" : "Crear cuenta"}
      </h1>
      <p className="mt-1 text-sm text-[var(--text-muted)]">Demo MVP — sin autenticación real</p>

      {error && (
        <p className="mt-4 rounded-md border border-[var(--promo)]/40 bg-[var(--promo)]/10 px-3 py-2 text-sm text-[var(--promo)]">
          {error}
        </p>
      )}

      <div className="mt-6 space-y-4">
        {mode === "register" && (
          <Field label="Nombre" name="name" placeholder="Tu nombre" />
        )}
        <Field label="Email" name="email" type="email" placeholder="tu@email.com" />
        <Field label="Contraseña" name="password" type="password" />
      </div>

      <button
        type="submit"
        className="mt-6 flex h-10 w-full items-center justify-center rounded-md bg-[var(--accent)] text-sm font-medium text-white hover:bg-[var(--accent-hover)]"
      >
        {mode === "login" ? "Iniciar sesión" : "Registrarse"}
      </button>

      <p className="mt-4 text-center text-xs text-[var(--text-muted)]">
        {mode === "login" ? (
          <>
            ¿No tenés cuenta?{" "}
            <Link href="/registro" className="text-[var(--accent)] hover:underline">
              Registrarse
            </Link>
          </>
        ) : (
          <>
            ¿Ya tenés cuenta?{" "}
            <Link href="/login" className="text-[var(--accent)] hover:underline">
              Ingresar
            </Link>
          </>
        )}
      </p>

      <Link href="/" className="mt-4 block text-center text-xs text-[var(--text-muted)] hover:text-[var(--accent)]">
        ← Volver al inicio
      </Link>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block text-[var(--text-secondary)]">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="h-10 w-full rounded-md border border-[var(--panel-border)] bg-[var(--ground)] px-3 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none"
      />
    </label>
  );
}

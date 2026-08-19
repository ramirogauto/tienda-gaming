const items = [
  {
    title: "COMPRA PROTEGIDA",
    description: "Garantía oficial en todos los productos",
  },
  {
    title: "HASTA 12 CUOTAS",
    description: "Con tarjetas seleccionadas",
  },
  {
    title: "CALIDAD GARANTIZADA",
    description: "Productos 100% originales",
  },
  {
    title: "SOPORTE POST VENTA",
    description: "Asesoramiento técnico",
  },
];

export function TrustBar() {
  return (
    <div className="border-t border-[var(--panel-border)] bg-[var(--panel)]">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-px bg-[var(--panel-border)] md:grid-cols-4">
        {items.map((item) => (
          <div key={item.title} className="flex flex-col gap-1 bg-[var(--panel)] px-4 py-4 text-center md:py-5">
            <p className="text-[10px] font-semibold tracking-wide text-[var(--accent)]">{item.title}</p>
            <p className="text-[11px] text-[var(--text-muted)]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

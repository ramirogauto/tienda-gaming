import { productPlaceholder } from "./placeholders";

export type CategoryId = "gpu" | "notebooks" | "perifericos";

export type Product = {
  id: string;
  name: string;
  price: number;
  category: CategoryId;
  image: string;
  featured?: boolean;
  installments?: string;
};

export type Category = {
  id: CategoryId;
  label: string;
  subcategories: string[];
};

export const categories: Category[] = [
  {
    id: "gpu",
    label: "GPU",
    subcategories: ["NVIDIA GeForce", "AMD Radeon", "Tarjetas nuevas", "Ofertas GPU"],
  },
  {
    id: "notebooks",
    label: "NOTEBOOKS",
    subcategories: ["Gaming", "Diseño / Creación", "Workstations", "Ofertas Notebooks"],
  },
  {
    id: "perifericos",
    label: "PERIFÉRICOS",
    subcategories: ["Teclados", "Mouse", "Auriculares", "Monitores", "Sillas Gaming", "Ofertas Periféricos"],
  },
];

export const products: Product[] = [
  {
    id: "rtx-4070-ti",
    name: "ASUS RTX 4070 Ti",
    price: 1_250_000,
    category: "gpu",
    image: productPlaceholder("RTX 4070 Ti", 210),
    featured: true,
    installments: "6 cuotas sin interés",
  },
  {
    id: "rtx-4060-ti",
    name: "MSI RTX 4060 Ti",
    price: 890_000,
    category: "gpu",
    image: productPlaceholder("RTX 4060 Ti", 205),
    featured: true,
    installments: "6 cuotas sin interés",
  },
  {
    id: "rog-strix-g16",
    name: "ASUS ROG Strix G16",
    price: 2_450_000,
    category: "notebooks",
    image: productPlaceholder("ROG Strix G16", 260),
    featured: true,
    installments: "12 cuotas sin interés",
  },
  {
    id: "legion-5",
    name: "Lenovo Legion 5",
    price: 1_890_000,
    category: "notebooks",
    image: productPlaceholder("Legion 5", 250),
    featured: true,
    installments: "12 cuotas sin interés",
  },
  {
    id: "cloud-iii",
    name: "HyperX Cloud III",
    price: 185_000,
    category: "perifericos",
    image: productPlaceholder("Cloud III", 190),
    featured: true,
    installments: "3 cuotas sin interés",
  },
  {
    id: "aoc-24",
    name: 'AOC 24" 144Hz',
    price: 320_000,
    category: "perifericos",
    image: productPlaceholder('AOC 24"', 200),
    featured: true,
    installments: "6 cuotas sin interés",
  },
  {
    id: "g-pro-x",
    name: "Logitech G Pro X",
    price: 145_000,
    category: "perifericos",
    image: productPlaceholder("G Pro X", 180),
    featured: true,
    installments: "3 cuotas sin interés",
  },
  {
    id: "g502-hero",
    name: "Logitech G502 HERO",
    price: 89_000,
    category: "perifericos",
    image: productPlaceholder("G502 HERO", 170),
    featured: true,
    installments: "3 cuotas sin interés",
  },
];

export function formatPrice(amount: number): string {
  return `$${amount.toLocaleString("es-AR")}`;
}

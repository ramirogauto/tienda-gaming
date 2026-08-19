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
  brand: string;
  specs: Record<string, string>;
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

export const defaultProducts: Product[] = [
  {
    id: "rtx-4070-ti",
    name: "ASUS RTX 4070 Ti",
    brand: "ASUS",
    price: 1_250_000,
    category: "gpu",
    image: productPlaceholder("RTX 4070 Ti", 210),
    featured: true,
    installments: "6 cuotas sin interés",
    specs: { Marca: "ASUS", Modelo: "TUF RTX 4070 Ti", VRAM: "12 GB GDDR6X", Bus: "PCIe 4.0" },
  },
  {
    id: "rtx-4060-ti",
    name: "MSI RTX 4060 Ti",
    brand: "MSI",
    price: 890_000,
    category: "gpu",
    image: productPlaceholder("RTX 4060 Ti", 205),
    featured: true,
    installments: "6 cuotas sin interés",
    specs: { Marca: "MSI", Modelo: "Ventus 4060 Ti", VRAM: "8 GB GDDR6", Bus: "PCIe 4.0" },
  },
  {
    id: "rog-strix-g16",
    name: "ASUS ROG Strix G16",
    brand: "ASUS",
    price: 2_450_000,
    category: "notebooks",
    image: productPlaceholder("ROG Strix G16", 260),
    featured: true,
    installments: "12 cuotas sin interés",
    specs: { Marca: "ASUS", Modelo: "G614", Procesador: "Intel Core i7", RAM: "16 GB", Pantalla: '16" 165Hz' },
  },
  {
    id: "legion-5",
    name: "Lenovo Legion 5",
    brand: "Lenovo",
    price: 1_890_000,
    category: "notebooks",
    image: productPlaceholder("Legion 5", 250),
    featured: true,
    installments: "12 cuotas sin interés",
    specs: { Marca: "Lenovo", Modelo: "Legion 5", Procesador: "AMD Ryzen 7", RAM: "16 GB", Pantalla: '15.6" 144Hz' },
  },
  {
    id: "cloud-iii",
    name: "HyperX Cloud III",
    brand: "HyperX",
    price: 185_000,
    category: "perifericos",
    image: productPlaceholder("Cloud III", 190),
    featured: true,
    installments: "3 cuotas sin interés",
    specs: { Marca: "HyperX", Modelo: "Cloud III", Conexión: "Cable 3.5 mm", Micrófono: "Desmontable" },
  },
  {
    id: "aoc-24",
    name: 'AOC 24" 144Hz',
    brand: "AOC",
    price: 320_000,
    category: "perifericos",
    image: productPlaceholder('AOC 24"', 200),
    featured: true,
    installments: "6 cuotas sin interés",
    specs: { Marca: "AOC", Modelo: "24G2", Tamaño: '24"', Resolución: "1920×1080", Refresh: "144 Hz" },
  },
  {
    id: "g-pro-x",
    name: "Logitech G Pro X",
    brand: "Logitech",
    price: 145_000,
    category: "perifericos",
    image: productPlaceholder("G Pro X", 180),
    featured: true,
    installments: "3 cuotas sin interés",
    specs: { Marca: "Logitech", Modelo: "G Pro X", Switches: "GX Blue", Layout: "TKL" },
  },
  {
    id: "g502-hero",
    name: "Logitech G502 HERO",
    brand: "Logitech",
    price: 89_000,
    category: "perifericos",
    image: productPlaceholder("G502 HERO", 170),
    featured: true,
    installments: "3 cuotas sin interés",
    specs: { Marca: "Logitech", Modelo: "G502 HERO", Sensor: "HERO 25K", DPI: "100–25.600" },
  },
];

export function formatPrice(amount: number): string {
  return `$${amount.toLocaleString("es-AR")}`;
}

/** Catálogo inicial del MVP (server / fallback). */
export const products = defaultProducts;

export function getProductById(id: string): Product | undefined {
  return defaultProducts.find((p) => p.id === id);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getCategoryLabel(id: CategoryId): string {
  return categories.find((c) => c.id === id)?.label ?? id;
}

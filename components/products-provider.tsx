"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { defaultProducts, slugify, type Product } from "@/lib/data";
import { productPlaceholder } from "@/lib/placeholders";

type ProductsContextValue = {
  products: Product[];
  hydrated: boolean;
  getProductById: (id: string) => Product | undefined;
  saveProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
  resetProducts: () => void;
};

const ProductsContext = createContext<ProductsContextValue | null>(null);
const STORAGE_KEY = "tienda-gaming-products";

function readStorage(): Product[] | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Product[];
    return Array.isArray(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function ProductsProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(defaultProducts);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setProducts(readStorage() ?? defaultProducts);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  }, [products, hydrated]);

  const getProductById = useCallback(
    (id: string) => products.find((p) => p.id === id),
    [products],
  );

  const saveProduct = useCallback((product: Product) => {
    setProducts((prev) => {
      const idx = prev.findIndex((p) => p.id === product.id);
      if (idx >= 0) {
        return prev.map((p) => (p.id === product.id ? product : p));
      }
      return [...prev, product];
    });
  }, []);

  const deleteProduct = useCallback((id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const resetProducts = useCallback(() => {
    setProducts(defaultProducts);
  }, []);

  const value = useMemo(
    () => ({
      products,
      hydrated,
      getProductById,
      saveProduct,
      deleteProduct,
      resetProducts,
    }),
    [products, hydrated, getProductById, saveProduct, deleteProduct, resetProducts],
  );

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
}

export function useProducts() {
  const ctx = useContext(ProductsContext);
  if (!ctx) throw new Error("useProducts must be used within ProductsProvider");
  return ctx;
}

export function buildProductFromForm(input: {
  id?: string;
  name: string;
  brand: string;
  price: number;
  category: Product["category"];
  featured: boolean;
  installments: string;
  specMarca: string;
  specModelo: string;
  specExtra: string;
  specExtraValue: string;
}): Product {
  const id = input.id ?? slugify(input.name);
  const specs: Record<string, string> = {
    Marca: input.specMarca || input.brand,
    Modelo: input.specModelo || input.name,
  };
  if (input.specExtra && input.specExtraValue) {
    specs[input.specExtra] = input.specExtraValue;
  }

  const hue = id.split("").reduce((n, c) => n + c.charCodeAt(0), 0) % 360;

  return {
    id,
    name: input.name,
    brand: input.brand,
    price: input.price,
    category: input.category,
    featured: input.featured,
    installments: input.installments || undefined,
    image: productPlaceholder(input.name.slice(0, 20), hue),
    specs,
  };
}

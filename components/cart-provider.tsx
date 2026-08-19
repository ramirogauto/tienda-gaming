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
import { useProducts } from "@/components/products-provider";
import type { Product } from "@/lib/data";

export type CartItem = {
  productId: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  count: number;
  total: number;
  addItem: (productId: string, quantity?: number) => void;
  removeItem: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getLineItems: () => { product: Product; quantity: number; subtotal: number }[];
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "tienda-gaming-cart";

function readStorage(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartItem[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const { getProductById } = useProducts();
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setItems(readStorage());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const addItem = useCallback((productId: string, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.productId === productId);
      if (existing) {
        return prev.map((i) =>
          i.productId === productId ? { ...i, quantity: i.quantity + quantity } : i,
        );
      }
      return [...prev, { productId, quantity }];
    });
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((i) => i.productId !== productId));
  }, []);

  const setQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity < 1) {
      setItems((prev) => prev.filter((i) => i.productId !== productId));
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.productId === productId ? { ...i, quantity } : i)),
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const getLineItems = useCallback(() => {
    return items
      .map((item) => {
        const product = getProductById(item.productId);
        if (!product) return null;
        return {
          product,
          quantity: item.quantity,
          subtotal: product.price * item.quantity,
        };
      })
      .filter((line): line is NonNullable<typeof line> => line !== null);
  }, [items, getProductById]);

  const value = useMemo(() => {
    const lineItems = getLineItems();
    return {
      items,
      count: items.reduce((sum, i) => sum + i.quantity, 0),
      total: lineItems.reduce((sum, l) => sum + l.subtotal, 0),
      addItem,
      removeItem,
      setQuantity,
      clearCart,
      getLineItems,
    };
  }, [items, addItem, removeItem, setQuantity, clearCart, getLineItems]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

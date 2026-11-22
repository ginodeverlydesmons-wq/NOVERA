"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
const CartContext = createContext(null);
export function useCart() { return useContext(CartContext); }

export default function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    try { setItems(JSON.parse(localStorage.getItem("novera-cart") || "[]")); } catch { setItems([]); }
    setReady(true);
  }, []);
  useEffect(() => { if (ready) localStorage.setItem("novera-cart", JSON.stringify(items)); }, [items, ready]);
  const add = (product, size = "M") => setItems(old => {
    const key = product.id + "-" + size;
    const found = old.find(item => item.key === key);
    return found ? old.map(item => item.key === key ? { ...item, quantity: item.quantity + 1 } : item) : [...old, { key, product, size, quantity: 1 }];
  });
  const remove = key => setItems(old => old.filter(item => item.key !== key));
  const change = (key, quantity) => setItems(old => old.map(item => item.key === key ? { ...item, quantity: Math.max(1, quantity) } : item));
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const value = useMemo(() => ({ items, add, remove, change, count, subtotal }), [items, count, subtotal]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

"use client";
import Link from "next/link";
import { useCart } from "./CartProvider";
export default function ProductCard({ product }) {
  const { add } = useCart();
  return <article className="product-card group">
    <Link href={"/produit/" + product.slug} className="block">
      <div className="card-image relative">
        <img src={product.image} alt={product.name} loading="lazy"/>
        <span className="absolute top-3 left-3 bg-white px-3 py-2 text-[9px] uppercase tracking-widest">NOVERA EDITION</span>
      </div>
      <div className="pt-4 flex justify-between gap-3"><div><h3 className="font-semibold text-sm">{product.name}</h3><p className="text-xs text-muted mt-1">{product.category} · {product.color}</p></div><p className="text-sm font-semibold whitespace-nowrap">{product.price.toFixed(2).replace(".", ",")} €</p></div>
    </Link>
    <button onClick={() => add(product, product.sizes.includes("M") ? "M" : product.sizes[0])} className="mt-3 w-full border border-ink py-3 text-[9px] uppercase tracking-[.16em] font-bold hover:bg-ink hover:text-white transition">Ajouter au panier</button>
  </article>;
}

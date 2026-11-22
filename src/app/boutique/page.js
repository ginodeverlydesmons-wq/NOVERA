"use client";
import { useMemo, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { products } from "../../data/products";
export default function Boutique() {
  const [query,setQuery] = useState(""); const [category,setCategory] = useState("Toutes"); const [sort,setSort] = useState("featured");
  const filtered = useMemo(() => products.filter(p => (category==="Toutes" || p.category===category) && p.name.toLowerCase().includes(query.toLowerCase())).sort((a,b)=>sort==="price-asc"?a.price-b.price:sort==="price-desc"?b.price-a.price:0),[query,category,sort]);
  return <div className="container py-16"><p className="eyebrow text-muted mb-4">LE VESTIAIRE NOVERA</p><h1 className="section-title text-5xl">La boutique.</h1><p className="text-sm text-muted mt-4">Des pièces essentielles, à porter à votre manière.</p>
    <div className="mt-10 flex flex-col md:flex-row gap-3 md:items-center md:justify-between border-y border-line py-4"><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Rechercher un produit..." className="bg-transparent border border-line px-4 py-3 text-sm md:w-64"/><div className="flex gap-2 flex-wrap"><select aria-label="Catégorie" value={category} onChange={e=>setCategory(e.target.value)} className="bg-white border border-line px-3 py-3 text-xs"><option>Toutes</option><option>Sweats</option><option>T-shirts</option><option>Pantalons</option><option>Accessoires</option></select><select aria-label="Trier les produits" value={sort} onChange={e=>setSort(e.target.value)} className="bg-white border border-line px-3 py-3 text-xs"><option value="featured">À la une</option><option value="price-asc">Prix croissant</option><option value="price-desc">Prix décroissant</option></select></div></div>
    <p className="text-xs text-muted my-6">{filtered.length} produit(s)</p><div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">{filtered.map(p=><ProductCard key={p.id} product={p}/>)}</div>
  </div>;
}

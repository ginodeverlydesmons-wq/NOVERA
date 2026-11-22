"use client";
import { notFound } from "next/navigation";
import { useState } from "react";
import { products } from "../../../data/products";
import { useCart } from "../../../components/CartProvider";
export default function ProductPage({ params }) {
  const product = products.find(p=>p.slug===params.slug);
  const [size,setSize] = useState("M"); const [added,setAdded] = useState(false); const {add}=useCart();
  if (!product) notFound();
  return <div className="container py-12 grid md:grid-cols-2 gap-12">
    <div className="bg-[#e9e9e6]"><img src={product.image} alt={product.name} className="w-full h-full max-h-[720px] object-cover"/></div>
    <div className="py-5 md:py-12"><p className="eyebrow text-muted">{product.category} / NOVERA</p><h1 className="section-title mt-5">{product.name}</h1><p className="text-lg mt-5">{product.price.toFixed(2).replace(".",",")} €</p><p className="text-sm text-muted leading-7 mt-8">{product.description}</p><p className="eyebrow mt-10 mb-4">Taille — {size}</p><div className="flex gap-2">{product.sizes.map(s=><button key={s} onClick={()=>setSize(s)} className={"w-12 h-12 border text-xs "+(size===s?"bg-ink text-white border-ink":"border-line")}>{s}</button>)}</div><button className="btn w-full mt-8" onClick={()=>{add(product,size);setAdded(true);}}>{added?"Ajouté au panier":"Ajouter au panier"}</button><div className="border-t border-line mt-10 pt-6 text-xs text-muted leading-6">Livraison offerte dès 60 € d'achat.<br/>Produit de démonstration : aucune commande réelle n'est possible.</div></div>
  </div>;
}

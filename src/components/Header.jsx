"use client";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "./CartProvider";
import { useState } from "react";
export default function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  return <>
    <div className="bg-ink text-white text-center py-2 text-[9px] tracking-[.18em] uppercase">Livraison offerte dès 60 € d'achat</div>
    <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur border-b border-line">
      <div className="container h-[76px] flex items-center justify-between">
        <button aria-label="Ouvrir le menu" className="md:hidden" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
        <Link href="/" className="font-black text-[26px] tracking-[-.08em]">NOVERA<span className="text-xs align-top ml-1">®</span></Link>
        <nav className="hidden md:flex items-center gap-9 text-[10px] tracking-[.15em] uppercase font-bold">
          <Link href="/">Accueil</Link><Link href="/boutique">Boutique</Link><Link href="/#collection">Collection</Link><Link href="/faq">Aide</Link>
        </nav>
        <Link href="/panier" aria-label={"Panier, " + count + " articles"} className="relative p-2"><ShoppingBag size={21}/><span className="absolute -top-1 -right-1 bg-ink text-white text-[9px] rounded-full w-4 h-4 grid place-items-center">{count}</span></Link>
      </div>
      {open && <nav className="md:hidden border-t border-line p-5 flex flex-col gap-5 text-xs uppercase tracking-widest"><Link onClick={()=>setOpen(false)} href="/">Accueil</Link><Link onClick={()=>setOpen(false)} href="/boutique">Boutique</Link><Link onClick={()=>setOpen(false)} href="/faq">Aide</Link></nav>}
    </header>
  </>;
}

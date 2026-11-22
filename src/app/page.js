import Link from "next/link";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
export default function Home() {
  return <>
    <section className="bg-[#e9e9e6]">
      <div className="container min-h-[570px] md:min-h-[680px] grid md:grid-cols-2 items-center gap-8 py-16">
        <div className="fade-up max-w-xl">
          <p className="eyebrow mb-7">NOUVELLE COLLECTION · 2026</p>
          <h1 className="display">OWN<br/>YOUR<br/><span className="text-white">DIRECTION.</span></h1>
          <p className="mt-8 text-sm text-[#555] max-w-sm leading-7">Des essentiels streetwear aux lignes simples. Une identité, votre façon de la porter.</p>
          <Link href="/boutique" className="btn mt-8">Découvrir la collection</Link>
        </div>
        <div className="relative h-[380px] md:h-[540px] overflow-hidden">
          <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1200&q=90" alt="Silhouette streetwear en extérieur"/>
          <div className="absolute bottom-5 left-5 bg-white px-4 py-3"><p className="eyebrow">NOVERA / 001</p><p className="text-xs mt-1">Essentiels du quotidien</p></div>
        </div>
      </div>
    </section>
    <section id="collection" className="container py-24">
      <div className="flex items-end justify-between mb-10"><div><p className="eyebrow text-muted mb-4">SÉLECTION NOVERA</p><h2 className="section-title">Les essentiels.</h2></div><Link href="/boutique" className="hidden sm:block text-xs underline underline-offset-4">Voir toute la boutique</Link></div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">{products.slice(0,4).map(product => <ProductCard key={product.id} product={product}/>)}</div>
    </section>
    <section className="bg-ink text-white py-24">
      <div className="container grid md:grid-cols-2 gap-12 items-center"><div><p className="eyebrow text-white/50 mb-5">L'ÉTAT D'ESPRIT NOVERA</p><h2 className="section-title text-4xl md:text-6xl">Simple.<br/>Libre.<br/>À votre image.</h2></div><div><p className="text-white/65 text-sm leading-8 max-w-md">NOVERA explore un vestiaire streetwear contemporain : des volumes confortables, des couleurs faciles à associer et des pièces pensées pour durer dans votre dressing.</p><Link href="/boutique" className="btn btn-light mt-8">Explorer les pièces</Link></div></div>
    </section>
    <section className="container py-24 text-center"><p className="eyebrow text-muted mb-4">RESTONS EN CONTACT</p><h2 className="section-title">Recevez les nouveautés.</h2><p className="text-sm text-muted mt-4">La newsletter NOVERA arrive bientôt.</p><form className="max-w-md mx-auto flex mt-8 border-b border-ink" onSubmit={e=>e.preventDefault()}><label className="sr-only" htmlFor="newsletter">Adresse e-mail</label><input id="newsletter" type="email" required placeholder="Votre adresse e-mail" className="bg-transparent flex-1 py-4 outline-none text-sm"/><button className="text-xs font-bold uppercase tracking-widest">M'inscrire</button></form></section>
  </>;
}

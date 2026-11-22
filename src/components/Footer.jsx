import Link from "next/link";
export default function Footer() {
  return <footer className="bg-ink text-white mt-24">
    <div className="container py-16 grid md:grid-cols-3 gap-12">
      <div><div className="font-black text-3xl tracking-[-.08em]">NOVERA</div><p className="text-white/55 text-sm mt-4 max-w-xs">Le streetwear dans sa forme essentielle. Des pièces faciles à porter, pensées pour le quotidien.</p></div>
      <div><p className="eyebrow mb-5 text-white/50">Explorer</p><div className="flex flex-col gap-3 text-sm text-white/80"><Link href="/boutique">La boutique</Link><Link href="/#collection">La collection</Link><Link href="/faq">FAQ</Link></div></div>
      <div><p className="eyebrow mb-5 text-white/50">Informations</p><div className="flex flex-col gap-3 text-sm text-white/80"><Link href="/contact">Contact</Link><Link href="/livraison">Livraison & retours</Link><Link href="/legal">Mentions légales</Link><Link href="/cgv">CGV</Link><Link href="/confidentialite">Confidentialité</Link></div></div>
    </div>
    <div className="container border-t border-white/15 py-6 flex flex-col sm:flex-row gap-3 justify-between text-[10px] text-white/45"><span>© {new Date().getFullYear()} NOVERA. Tous droits réservés.</span><span>Site de démonstration — produits fictifs.</span></div>
  </footer>;
}

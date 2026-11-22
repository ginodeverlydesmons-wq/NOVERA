import Link from "next/link";
export default function NotFound(){return <div className="container py-32 text-center"><p className="eyebrow text-muted">ERREUR 404</p><h1 className="section-title mt-4">Cette page n'existe pas.</h1><Link href="/boutique" className="btn mt-8">Retour à la boutique</Link></div>}

"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function CookieBanner(){
  const [visible,setVisible]=useState(false);
  useEffect(()=>{setVisible(!localStorage.getItem("novera-cookie-choice"));},[]);
  const choose=value=>{localStorage.setItem("novera-cookie-choice",value);setVisible(false);};
  if(!visible)return null;
  return <aside className="fixed bottom-4 left-4 right-4 z-50 bg-white border border-line shadow-2xl p-5 md:p-6 md:max-w-xl" aria-label="Préférences de cookies"><p className="font-bold text-sm">Votre confidentialité compte.</p><p className="text-xs text-muted leading-6 mt-2">Cette maquette n'utilise pas de cookies publicitaires ou analytiques. Les préférences sont conservées localement sur cet appareil. Consultez notre <Link className="underline" href="/confidentialite">politique de confidentialité</Link>.</p><div className="flex gap-3 mt-4"><button onClick={()=>choose("refuse")} className="border border-ink px-4 py-3 text-[10px] uppercase tracking-widest font-bold">Tout refuser</button><button onClick={()=>choose("accept")} className="bg-ink text-white px-4 py-3 text-[10px] uppercase tracking-widest font-bold">Compris</button></div></aside>;
}

import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CartProvider from "../components/CartProvider";
import CookieBanner from "../components/CookieBanner";

export const metadata = {
  title: { default: "NOVERA — Streetwear", template: "%s | NOVERA" },
  description: "Découvrez NOVERA, une sélection de vêtements streetwear aux lignes modernes.",
  metadataBase: new URL("https://novera.fr")
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieBanner />
        </CartProvider>
      </body>
    </html>
  );
}

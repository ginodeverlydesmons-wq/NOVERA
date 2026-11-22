# NOVERA — Boutique streetwear

Maquette de boutique e-commerce en français, construite avec Next.js 14, React et Tailwind CSS.

## Fonctionnalités présentes
- Page d'accueil responsive et navigation mobile
- Catalogue de démonstration avec recherche, catégorie et tri par prix
- Fiches produits avec choix de taille
- Panier persistant dans le navigateur, quantités et suppression
- Seuil de livraison offerte à 60 € (simulation)
- Pages FAQ, contact, livraison, mentions légales, CGV et confidentialité
- Bandeau de confidentialité simple
- Métadonnées de base, robots.txt et sitemap

## Démarrer sur son ordinateur

1. Installer Node.js (version LTS) depuis https://nodejs.org.
2. Télécharger le dépôt depuis GitHub ou le cloner :

```bash
git clone https://github.com/ginodeverlydesmons-wq/NOVERA.git
cd NOVERA
```

3. Installer les dépendances :

```bash
npm install
```

4. Lancer le serveur de développement :

```bash
npm run dev
```

5. Ouvrir http://localhost:3000.

Pour vérifier la version de production :

```bash
npm run build
npm start
```

## Modifier les produits

Les produits de démonstration sont définis dans `src/data/products.js`. Chaque produit contient un identifiant, un nom, une catégorie, un prix, une couleur, des tailles, une image et une description.

## Déploiement Vercel

1. Se connecter à Vercel avec GitHub.
2. Importer le dépôt `ginodeverlydesmons-wq/NOVERA`.
3. Garder les paramètres Next.js détectés automatiquement.
4. Lancer le déploiement.
5. Ajouter un domaine seulement lorsqu'il est réellement détenu et configuré.

## Important avant toute vente

Cette version est une maquette. Les articles, visuels et prix sont des exemples et ne représentent pas un stock réel. Le paiement, les comptes clients, les commandes et le suivi ne sont pas activés.

Avant toute commercialisation, il faudra notamment :
- choisir et vérifier le fournisseur, les produits, les tailles, les délais et les conditions de retour ;
- remplacer tous les textes légaux provisoires par des informations exactes et adaptées ;
- configurer un vrai système de paiement côté serveur (ne jamais exposer de clé secrète dans le navigateur) ;
- mettre en place la gestion des commandes, la protection des données et les obligations du vendeur ;
- vérifier les conditions d'activité et de paiement avec un représentant légal, puisque le porteur du projet est mineur.

Aucun faux avis client ni faux stock n'est affiché.

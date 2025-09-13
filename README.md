# Kasa - Plateforme de location immobilière

Refonte front-end du site **Kasa**, une entreprise de location d’appartements entre particuliers.  
Ce projet est développé dans le cadre du parcours **Développeur Web OpenClassrooms**.

---

## 📖 Contexte

Le site Kasa, initialement codé en ASP.NET il y a plus de 10 ans, fait peau neuve avec une stack moderne **JavaScript**.  
Le back-end n’étant pas encore prêt, les données sont fournies via un fichier JSON (`logements.json`).

L’objectif :

- Développer l’application **React** en suivant les maquettes **Figma**.
- Mettre en place un routage avec **React Router**.
- Gérer les pages et les erreurs (404, id de logement invalide).
- Styliser avec **Sass**.

---

## 🛠️ Stack technique

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [Sass](https://sass-lang.com/)

---

## 📂 Structure du projet

Kasa/
┗ react/
┣ src/
┃ ┣ components/ # Composants réutilisables (Card, Banner, Collapse, etc.)
┃ ┣ data/ # Fichier logements.json
┃ ┣ pages/ # Pages principales (Home, About, Logement, NotFound)
┃ ┣ router/ # Configuration du routeur (index.jsx)
┃ ┣ styles/ # Fichiers Sass
┃ ┣ App.jsx # Layout principal (Header, Footer, Outlet)
┃ ┗ main.jsx # Point d’entrée React
┣ package.json
┗ vite.config.js

---

## ⚙️ Installation & lancement

### 1. Cloner le projet

```bash
git clone <https://github.com/CodingIBao/Kasa>
cd Kasa/react
```

2. Installer les dépendances
   npm install

3. Lancer le serveur de développement
   npm run dev

Par défaut, l’application est accessible à l’adresse :
👉 http://localhost:5173

📑 Fonctionnalités principales

Page Accueil : liste des logements sous forme de cartes.

Page À propos : présentation de l’entreprise avec des sections repliables (Collapse).

Page Détail logement : carrousel des photos, description, équipements, notes, hôte.

Page Erreur 404 : affichée si l’URL est invalide ou si l’id de logement n’existe pas.

📦 Données

Les annonces sont fournies dans le fichier src/data/logements.json.
Elles sont utilisées pour :

Générer la liste des logements sur la page d’accueil.

Afficher les détails d’un logement sur la page correspondante.

👨‍💻 Auteur

Projet réalisé par CodingIBao, dans le cadre du parcours OpenClassrooms - Intégrateur Web

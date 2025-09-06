// KASA/react/src/App.jsx

import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Accueil</Link> | <Link to="/about">À propos</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <small>Kasa</small>
      </footer>
    </>
  );
}

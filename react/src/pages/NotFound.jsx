// KASA/react/src/pages/NotFound.jsx

import { useRouteError, Link } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();
  const status = error?.status;
  
  return (
      <section className="not-found">
        <h1 className="not-found__title">
          {status === 404 ? "404" : "Erreur"}
        </h1>
        <p className="not-found__message">
          {status === 404 ? (
            <>
            <span>
              Oups! La page que 
            </span>
            <span>
              vous demandez n'existe pas.
            </span>
            </>
          ) : (
            <>
            <span>
              Oups! Une erreur est survenue.
            </span>
            <span>
              Veuillez réessayer plus tard.
            </span>
            </>
          )}
        </p>
        <Link className="not-found__link" to="/">Retourner sur la page d’accueil</Link>
      </section>
  );
}

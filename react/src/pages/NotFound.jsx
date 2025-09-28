// KASA/react/src/pages/NotFound.jsx

import { useRouteError, Link } from "react-router-dom";
import GetErrorMessage from "../components/getErrorMessage";

export default function NotFound() {
  const error = useRouteError();
  const status = error?.status;
  const { title, message } = GetErrorMessage(status);
  
  return (
    <>
      <section className="not-found">
        <h1 className="not-found__title">{title}</h1>
        <p className="not-found__message">{message}</p>
        <Link className="not-found__link" to="/">Retourner sur la page d’accueil</Link>
      </section>
    </>
  );
}

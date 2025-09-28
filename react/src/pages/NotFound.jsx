// KASA/react/src/pages/NotFound.jsx

import { useRouteError, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import getErrorMessage from "../components/getErrorMessage";

export default function NotFound() {
  const error = useRouteError();
  const status = error?.status;
  const { title, message } = getErrorMessage(status);
  
  return (
    <>
    <Header />
      <main className="not-found">
        <h1 className="not-found__title">{title}</h1>
        <p className="not-found__message">{message}</p>
        <Link className="not-found__link" to="/">Retourner sur la page d’accueil</Link>
      </main>
      <Footer />
    </>
  );
}

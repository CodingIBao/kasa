// KASA/react/src/pages/NotFound.jsx

import { useRouteError, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NotFound() {
  const error = useRouteError();
  const status = error?.status;
  
  let title;
  let message;

  if (status === 404) {
    title = "404"
    message = (
      <>
        <span className="error-message-line">
          "Oups ! La page que 
        </span>
        <span className="error-message-line">
          vous demandez n'existe pas."
        </span>
      </>
    );
  } else {
    title = "Erreur"
    message = (
      <>
        <span className="error-message-line">
          "Oups ! Une erreur est 
        </span>
        <span className="error-message-line">
          survenue. Veuillez réessayez plus tard."
        </span>
      </>
    )
  }
  
  return (
    <>
    <Header />
      <main className="main-not-found">
        <h1>{title}</h1>
        <p>{message}</p>
        <Link to="/">Retourner sur la page d’accueil</Link>
      </main>
      <Footer />
    </>
  );
}

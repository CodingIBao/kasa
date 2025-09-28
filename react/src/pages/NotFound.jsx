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
      <main className="main-not-found">
        <h1>{title}</h1>
        <p>{message}</p>
        <Link to="/">Retourner sur la page d’accueil</Link>
      </main>
      <Footer />
    </>
  );
}

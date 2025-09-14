// KASA/react/src/App.jsx

import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <footer>
        <small>Kasa</small>
      </footer>
    </>
  );
}

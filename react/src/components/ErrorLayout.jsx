// KASA/react/src/components/ErrorLayout.jsx

import Header from "./Header";
import Footer from "./Footer";

function ErrorLayout({ children }) {
  return (
    <>
      <Header />
      <main className="main">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default ErrorLayout
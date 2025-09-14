// KASA/react/src/components/Navigation

import Navigation from "./Navigation"

function Header() {
  return (
    <header>
        <img src="/logos/logo.png" alt="Logo du site Kasa" className="header-logo"/>
      <Navigation/>
    </header>
  )
}

export default Header
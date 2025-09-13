// KASA/react/src/components/Navigation

import Navigation from "./Navigation"

function Header() {
  return (
    <header>
      <div>
        <img src="/logos/logo.png" alt="Logo du site Kasa" />
      </div>
      <Navigation/>
    </header>
  )
}

export default Header
// KASA/react/src/components/Navigation

import { NavLink } from "react-router-dom"

function setActive({isActive}) {
  return isActive ? "nav-link active" : "nav-link"
}

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" end className={setActive}>
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="about" className={setActive}>
            A propos
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
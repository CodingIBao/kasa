// KASA/react/src/components/Navigation.jsx

import { NavLink } from "react-router-dom";

function setActive({isActive}) {
  return isActive ? "navigation__link navigation__link--active" : "navigation__link"
}

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <NavLink to="/" end className={setActive}>
            Accueil
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/a-propos" className={setActive}>
            A propos
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation

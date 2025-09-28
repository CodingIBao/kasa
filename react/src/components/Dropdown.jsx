// KASA/react/src/components/Dropdown.jsx

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

function Dropdown({title, description}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <button className="dropdown__container" onClick={() => setIsOpen(!isOpen)}>
        <h2 className="dropdown__title">{title}</h2>
        <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} />
      </button>

      {isOpen &&
        <p className="dropdown__content">{description}</p>
      }
    </div>
  );
}

export default Dropdown

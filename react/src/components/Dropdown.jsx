// KASA/react/src/components/Dropdown.jsx

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

function Dropdown({title, description}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="dropdown" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} />
      </button>

      {isOpen && <p className="dropdown-content">{description}</p>}
    </>
  );
}

export default Dropdown

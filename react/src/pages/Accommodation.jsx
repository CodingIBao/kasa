// KASA/react/src/pages/Accommodation.jsx

import Carousel from "../components/Carousel";
import Tags from "../components/Tags";
import Dropdown from "../components/Dropdown";

export default function Accommodation({ logement }) {
const {
  title,
  location,
  tags = [],
  host = {},
  description = "",
  equipments = [],
} = logement;

  return (
    <>
    <Carousel logement={logement} />

    <h1>
      {title}
    </h1>
    <h3>
      {location}
    </h3>
    <Tags tags={tags} />

    <div className="accommodation__host">
      <h4>
        {host.name}
      </h4>
      <img src={host.picture} alt={`Photo de ${host.name}`} />
    </div>

    <div className="accomodation__dropdowns">
      <Dropdown title="Description" description={description} />

      <Dropdown 
        title="Équipements"
        description={
          <ul className="equipments">
            {equipments.map((item, index) => (
              <li key={`${item}-${index}`}  className="equipment">
                {item}
              </li>
            ))}
          </ul>
        }
      />
    </div>
    </>
  );
}
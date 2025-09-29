// KASA/react/src/pages/Accommodation.jsx

import Carousel from "../components/Carousel";
import Tags from "../components/Tags";

export default function Accommodation({ logement }) {
  return (
    <>
    <Carousel logement={logement} />
    <h1>
      {logement.title}
    </h1>
    <h2>
      {logement.location}
    </h2>
    <Tags tags={logement.tags} />
    </>
  );
}
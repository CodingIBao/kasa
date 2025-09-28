//KASA/react/src/components/AccommodationWrapper.jsx

import { useParams } from "react-router-dom";
import logements from "../data/logements.json";
import Accommodation from "../pages/Accommodation";

function AccommodationWrapper() {
  const { id } = useParams();
  const logement = logements.find(l => l.id === id);

  if (!logement) {
    throw new Response("Not Found", {status: 404});
  }
  
  return <Accommodation logement={logement} />;
}

export default AccommodationWrapper;
// KASA/react/src/components/Gallery.jsx

import Card from "./Card";

function Gallery({accommodations}) {
  return (
    <section className="gallery">
      {accommodations.map(({id, title, cover}) => (
        <Card
          key={id}
          title={title}
          cover={cover}
        />
      ))}
    </section>
  );
}

export default Gallery
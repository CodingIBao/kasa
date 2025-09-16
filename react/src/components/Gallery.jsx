// KASA/react/src/components/Gallery.jsx

import Card from "./Card"

function Gallery({logements}) {
  return (
    <section className="gallery">
      {logements.map(({id, title, cover}) => (
        <Card
          key={id}
          title={title}
          cover={cover}
        />
      ))}
    </section>
  )
}

export default Gallery
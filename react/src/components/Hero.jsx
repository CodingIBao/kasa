// KASA/react/src/components/Hero.jsx

function Hero({ image, line1, line2 }) {
  const hasText = Boolean(line1 && line2)

  return (
    <section className="hero">
      <img className="hero__img" src={image} alt="" />
      {hasText && (
        <h1 className="hero__text">
          <span className="hero__line">{line1}</span>
          <span className="hero__line">{line2}</span>
        </h1>
      )}
    </section>
  )
}

export default Hero
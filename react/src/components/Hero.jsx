// KASA/react/src/components/Hero

function Hero({ image, line1, line2 }) {
  const hasText = Boolean(line1 && line2)

  return (
    <section className="hero">
      <img className="hero-img" src={image} alt="" />
      {hasText && (
        <p className="hero-text">
          <span className="hero-line">{line1}</span>
          <span className="hero-line">{line2}</span>
        </p>
      )}
    </section>
  )
}

export default Hero
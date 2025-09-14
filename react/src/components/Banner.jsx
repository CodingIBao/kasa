// KASA/react/src/components/Banner

function Hero({ image, line1, line2 }) {
  const hasText = Boolean(line1 && line2)

  return (
    <section className="hero">
      <img className="banner-img" src={image} alt="" />
      {hasText && (
        <p className="banner-text">
          <span className="mobile-break">{line1}</span>
          <span className="mobile-break">{line2}</span>
        </p>
      )}
    </section>
  )
}

export default Hero
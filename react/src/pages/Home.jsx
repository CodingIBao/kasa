// KASA/react/src/pages/Home.jsx

import Hero from "../components/Hero"
import heroHomeBanner from "../assets/img/home.jpg"

export default function Home() {
  return (
    <Hero
      image={heroHomeBanner}
      line1="Chez vous, "
      line2="partout et ailleurs"
    />
  )
}
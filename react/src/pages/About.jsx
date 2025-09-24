// KASA/react/src/pages/About.jsx

import Hero from "../components/Hero";
import heroAboutBanner from "../assets/img/about.jpg";
import AboutSection from "../components/AboutSection";
import aboutData from "../data/about.json";

export default function About() {
  return (
    <>
      <Hero
        image={heroAboutBanner}
      />
      <AboutSection data={aboutData} />
    </>
  )
}

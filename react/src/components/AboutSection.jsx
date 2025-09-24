//KASA/react/src/components/AboutSection.jsx

import Dropdown from "./Dropdown";

function AboutSection({ data }) {
  return (
    <section className="about-section">
      {data.map((item, index) => (
        <Dropdown 
          key={index}
          title={item.title}
          description={item.description}
        />
      ))}
    </section>
  );
}

export default AboutSection
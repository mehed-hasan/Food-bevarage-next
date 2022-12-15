import { useEffect, useState } from "react";
import Slider from "react-slick";
import HeroSliderEl from "./HeroSliderEl";

function HeroSection() {
  const [HeroSection, setHeroSection] = useState("");

  useEffect(() => {
    fetch("/assets/data/heroSection.json")
      .then((res) => res.json())
      .then((differnet) => setHeroSection(differnet));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <section id="hero">
        <div className="container">
          <div className="row ">
            <div className="hero_slider">
              <Slider {...settings}>
                {HeroSection.length > 0 && HeroSection?.map((item, index) => (
                  <HeroSliderEl key={index} data={item} />
                ))}
              
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;

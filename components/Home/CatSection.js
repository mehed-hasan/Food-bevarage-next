import { useEffect, useState } from "react";
import CatCard from "./CatCard";

function CatSection() {
  const [cat, setCat] = useState('');


  useEffect(() => {
    fetch("/assets/data/cat.json")
      .then((res) => res.json())
      .then((differnet) => setCat(differnet));
  }, []);
  return (
    <>
      <div className="gap"></div>

      <section id="category">
        <div className="container">
          <div className="cat_heading">
            <h1>{cat[0]?.heading}</h1>
            <p>{cat[0]?.subHeading}</p>
          </div>

          <div className="food_cats">
            <div className="row">
              {cat[0]?.cats?.map((item, index) => (
                <CatCard key={index} id={index} data={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CatSection;

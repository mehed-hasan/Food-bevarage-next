import { useEffect, useState } from "react";
import Ads from "../Common/Ads";
import FoodCard from "../Common/FoodCard";

function PopularSection() {
  const [recipes, setRecipes] = useState('');


  useEffect(() => {
    fetch("/assets/data/recipes.json")
      .then((res) => res.json())
      .then((differnet) => setRecipes(differnet));
  }, []);


  return (
    <>
      <div className="gap"></div>
      <section id="food_cards">
        <div className="container">
          <div className="card_heading">
            <h1>Most Popular Recipes</h1>
            <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim</p>
          </div>

          <div className="row">
            {recipes.length > 0 && recipes.slice(0, 5)?.map((item, index) => (
              <div key={index} className="col-6 col-lg-4">
                <FoodCard data={item} />
              </div>
            ))}

            <div className="col-6 col-lg-4">
              <div className="food_card ads">
                <Ads />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PopularSection;

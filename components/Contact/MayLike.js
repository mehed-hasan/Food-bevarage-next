import { useEffect, useState } from "react";
import FoodCard from "../Common/FoodCard";

function MayLike() {
  const [recipes, setRecipes] = useState("");

  useEffect(() => {
    fetch("/assets/data/recipes.json")
      .then((res) => res.json())
      .then((differnet) => setRecipes(differnet));
  }, []);
console.log(recipes);
  return (
    <>
      <div className="gap_64"></div>
      <section id="you_may_like">
        <h2 className="text-center">Check out the delicious recipe</h2>
        <div className="gap_64"></div>
        <div id="food_cards" className="container">
          <div className="food_card_wrapper">
            <div className="row">
              {recipes.length > 0 && recipes.slice(0, 3)?.map((item, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-4">
                  <FoodCard  data={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MayLike;

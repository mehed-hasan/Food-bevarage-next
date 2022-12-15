
import Link from "next/link";
import { useEffect, useState } from "react";
import FoodCard from "../Common/FoodCard";

function SearchResult({ cat }) {
  const [recipes, setRecipes] = useState({});

  useEffect(() => {
    fetch("/assets/data/recipes.json")
      .then((res) => res.json())
      .then((differnet) => setRecipes(differnet));
  }, []);

console.log(cat);
  const filtered = recipes.filter((item) => {
    return item.cat === cat;
  });

  console.log(filtered);
  return (
    <div className="search_results">
      <p>{cat}</p>

      <div id="food_cards">
        <div className="row">
          {filtered.legnth > 0 && filtered?.map((item, index) => (
            <div key={index} className="col-6 ">
              <FoodCard data={item} />
            </div>
          ))}

          <nav aria-label="Page navigation example pagination">
            <ul className="pagination">
              <li className="page-item">
                <Link className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">«</span>
                </Link>
              </li>
              <li className="page-item active">
                <Link className="page-link" href="#">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" href="#">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" href="#">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">»</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;

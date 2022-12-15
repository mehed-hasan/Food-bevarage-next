import { Link } from "react-router-dom";
import { recipes } from "../../data/recipes";
import FoodCard from "../Common/FoodCard";

function SearchResult({ cat }) {
  const filtered = recipes.recipe.filter((item) => {
    return item.cat === cat;
  });
  return (
    <div className="search_results">
      <p>{cat}</p>

      <div id="food_cards">
        <div className="row">
          {filtered.map((item, index) => (
            <div key={index} className="col-6 ">
              <FoodCard data={item} />
            </div>
          ))}

          <nav aria-label="Page navigation example pagination">
            <ul className="pagination">
              <li className="page-item">
                <Link className="page-link" to="#" aria-label="Previous">
                  <span aria-hidden="true">«</span>
                </Link>
              </li>
              <li className="page-item active">
                <Link className="page-link" to="#">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#" aria-label="Next">
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

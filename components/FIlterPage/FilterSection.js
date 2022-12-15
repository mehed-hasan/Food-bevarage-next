import { useParams } from "react-router";
import "../../css/rangeslider.css";
import SearchPanel from "./SearchPanel";
import SearchResult from "./SearchResult";

function FilterSection({ cat }) {
  return (
    <>
      <div className="gap"></div>
      <section id="recipies">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              <SearchPanel />
            </div>
            <div className="col-12 col-lg-8">
              <SearchResult cat={cat} />
            </div>
          </div>
        </div>
      </section>

      <div className="gap"></div>
    </>
  );
}

export default FilterSection;

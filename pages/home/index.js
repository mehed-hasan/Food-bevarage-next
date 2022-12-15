import FilterHero from "../../components/FIlterPage/FilterHero";
import FilterSection from "../../components/FIlterPage/FilterSection";
// import { title } from "../../js/title";

function FilterPage() {

  return (
    <>
      <FilterHero cat={cat} />
      <FilterSection cat={cat} />
    </>
  );
}

export default FilterPage;

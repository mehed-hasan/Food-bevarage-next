import { useParams } from "react-router";
import FilterHero from "../../components/FIlterPage/FilterHero";
import FilterSection from "../../components/FIlterPage/FilterSection";
import { title } from "../../js/title";

function FilterPage() {
  const { cat } = useParams();

  title(`${cat} recipie`);

  
  return (
    <>
      <FilterHero cat={cat} />
      <FilterSection cat={cat} />
    </>
  );
}

export default FilterPage;

import { useRouter } from "next/router";
import FilterHero from "../components/FIlterPage/FilterHero";
import FilterSection from "../components/FIlterPage/FilterSection";

function RecipDetails() {
  const router = useRouter();
  const { link } = router.query;


  return (
    <>
      <FilterHero cat={link}/>
      <FilterSection cat={link} />
    </>
  );
}

export default RecipDetails;

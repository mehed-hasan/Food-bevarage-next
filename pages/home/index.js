import FilterHero from "../../components/FIlterPage/FilterHero";
import FilterSection from "../../components/FIlterPage/FilterSection";
// import { title } from "../../js/title";

function FilterPage(props) {
  // const { cat } = useParams();

  // title(`${cat} recipie`);
  const [cat, setCat] = useState('');
  const roomSlug = router.query.slug;


  useEffect(() => {
    fetch("/assets/data/cat.json")
      .then((res) => res.json())
      .then((differnet) => setCat(differnet));
  }, []);

  console.log(roomSlug);

  
  return (
    <>
      <FilterHero cat={cat} />
      <FilterSection cat={cat} />
    </>
  );
}

export default FilterPage;

import RecipeDetails from "../../components/Recipe/RecipeDetails";
import RecipeHero from "../../components/Recipe/RecipeHero";
import RecipeLike from "../../components/Recipe/RecipeLike";
import RecipeNewsletter from "../../components/Recipe/RecipeNewsletter";

function RecipDetails(props) {
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
      <RecipeHero />
      <RecipeDetails />
      <RecipeNewsletter />
      <RecipeLike />
    </>
  );
}

export default RecipDetails;

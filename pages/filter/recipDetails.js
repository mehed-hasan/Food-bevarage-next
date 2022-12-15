import RecipeDetails from "../../components/Recipe/RecipeDetails";
import RecipeHero from "../../components/Recipe/RecipeHero";
import RecipeLike from "../../components/Recipe/RecipeLike";
import RecipeNewsletter from "../../components/Recipe/RecipeNewsletter";

function RecipDetails() {
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

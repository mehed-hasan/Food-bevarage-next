import BlogArticle from "../../components/Blog/BlogArticle";
import BlogArticleList from "../../components/Blog/BlogArticleList";
import BlogDetailsHero from "../../components/Blog/BlogDetailsHero";
// import { title } from "../../js/title";

function BlogDetails() {
  const { id, blogTitle } = useParams();
//   const [title, setTitle] = useState({});

//   useEffect(() => {
//     fetch("/assets/data/navbar.json")
//       .then((res) => res.json())
//       .then((differnet) => setTitle(differnet));
//   }, []);

//   title(blogTitle);
  return (
    <>
      <BlogDetailsHero />
      <BlogArticle id={id} />
      <BlogArticleList />
    </>
  );
}

export default BlogDetails;

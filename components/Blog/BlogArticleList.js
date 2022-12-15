import BlogCard from "./BlogCard";

function BlogArticleList() {
  const [blogs, setBlogs] = useState({});

  useEffect(() => {
    fetch("/assets/data/blogHero.json")
      .then((res) => res.json())
      .then((differnet) => setBlogs(differnet));
  }, []);
  return (
    <>
      <section className="article_list" id="blog_list">
        <div className="container">
          <h2>Related Topic</h2>
          <div className="gap_64"></div>
          <div className="row">
            {blogs.slice(0, 4).map((item,index) => (
              <div key={index} className="col-12 col-md-6 col-lg-3">
                <BlogCard data={item} pattern="col" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gap_64"></div>
    </>
  );
}

export default BlogArticleList;

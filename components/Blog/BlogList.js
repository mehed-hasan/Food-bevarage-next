import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
// import { blogs } from "../../data/blog";
// import { recipes } from "../../data/recipes";
import Ads from "../Common/Ads";
import FoodCard from "../Common/FoodCard2";
import BlogCard from "./BlogCard";

function BlogList() {
  const [recipes, setRecipes] = useState({});
  const [blogs, setBlogs] = useState({});
  const items = blogs;
  const itemsPerPage = 3;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    fetch("/assets/data/recipes.json")
      .then((res) => res.json())
      .then((differnet) => setRecipes(differnet));


    fetch("/assets/data/blog.json")
      .then((res) => res.json())
      .then((differnet) => setBlogs(differnet));
  }, []);
console.log(blogs);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.length > 0 && items?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <section id="blog_list">
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-8">
              <div className="row">
                {currentItems.length > 0 && currentItems?.map((item, index) => (
                  <BlogCard key={index} data={item} />
                ))}
              </div>

              <ReactPaginate
                breakLabel="..."
                nextLabel="»"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="«"
                renderOnZeroPageCount={null}
                pageLinkClassName="page-link"
                activeLinkClassName="active"
                containerClassName="pagination"
                previousLinkClassName="page-link"
                nextLinkClassName="page-link"
                pageClassName="page-item"
              />
            </div>
            <div className="col-12 col-xl-4">
              <div className="other_recipe">
                <h2>Other Recipe</h2>
                <div className="gap_32"></div>
                {recipes.length > 0 && recipes.slice(0, 3)?.map((item, index) => (
                  <div
                    key={index}
                    className="food_card_2 d-flex justify-content-between"
                  >
                    <FoodCard data={item} />
                  </div>
                ))}
              </div>

              <div className="gap_32"></div>
              <div className="food_card ads">
                <Ads />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogList;

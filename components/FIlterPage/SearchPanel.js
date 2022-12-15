import MultiRangeSlider from "../MultiRangeSlider/MultiRangeSlider";

function SearchPanel() {
  return (
    <>
      <div className="search_panel">
        <form action="" method="post">
          <h5>Search Recipe</h5>
          <input
            placeholder="Search...."
            className="form-control search_box"
            type="text"
            name=""
            id=""
          />
        </form>

        <div className="filter">
          <div className="price_heading">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 9.375V16.875"
                stroke="#FF7426"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 3.125V6.875"
                stroke="#FF7426"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.625 15.625V16.875"
                stroke="#FF7426"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.625 3.125V13.125"
                stroke="#FF7426"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.5 13.125H13.75"
                stroke="#FF7426"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.375 13.125V16.875"
                stroke="#FF7426"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.375 3.125V10.625"
                stroke="#FF7426"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.5 10.625H6.25"
                stroke="#FF7426"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.875 6.875H8.125"
                stroke="#FF7426"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div>
              <span>
                <h5>Filter by Price</h5>
              </span>
            </div>

            <div className="recipie_panel">
              <br />
              <div className="a"></div>
            </div>
          </div>

          {/* Range slider react  yyy*/}
          <div className="w-100 mx-auto position-relative">
            <MultiRangeSlider
              min={0}
              max={1000}
              onChange={({ min, max }) =>
                console.log(`min = ${min}, max = ${max}`)
              }
            />
          </div>

          <div className="gap_48"></div>
          <div className="categories">
            <h5>Categories</h5>
            {/* <div className="button_groups">
              <button className="filter_btn">1 layer</button>
              <button className="filter_btn active">2 layer</button>
              <button className="filter_btn">3 layer</button>
              <button className="filter_btn">4 layer</button>
              <button className="filter_btn">5 layer</button>
              <button className="filter_btn">6 layer</button>
              <button className="filter_btn">7 layer</button>
            </div> */}
            <div className="category">
              <input type="radio" id="cat" name="animal" value="1-layer"/>
              <label for="cat">1 layer</label>

              <input type="radio" id="dog" name="animal" value="2-layer" />
              <label for="dog">2 layer</label>

              <input type="radio" id="pig" name="animal" value="3-layer" />
              <label for="pig">3 layer</label>

              <input type="radio" id="other" name="animal" value="4-layer" />
              <label for="other">4 layer</label>

              <input type="radio" id="hamba" name="animal" value="5-layer" />
              <label for="hamba">5 layer</label>

              <input type="radio" id="biral" name="animal" value="6-layer" />
              <label for="biral">6 layer</label>

              <input type="radio" id="sagol" name="animal" value="7-layer" />
              <label for="sagol">7 layer</label>
            </div>
          </div>
          <div className="gap_48"></div>

          {/* <div className="sub_categories">
                                <h5>Sub Categories</h5>
                                <div className="button_groups">
                                    <button className="filter_btn" >2 layer</button>
                                    <button className="filter_btn" >2 layer</button>
                                    <button className="filter_btn" >2 layer</button>
                                    <button className="filter_btn" >2 layer</button>
                                    <button className="filter_btn" >2 layer</button>
                                    <button className="filter_btn" >2 layer</button>
                                    <button className="filter_btn" >2 layer</button>
                                </div>
                            </div> */}

          <div className="select_options">
            <h5>Cooking Method</h5>
            <div className="checkbox_group">
              <div className="method_checkbox">
                <p>Grilling</p>
                <input
                  className="theme_checkbox"
                  type="checkbox"
                  name=""
                  id=""
                />
              </div>

              <div className="method_checkbox">
                <p>Roasting</p>
                <input
                  className="theme_checkbox"
                  type="checkbox"
                  name=""
                  id=""
                />
              </div>

              <div className="method_checkbox">
                <p>Searing</p>
                <input
                  className="theme_checkbox"
                  type="checkbox"
                  name=""
                  id=""
                />
              </div>

              <div className="method_checkbox">
                <p>Steaming</p>
                <input
                  className="theme_checkbox"
                  type="checkbox"
                  name=""
                  id=""
                />
              </div>

              <div className="method_checkbox">
                <p>Tossing</p>
                <input
                  className="theme_checkbox"
                  type="checkbox"
                  name=""
                  id=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchPanel;

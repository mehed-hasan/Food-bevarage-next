import Image from "next/image";
import { useEffect, useState } from "react";

function MenuItems() {
  const [menus, setMenus] = useState("");

  useEffect(() => {
    fetch("/assets/data/menus.json")
      .then((res) => res.json())
      .then((differnet) => setMenus(differnet));
  }, []);

  const merged = (item) => {
    return item.replace(" ", "-");
  };

  console.log("====================================");
  console.log(menus[0]);
  console.log("====================================");
  return (
    <>
      <div className="gap"></div>

      <section id="menu_items">
        <div className="container">
          <div className="menu_heading">
            <h1>{menus[0]?.heading}</h1>
            <p>{menus[0]?.desc}</p>
          </div>

          <div className="tab_btns">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              {menus[0]?.type?.map((item, index) => (
                <li key={index} className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${index == 0 ? "active" : ""}`}
                    id={`pills-`}
                    data-bs-toggle="pill"
                    data-bs-target={`#pills-${merged(item)}`}
                    type="button"
                    role="tab"
                    aria-controls={`pills-${merged(item)}`}
                    aria-selected="true"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="gap"></div>
          <div className="all_items">
            <div className="tab-content" id="pills-tabContent">
              {menus[0]?.type?.map((item, index) => (
                <div
                  key={index}
                  className={`tab-pane fade show ${index == 0 ? "active" : ""}`}
                  id={`pills-${merged(item)}`}
                  role="tabpanel"
                  aria-labelledby={`pills-${merged(item)}-tab`}
                >
                  <div className="row">
                    {menus[0]?.menu
                      .filter((menu) => {
                        return menu.type === item;
                      })
                      .map((item, index) => (
                        <div key={index} className="col-12 col-md-6">
                          <div className="item">
                            <Image
                              src={`/assets/images/foods/mini-food.webp`}
                              alt=""
                              width={68}
                              height={68}
                            />
                            <div className="about_item">
                              <h5>{item.title}</h5>
                              <p>{item.element}</p>
                            </div>

                            <div className="item_price">{item.price}</div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MenuItems;

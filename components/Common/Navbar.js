import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Navbar() {
  const [navbar, setNavbar] = useState({});
  const [dropDown, setDropDown] = useState({});

  useEffect(() => {
    fetch("/assets/data/navbar.json")
      .then((res) => res.json())
      .then((differnet) => setNavbar(differnet));

    fetch("/assets/data/recipescat.json")
      .then((res) => res.json())
      .then((differnet) => setDropDown(differnet));
  }, []);
  
  return (
    <>
      <section id="navbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link href="/" className="navbar-brand">
              <Image
                className="img-fluid"
                src="/assets/images/logo/logo.png"
                alt=""
                width={100}
                height={100}
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0 links mx-auto">
                
                {navbar.length > 0 &&
                  navbar?.map((item, index) => (
                    <li key={index} className="nav-item dropdown">
                      {item.label === "Recipes" && (
                        <>
                          <Link
                            className="nav-link dropdown-toggle"
                            href={item.label}
                            id="navbarDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            {item.label}
                          </Link>

                          <ul
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdown"
                          >
                            <div className="arrow"></div>

                            {dropDown.length > 0 && dropDown?.map((item, index) => (
                              <li key={index}>
                                <Link
                                  href={`/${item.link}`}
                                  className="dropdown-item"
                                >
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: item.icon
                                    }}
                                  ></span>
                                  {item.type}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}

                      {item.label !== "Recipes" && (
                        <Link
                          className="nav-link active"
                          aria-current="page"
                          href={item.link}
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
              </ul>
              <ul className="navbar-nav mb-2 mb-lg-0 social">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                        fill="white"
                      ></path>
                    </svg>
                  </Link>
                </li>

                <li>
                  <Link href="">
                    <svg
                      width="23"
                      height="18"
                      viewBox="0 0 23 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.9609 2.17863C22.1428 2.5375 21.2711 2.77538 20.3622 2.89088C21.2972 2.33263 22.0108 1.45537 22.3463 0.398C21.4746 0.91775 20.5121 1.28488 19.4863 1.48975C18.6586 0.608375 17.4788 0.0625 16.1918 0.0625C13.6948 0.0625 11.6846 2.08925 11.6846 4.57387C11.6846 4.93138 11.7148 5.27513 11.7891 5.60238C8.03944 5.4195 4.72156 3.62238 2.49269 0.88475C2.10356 1.55988 1.87531 2.33262 1.87531 3.1645C1.87531 4.7265 2.67969 6.11112 3.87869 6.91275C3.15406 6.899 2.44319 6.68863 1.84094 6.35725C1.84094 6.371 1.84094 6.38888 1.84094 6.40675C1.84094 8.5985 3.40431 10.419 5.45444 10.8384C5.08731 10.9388 4.68719 10.9869 4.27194 10.9869C3.98319 10.9869 3.69169 10.9704 3.41806 10.9099C4.00244 12.696 5.66069 14.0091 7.63244 14.0518C6.09794 15.2521 4.14956 15.9754 2.04031 15.9754C1.67044 15.9754 1.31569 15.9589 0.960938 15.9135C2.95881 17.2019 5.32656 17.9375 7.87994 17.9375C16.1794 17.9375 20.7169 11.0625 20.7169 5.10325C20.7169 4.90387 20.7101 4.71137 20.7004 4.52025C21.5956 3.885 22.3477 3.09163 22.9609 2.17863Z"
                        fill="white"
                      ></path>
                    </svg>
                  </Link>
                </li>

                <li>
                  <Link href="">
                    <svg
                      width="23"
                      height="22"
                      viewBox="0 0 23 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.83594 0H16.0859C19.8823 0 22.9609 3.07862 22.9609 6.875V15.125C22.9609 18.9214 19.8823 22 16.0859 22H7.83594C4.03956 22 0.960938 18.9214 0.960938 15.125V6.875C0.960938 3.07862 4.03956 0 7.83594 0ZM16.0859 19.9375C18.7397 19.9375 20.8984 17.7787 20.8984 15.125V6.875C20.8984 4.22125 18.7397 2.0625 16.0859 2.0625H7.83594C5.18219 2.0625 3.02344 4.22125 3.02344 6.875V15.125C3.02344 17.7787 5.18219 19.9375 7.83594 19.9375H16.0859Z"
                        fill="white"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.46094 11C6.46094 7.96263 8.92356 5.5 11.9609 5.5C14.9983 5.5 17.4609 7.96263 17.4609 11C17.4609 14.0374 14.9983 16.5 11.9609 16.5C8.92356 16.5 6.46094 14.0374 6.46094 11ZM8.52344 11C8.52344 12.8948 10.0662 14.4375 11.9609 14.4375C13.8557 14.4375 15.3984 12.8948 15.3984 11C15.3984 9.10388 13.8557 7.5625 11.9609 7.5625C10.0662 7.5625 8.52344 9.10388 8.52344 11Z"
                        fill="white"
                      ></path>
                      <circle
                        cx="17.8735"
                        cy="5.08761"
                        r="0.732875"
                        fill="white"
                      ></circle>
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Navbar;

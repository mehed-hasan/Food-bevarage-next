function RecipeNewsletter() {
  return (
    <>
      <section
        className="d-flex align-items-center"
        id="newsletter_2"
      >
        <div className="container">
          <div className="row ">
            <div className="newsletter2 text-center text-light mx-auto">
              <h2>Subscribe to our Newsletter</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut enim
                ad minim{" "}
              </p>
              <div className="gap_48"></div>

              <form className="subscribe">
                <input
                  placeholder="Your email address..."
                  className="form-control"
                  type="text"
                />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RecipeNewsletter;

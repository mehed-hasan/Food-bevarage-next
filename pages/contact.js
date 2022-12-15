import MayLike from "../components/Contact/MayLike";

function ContactPage() {
  return (
    <>
      <section className="first_content" id="contact_form">
        <div className="container">
          <h2>Contact us </h2>
          <div className="gap_64"></div>
          <div className="row">
            <div className="col-lg-4">
              <iframe
                className="w-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40126.270698340806!2d90.41570086077827!3d23.796512941296694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e2!4m0!4m0!5e0!3m2!1sen!2sbd!4v1658034387774!5m2!1sen!2sbd"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-lg-8">
              <form action="" method="post">
                <div className="row">
                  <div className="col-6">
                    <div className="form_group">
                      <label for="">Name</label>
                      <input
                        className="form-control"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form_group">
                      <label for="">Email Address</label>
                      <input
                        className="form-control"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="form_group">
                      <label for="">Subject</label>
                      <input
                        className="form-control"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form_group">
                      <label for="">Enquiry type</label>
                      <select className="form-control" name="" id="">
                        <option value="">Advertising 1</option>
                        <option value="">Advertising 2</option>
                        <option value="">Advertising 3</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form_group">
                      <label for="">Message</label>
                      <textarea
                        className="form-control"
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                      ></textarea>
                    </div>
                  </div>

                  <div className="review_btn">
                    <button type="submit">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <MayLike />
    </>
  );
}

export default ContactPage;

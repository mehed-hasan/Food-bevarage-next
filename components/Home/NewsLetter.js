import Image from "next/image";
import { useEffect, useState } from "react";

function NewsLetter() {
  const [newsLetter, setNewsLetter] = useState('');


  useEffect(() => {
    fetch("/assets/data/newsLetter.json")
      .then((res) => res.json())
      .then((differnet) => setNewsLetter(differnet));
  }, []);
  return (
    <>
      <div className="gap"></div>

      <section id="newsletter">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="newsletter_left">
                <h2
                  dangerouslySetInnerHTML={{ __html: newsLetter[0]?.heading }}
                ></h2>
                <p>{newsLetter[0]?.desc}</p>
                <a href="">view More</a>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="newsletter_right">
                <div className="news_letter_bg">
                  <Image src={`/assets/images/backgrounds/${newsLetter[0]?.image}`} alt="" width={288} height={395}/>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewsLetter;

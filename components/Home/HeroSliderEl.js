import Image from "next/image";
import Link from "next/link";

function HeroSliderEl({ data }) {
  return (
    <div className=" d-flex align-items-center hero_row">
      <div className="col-12 col-lg-6">
        <div className="hero_left">
          <h2>{data.title}</h2>
          <p>{data.moto}</p>

          <Link href=""> Save More</Link>
        </div>
      </div>
      <div className="col-12 col-lg-6">
        <div className="hero_right">
          <div className="hero_img1">
            <Image
              className="img-fluid"
              src={`/assets/images/backgrounds/${data.img_1}`}
              alt=""
              width={471}
              height={471}
            />
          </div>
          <div className="hero_img2">
            <Image
              className="img-fluid"
              src={`/assets/images/backgrounds/${data.img_2}`}
              alt=""
              width={471}
              height={471}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSliderEl;

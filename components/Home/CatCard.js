import Image from "next/image";
import Link from "next/link";

function CatCard({ data }) {
  return (
    <>
      <div className="col-6 col-md-3">
        <Link href="/">
          <div className="cat_card">
            <Image
              className="img-fluid"
              src={`/assets/images/category/${data.image}`}
              alt=""
              width={200}
              height={248}
            />
            <h4>{data.catName}</h4>
          </div>
        </Link>
      </div>
    </>
  );
}

export default CatCard;

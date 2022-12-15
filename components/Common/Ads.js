import Image from "next/image";

function Ads() {
 
  return (
    <div className="food_add_img">
      <Image
        className="img-fluid"
        src={`/assets/images/foods/offer.webp`}
        alt=""
        width={471}
        height={471}
      />
    </div>
  );
}

export default Ads;

import Image from "next/image";

function FoodCard({ data }) {
  return (
    <div className="row">
      <div className="col-5">
        <div className="food_img">
          <Image
            className="img-fluid"
            src={`/assets/images/foods/${data.image}`}
            alt=""
            width={100} height={100}
          />
        </div>
      </div>
      <div className="col-7">
        <div className="food_details">
          <h4>
            <a href="../pages/article_details.html">
              {data.title.length > 30
                ? data.title.substring(0, 30) + "..."
                : data.title}
            </a>
          </h4>
          <p>By {data.author} </p>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;

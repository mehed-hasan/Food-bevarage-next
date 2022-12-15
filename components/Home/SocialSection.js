import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function SocialSection() {
  const [socialPost, setSocialPost] = useState('');


  useEffect(() => {
    fetch("/assets/data/socialPost.json")
      .then((res) => res.json())
      .then((differnet) => setSocialPost(differnet));
  }, []);

  
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    autoPlay: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="gap"></div>
      <section id="social_section">
        <div className="container">
          <div className="social_heading">
            <h1>Check out @foodieland on Instagram</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </p>
          </div>
          <div className="gap"></div>

          <div className="social_posts text">
            <Slider {...settings}>
              {socialPost.length > 0 && socialPost?.map((item, index) => (
                <div key={index} className="post">
                  <Image
                    className="w-100"
                    src="/assets/images/posts/post.webp"
                    alt="post_images"
                    width={304}
                    height={466}
                  />
                </div>
              ))}
            </Slider>
          </div>

          <div className="gap"></div>

          <Link href="#" className="instagram_btn">
            Visit Our Instagram
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.875 0H15.125C18.9214 0 22 3.07862 22 6.875V15.125C22 18.9214 18.9214 22 15.125 22H6.875C3.07862 22 0 18.9214 0 15.125V6.875C0 3.07862 3.07862 0 6.875 0ZM15.125 19.9375C17.7788 19.9375 19.9375 17.7787 19.9375 15.125V6.875C19.9375 4.22125 17.7788 2.0625 15.125 2.0625H6.87502C4.22127 2.0625 2.06252 4.22125 2.06252 6.875V15.125C2.06252 17.7787 4.22127 19.9375 6.87502 19.9375H15.125Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.62207 11.2637C5.62207 8.2263 8.0847 5.76367 11.1221 5.76367C14.1594 5.76367 16.6221 8.2263 16.6221 11.2637C16.6221 14.301 14.1594 16.7637 11.1221 16.7637C8.0847 16.7637 5.62207 14.301 5.62207 11.2637ZM7.68457 11.2637C7.68457 13.1584 9.22732 14.7012 11.1221 14.7012C13.0168 14.7012 14.5596 13.1584 14.5596 11.2637C14.5596 9.36755 13.0168 7.82617 11.1221 7.82617C9.22732 7.82617 7.68457 9.36755 7.68457 11.2637Z"
                fill="white"
              />
              <circle cx="16.5" cy="5.35449" r="1" fill="white" />
            </svg>
          </Link>
        </div>
      </section>
      <div className="gap"></div>
    </>
  );
}

export default SocialSection;

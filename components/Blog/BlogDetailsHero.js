import Image from "next/image";

function BlogDetailsHero() {
  return (
    <>
      <div className="blog_img first_content">
        <Image
          className="img-fluid w-100 px-2 px-lg-5 "
          src="/assets/images/blog/blog.webp"
          alt=""
          width={100}
          height={100}
        />
      </div>

      <div className="gap"></div>
    </>
  );
}

export default BlogDetailsHero;

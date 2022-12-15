import Image from "next/image";
import Link from "next/link";


function BlogCard({data,pattern}) {
  console.log('====================================');
  console.log(data);
  console.log('====================================');
    return ( 
      
       <div >
         <div className={pattern === "col" ? 'item flex-column' : 'item d-flex flex-column flex-sm-row ' }>
          <Image src="/assets/images/foods/recipie.webp" alt="" width={100} height={100}/>
          <div className="about_item">
            <h3>{data.title}</h3>
            <div className="user_info">
              <Image src="/assets/images/users/user.svg"  alt="" width={100} height={100}/>
              <p>Jonathon Smith</p>
              <div className="date">{data.date1}</div>
            </div>
            <p className="blog_short_desc">
              {data.details?.substring(0,200) }{data.details.length > 200 ? '.....' :''}
            </p>

           <Link className="see_more" href={`/blogDetails/${data.id}/${data.title}`}>See More </Link>
          </div>
        </div>
       </div>
     );
}

export default BlogCard;
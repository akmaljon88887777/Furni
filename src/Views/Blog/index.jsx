import React from "react";
import Rasm from "../../Assets/post-1.jpg";
import Rasm2 from "../../Assets/post-2.jpg";
import Rasm3 from "../../Assets/post-3.jpg";
import Cards from "./Card";
import Carousel from "./Carousel";
function Blog() {
  const data = [
    {
      img: Rasm,
      title: "First Time Home Owner Ideas",
      text: (
        <div className="text-black">
          <span>
            by <a href="#">Kristin Watson</a>
          </span>
          <span>
            on <a href="#">Dec 19, 2021</a>
          </span>
        </div>
      ),
    },
    {
      img: Rasm2,
      title: "How To Keep Your Furniture Clean",
      text: (
        <div className="text-black">
          <span>
            by <a href="#">Robert Fox</a>
          </span>
          <span>
            on <a href="#">Dec 15, 2021</a>
          </span>
        </div>
      ),
    },
    {
      img: Rasm3,
      title: "Small Space Furniture Apartment Ideas",
      text: (
        <div className="text-[#6a6a6a]">
          <span>
            by{" "}
            <a href="#" className="text-[#6f6f6f]">
              Robert Fox
            </a>
          </span>
          <span>
            on{" "}
            <a href="#" className="text-[#6f6f6f]">
              Dec 12, 2021
            </a>
          </span>
        </div>
      ),
    },
    {
      img: Rasm,
      title: "First Time Home Owner Ideas",
      text: (
        <div class="text-[#6a6a6a]">
          <span>
            by{" "}
            <a href="#" className="text-[#6f6f6f]">
              Kristin Watson
            </a>
          </span>
          <span>
            on{" "}
            <a href="#" className="text-[#6f6f6f]">
              Dec 19, 2021
            </a>
          </span>
        </div>
      ),
    },
    {
      img: Rasm2,
      title: "How To Keep Your Furniture Clean",
      text: (
        <div class="text-[#6a6a6a]">
          <span>
            by
            <a href="#" className="text-[#6f6f6f]">
              Robert Fox
            </a>
          </span>
          <span>
            on
            <a href="#" className="text-[#6f6f6f]">
              Dec 15, 2021
            </a>
          </span>
        </div>
      ),
    },
    {
      img: Rasm3,
      title: "Small Space Furniture Apartment Ideas",
      text: (
        <div class="text-[#6a6a6a]">
          <span>
            by
            <a href="#" className="text-[#6f6f6f]">
              Robert Fox
            </a>
          </span>
          <span>
            on
            <a href="#" className="text-[#6f6f6f]">
              Dec 12, 2021
            </a>
          </span>
        </div>
      ),
    },
  ];
  return (
    <div className="bg-[#EFF2F1] w-full xl:h-auto py-10 my-0 grid items-center mb-0">
      <div className="xl:mx-20 lg:px-10 md:px-5 px-3">
        <div className="grid justify-items-center gap-y-7 gap-x-0 grid-cols-1 w-full md:grid-cols-3 items-center lg:grid-cols-3">
          {data.map((i) => (
            <Cards img={i.img} text={i.text} title={i.title} />
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-10 pb-52 mb-0">
        <Carousel />
      </div>
    </div>
  );
}

export default Blog;

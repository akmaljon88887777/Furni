import React from "react";
import Card from "./card";
import Carousel from "../Blog/Carousel";

function Services() {
  const data = [
    {
      img: "https://themewagon.github.io/furni/images/truck.svg",
      title: "Fast & Free Shipping",
      text: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
    },
    {
      img: "	https://themewagon.github.io/furni/images/bag.svg",
      title: "Easy to Shop",
      text: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
    },
    {
      img: "https://themewagon.github.io/furni/images/support.svg",
      title: "24/7 Support",
      text: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
    },
    {
      img: "https://themewagon.github.io/furni/images/return.svg",
      title: "Hassle Free Returns",
      text: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
    },
    {
      img: "https://themewagon.github.io/furni/images/truck.svg",
      title: "Fast & Free Shipping",
      text: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
    },
    {
      img: "	https://themewagon.github.io/furni/images/bag.svg",
      title: "Easy to Shop",
      text: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
    },
    {
      img: "https://themewagon.github.io/furni/images/support.svg",
      title: "24/7 Support",
      text: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
    },
    {
      img: "https://themewagon.github.io/furni/images/return.svg",
      title: "Hassle Free Returns",
      text: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
    },
  ];
  return (
    <div className="grid w-full justify-center my-[10%]">
      <div className="grid w-[90%] grid-cols-1 md:grid-cols-2 xl:ml-24 gap-y-10 lg:grid-cols-4 m-auto justify-center justify-items-center">
        {data.map((i) => (
          <Card img={i.img} text={i.text} title={i.title} />
        ))}
      </div>
      <br />
      <div className="flex justify-center w-full my-[12%]">
        <div className=" text-start mx-[7.5%] py-10 grid grid-cols-1 gap-3 md:grid-cols-1 lg:grid-cols-4">
          <div>
            <h4 className="text-[#2f2f2f] text-[32px] w-[85%]">
              Crafted with excellent material.
            </h4>
            <br />
            <p className="text-[#6a6a6a] text-[14px]">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <br />
            <button className="w-[120px] h-[49px] bg-[#2f2f2f] text-white rounded-full font-semibold text-[16px]">
              Explore
            </button>
          </div>
          <div className="text-center grid justify-items-center">
            <img
              src="https://themewagon.github.io/furni/images/product-1.png"
              alt=""
            />
            <br />
            <div className="text-[#2f2f2f]">
              <p className="text-[16px]">Nordic Chair</p>
              <p className="text-[18px] font-bold">$50.00</p>
            </div>
          </div>
          <div className="text-center grid justify-items-center">
            <img
              src="https://themewagon.github.io/furni/images/product-2.png"
              alt=""
            />
            <br />
            <div className="text-[#2f2f2f]">
              <p className="text-[16px]">Kruzo Aero Chair</p>
              <p className="text-[18px] font-bold">$78.00</p>
            </div>
          </div>
          <div className="text-center grid justify-items-center">
            <img
              src="https://themewagon.github.io/furni/images/product-3.png"
              alt=""
            />
            <br />
            <div className="text-[#2f2f2f]">
              <p className="text-[16px]">Ergonomic Chair</p>
              <p className="text-[18px] font-bold">$43.00</p>
            </div>
          </div>
        </div>
      </div>
      <br />

      <Carousel />
    </div>
  );
}

export default Services;

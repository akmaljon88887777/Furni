import React from "react";

export default function Card({ img, title, text }) {
  return (
    <div className="text-start">
      <div>
        <div>
          <img className="absolute" src={img} alt="" />
          <div className="w-[33px] h-[33px] relative bg-[#3b5d5033] rounded-full ml-[6%] -bottom-3"></div>
        </div>
        <div className="text-[14px] mt-[5%]">
          <div className="text-[#2f2f2f]">{title}</div>
          <div className="text-[#6a6a6a] w-[90%]">{text}</div>
        </div>
      </div>
    </div>
  );
}

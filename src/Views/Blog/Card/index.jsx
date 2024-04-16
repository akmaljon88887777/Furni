import React from "react";

function Cards({ img, title, text }) {
  return (
    <div className="xl:w-[415px] lg:w-[290px] md:w-[220px] w-full md:h-[350px] h-[361px]">
      <div>
        <a href="/">
          <img
            className="rounded-3xl align-middle hover:opacity-75 cursor-pointer transition-all"
            src={img}
            alt=""
          />
        </a>
        <br />
      </div>
      <div className="text-start text-[#2f2f2f] grid gap-2">
        <p className="text-[16px]">{title}</p>
        <p className="text-[13px] text-[#6a6a6a]">{text}</p>
      </div>
    </div>
  );
}

export default Cards;

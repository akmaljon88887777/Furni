import React from "react";

function Shop({ img, title, price }) {
  return (
    <div className="flex justify-center">
      <div className="grid xl:grid-cols-4 gap-2 lg:grid-cols-4 md:grid-cols-3 grid-cols-1">
        <div className="w-[330px] h-[442px] border">
          <div>
            <img src={img} alt="" />
          </div>
          <div className="text-[#2f2f2f]">
            <p className="text-[16px]">{title}</p>
            <p className="text-[18px] font-bold">${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;

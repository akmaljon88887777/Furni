import React from "react";
import Rasm from "../../../Assets/couch.png";
function Header() {
  return (
    <div className="bg-[#3b5d50] mt-auto xl:h-[64vh] items-center flex justify-center">
      <div className="w-[86%]">
        <div className="grid text-start lg:grid-cols-2 grid-cols-1 items-center">
          <div>
            <h4 className="xl:text-[58px] text-white font-bold w-[68%] text-start">
              Modern Interior Design Studio
            </h4>
            <br />
            <p class="mb-4 w-[65%] text-[14px] text-[#ffffff80]">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <div className="flex gap-2">
              <button className="w-[149px] h-[49px] rounded-full flex justify-center items-center bg-[#F9BF29] hover:bg-[#F8B810] font-semibold">
                Shop Now
              </button>
              <button className="w-[121px] h-[51px] rounded-full flex justify-center font-semibold text-white items-center bg-transparent hover:border-white border-[#768E85] border-2">
                Explore
              </button>
            </div>
          </div>
          <div>
            <img src={Rasm} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

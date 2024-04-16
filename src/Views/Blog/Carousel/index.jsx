import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import Rasm from "../../../Assets/person-1.png";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
function Carousel() {
  return (
    <div className="text-center">
      <div className="">
        <h4 className="text-[32px] text-[#2f2f2f] font-semibold">
          Testiminonals
        </h4>
        <br />
      </div>
      <br />
      <div className="">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper xl:w-[1200px] "
        >
          <SwiperSlide>
            <div>
              <q
                style={{ whiteSpace: "normal" }}
                className="text-[#6a6a6a] text-[18px] block xl:w-[72%] m-auto"
              >
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                vulputate velit imperdiet dolor tempor tristique. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Integer convallis volutpat dui quis scelerisque.
              </q>
              <br />
              <br />
              <div className="flex flex-col justify-center">
                <div className="flex justify-center">
                  <img
                    src={Rasm}
                    className="rounded-full w-[80px] h-[78px]"
                    alt=""
                  />
                </div>
                <br />
                <div className="text-[14px]">
                  <p className="text-[#2f2f2f] font-bold">Maria Jones</p>
                  <span class="block mb-3 text-[#6a6a6a]">
                    CEO, Co-Founder, XYZ Inc.
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <q
                style={{ unicodeBidi: "isolate", whiteSpace: "normal" }}
                className="text-[#6a6a6a] text-[18px] block w-[72%] m-auto"
              >
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                vulputate velit imperdiet dolor tempor tristique. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Integer convallis volutpat dui quis scelerisque.
              </q>
              <br />
              <br />
              <div className="flex flex-col justify-center">
                <div className="flex justify-center">
                  <img
                    src={Rasm}
                    className="rounded-full w-[80px] h-[78px]"
                    alt=""
                  />
                </div>
                <br />
                <div className="text-[14px]">
                  <p className="text-[#2f2f2f] font-bold">Maria Jones</p>
                  <span class="block mb-3 text-[#6a6a6a]">
                    CEO, Co-Founder, XYZ Inc.
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <q
                style={{ unicodeBidi: "isolate", whiteSpace: "normal" }}
                className="text-[#6a6a6a] text-[18px] block w-[72%] m-auto"
              >
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                vulputate velit imperdiet dolor tempor tristique. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Integer convallis volutpat dui quis scelerisque.
              </q>
              <br />
              <br />
              <div className="flex flex-col justify-center">
                <div className="flex justify-center">
                  <img
                    src={Rasm}
                    className="rounded-full w-[80px] h-[78px]"
                    alt=""
                  />
                </div>
                <br />
                <div className="text-[14px]">
                  <p className="text-[#2f2f2f] font-bold">Maria Jones</p>
                  <span class="block mb-3 text-[#6a6a6a]">
                    CEO, Co-Founder, XYZ Inc.
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Carousel;

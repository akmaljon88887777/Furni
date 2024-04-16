import React from "react";
import Carousel from "../Blog/Carousel";
import Rasm from "../../Assets/person_1.jpg";
import Rasm2 from "../../Assets/person_2.jpg";
import Rasm3 from "../../Assets/person_3.jpg";
import Rasm4 from "../../Assets/person_4.jpg";
function About() {
  return (
    <div>
      <div className="flex justify-center #EFF2F1 flex-col w-full">
        <div className="grid grid-cols-1 items-center w-[85%] m-auto my-[12%] lg:grid-cols-2 justify-items-center">
          <div>
            <div>
              <h4 className="text-[32px] text-[#2f2f2f]">Why Choose Us</h4>
              <p className="text-[#6a6a6a] text-[]">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
              </p>
            </div>
            <br />
            <div>
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <div className="text-start">
                  <div>
                    <img
                      className="absolute z-50"
                      src="https://themewagon.github.io/furni/images/truck.svg"
                      alt=""
                    />
                    <div className="w-[33px] h-[33px] relative bg-[#3b5d5033] rounded-full ml-[6%] -z-0 -bottom-3"></div>
                  </div>
                  <div className="text-[14px] mt-[5%]">
                    <div className="text-[#2f2f2f]">Fast & Free Shipping</div>
                    <div className="text-[#6a6a6a] w-[90%]">
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                      aliquet velit. Aliquam vulputate.
                    </div>
                  </div>
                </div>
                <div className="text-start">
                  <div>
                    <img
                      className="absolute z-50"
                      src="https://themewagon.github.io/furni/images/truck.svg"
                      alt=""
                    />
                    <div className="w-[33px] h-[33px] relative bg-[#3b5d5033] rounded-full ml-[6%] -z-0 -bottom-3"></div>
                  </div>
                  <div className="text-[14px] mt-[5%]">
                    <div className="text-[#2f2f2f]">Fast & Free Shipping</div>
                    <div className="text-[#6a6a6a] w-[90%]">
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                      aliquet velit. Aliquam vulputate.
                    </div>
                  </div>
                </div>
                <div className="text-start">
                  <div>
                    <img
                      className="absolute z-50"
                      src="https://themewagon.github.io/furni/images/truck.svg"
                      alt=""
                    />
                    <div className="w-[33px] h-[33px] relative bg-[#3b5d5033] rounded-full ml-[6%] -z-0 -bottom-3"></div>
                  </div>
                  <div className="text-[14px] mt-[5%]">
                    <div className="text-[#2f2f2f]">Fast & Free Shipping</div>
                    <div className="text-[#6a6a6a] w-[90%]">
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                      aliquet velit. Aliquam vulputate.
                    </div>
                  </div>
                </div>
                <div className="text-start">
                  <div>
                    <img
                      className="absolute z-50"
                      src="https://themewagon.github.io/furni/images/truck.svg"
                      alt=""
                    />
                    <div className="w-[33px] h-[33px] relative bg-[#3b5d5033] rounded-full ml-[6%] -z-0 -bottom-3"></div>
                  </div>
                  <div className="text-[14px] mt-[5%]">
                    <div className="text-[#2f2f2f]">Fast & Free Shipping</div>
                    <div className="text-[#6a6a6a] w-[90%]">
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                      aliquet velit. Aliquam vulputate.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://themewagon.github.io/furni/images/why-choose-us-img.jpg"
              alt=""
              className="w-[451px] h-[516px] rounded-2xl"
            />
          </div>
        </div>
        <div className="my-[10%] mt-0">
          <div className="text-center flex flex-col justify-center m-auto font-semibold">
            <h4 className="text-[32px] text-[#2f2f2f]">Our Team</h4>
            <div className=" flex justify-center my-[5%]">
              <div className="grid w-[90%] grid-cols-1  m-auto gap-[2%] text-start lg:grid-cols-4 justify-items-center">
                <div>
                  <div>
                    <img src={Rasm} alt="" className="w-[306px] h-[306px]" />
                    <br />
                    <div>
                      <p className="text-[28px] text-[#2f2f2f] underline">
                        Lawson Arnold
                      </p>
                      <p className="text-[14px] text-[#6a6a6a]">
                        CEO, Founder, Atty.
                      </p>
                    </div>
                    <br />
                  </div>
                  <div>
                    <p className="text-[14px] text-[#6a6a6a] font-normal w-[75%]">
                      Separated they live in. Separated they live in
                      Bookmarksgrove right at the coast of the Semantics, a
                      large language ocean.
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <img src={Rasm2} alt="" className="w-[306px] h-[306px]" />
                    <br />
                    <div>
                      <p className="text-[28px] text-[#2f2f2f] underline">
                        Jeremy Walker
                      </p>
                      <p className="text-[14px] text-[#6a6a6a]">
                        CEO, Founder, Atty.
                      </p>
                    </div>
                    <br />
                  </div>
                  <div>
                    <p className="text-[14px] text-[#6a6a6a] font-normal w-[75%]">
                      Separated they live in. Separated they live in
                      Bookmarksgrove right at the coast of the Semantics, a
                      large language ocean.
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <img src={Rasm3} alt="" className="w-[306px] h-[306px]" />
                    <br />
                    <div>
                      <p className="text-[28px] text-[#2f2f2f] underline">
                        Patrik White
                      </p>
                      <p className="text-[14px] text-[#6a6a6a]">
                        CEO, Founder, Atty.
                      </p>
                    </div>
                    <br />
                  </div>
                  <div>
                    <p className="text-[14px] text-[#6a6a6a] font-normal w-[75%]">
                      Separated they live in. Separated they live in
                      Bookmarksgrove right at the coast of the Semantics, a
                      large language ocean.
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <img src={Rasm4} alt="" className="w-[306px] h-[306px]" />
                    <br />
                    <div>
                      <p className="text-[28px] text-[#2f2f2f] underline">
                        Kathryn Ryan
                      </p>
                      <p className="text-[14px] text-[#6a6a6a]">
                        CEO, Founder, Atty.
                      </p>
                    </div>
                    <br />
                  </div>
                  <div>
                    <p className="text-[14px] text-[#6a6a6a] font-normal w-[75%]">
                      Separated they live in. Separated they live in
                      Bookmarksgrove right at the coast of the Semantics, a
                      large language ocean.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Carousel />
      </div>
    </div>
  );
}

export default About;

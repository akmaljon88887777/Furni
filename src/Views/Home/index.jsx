import Carousel from "../Blog/Carousel";
import Rasm from "../../Assets/post-1.jpg";
import Rasm2 from "../../Assets/post-2.jpg";
import Rasm3 from "../../Assets/post-3.jpg";
import HomeCards from "./Card";
function Home() {
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
  ];

  return (
    <div className="bg-[#EFF2F1]">
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
      {/* <div className="flex w-full justify-center">
        <div className="w-[90%] bg-blue-500 py-10 grid grid-cols-1 lg:grid-cols-2">
          <div>
            <img
              src="https://themewagon.github.io/furni/images/img-grid-1.jpg"
              alt=""
              className="xl:w-[497px] rounded-[20px]"
            />
            <div>
              <img
                src="https://themewagon.github.io/furni/images/img-grid-2.jpg"
                alt=""
              />
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex justify-center">
        <div className="w-[84%] mb-[10%] py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto justify-items-center">
          <div className="flex gap-4 items-center">
            <div className="rounded-lg bg-[#DCE5E4] p-0">
              <img
                src="	https://themewagon.github.io/furni/images/product-1.png"
                className="rounded-lg w-[160px] h-[120px]"
                alt=""
              />
            </div>
            <div className="text-[14px] grid gap-2">
              <p className="text-[#2f2f2f] font-semibold">Nordic Chair</p>
              <p className="text-[#6a6a6a] w-[74%]">
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              </p>
              <p className="text-[#2f2f2f]">Read More</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="rounded-lg bg-[#DCE5E4] p-0">
              <img
                src="	https://themewagon.github.io/furni/images/product-2.png"
                className="rounded-lg w-[160px] h-[120px]"
                alt=""
              />
            </div>
            <div className="text-[14px] grid gap-2">
              <p className="text-[#2f2f2f] font-semibold">Nordic Chair</p>
              <p className="text-[#6a6a6a] w-[74%]">
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              </p>
              <p className="text-[#2f2f2f]">Read More</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="rounded-lg bg-[#DCE5E4] p-0">
              <img
                src="	https://themewagon.github.io/furni/images/product-3.png"
                className="rounded-lg w-[160px] h-[120px]"
                alt=""
              />
            </div>
            <div className="text-[14px] grid gap-2">
              <p className="text-[#2f2f2f] font-semibold">Nordic Chair</p>
              <p className="text-[#6a6a6a] w-[74%]">
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              </p>
              <p className="text-[#2f2f2f]">Read More</p>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:mx-20 lg:px-10 md:px-5 px-3 my-[10%] mt-0">
        <div className="grid justify-items-center gap-y-7 gap-x-0 grid-cols-1 w-full md:grid-cols-3 items-center lg:grid-cols-3">
          {data.map((i) => (
            <HomeCards img={i.img} text={i.text} title={i.title} />
          ))}
        </div>
      </div>
      <Carousel />
    </div>
  );
}

export default Home;

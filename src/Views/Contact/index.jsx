import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";

import React from "react";

function Contact() {
  return (
    <div className="flex w-full justify-center bg-[#EFF2F1]">
      <div className=" my-10 w-full xl:mx-[22%] lg:mx-[22%] md:mx-[10%] mx-[5%]">
        <div>
          <div className="lg:flex grid-cols-1 grid justify-between my-24  container">
            <div className="flex gap-5 items-center">
              <div className="flex items-center justify-center w-[50px] h-[50px] rounded bg-[#3b5d50]">
                <ImLocation color="#fff" />
              </div>
              <div className="w-[54%] text-start">
                <p className="text-[14px] text-[#6a6a6a]">
                  43 Raymouth Rd. Baltemoer, London 3910
                </p>
              </div>
            </div>
            <div className="flex justify-start gap-5 items-center">
              <div className="flex items-center justify-center w-[50px] h-[50px] rounded bg-[#3b5d50]">
                <BsFillEnvelopeFill color="#fff" />
              </div>
              <div className="w-[58%] text-start">
                <p className="text-[14px] text-[#6a6a6a]">
                  info@yourdomain.com
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <div className="flex items-center justify-center w-[50px] h-[50px] rounded bg-[#3b5d50]">
                <BsFillTelephoneFill color="#fff" />
              </div>
              <div className="w-[65%] text-start">
                <p className="text-[14px] text-[#6a6a6a]">+1 294 3925 3939</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 ">
            <div className="text-start w-full">
              <label htmlFor="" className="text-[14px] text-[#000]">
                First Name
              </label>
              <input
                type="text"
                className="border xl:w-full lg:w-[420px] md:w-full w-full h-[50px] rounded"
              />
            </div>
            <div className="text-start w-full">
              <label htmlFor="" className="text-[14px] text-[#000]">
                Last Name
              </label>
              <input
                type="text"
                className="border xl:w-full lg:w-[420px] md:w-full w-full h-[50px] rounded-xl p-3 outline-none focus:border-[#3b5d50] focus:shadow-md"
              />
            </div>
          </div>
          <br />
          <div className="text-start">
            <label htmlFor="" className="text-[14px] text-[#000]">
              Email Address
            </label>
            <input
              type="text"
              className="w-[100%] h-[50px] border rounded-xl p-3 outline-none focus:border-[#3b5d50] focus:shadow-md"
            />
          </div>
          <br />
          <div className="text-start flex flex-col">
            <label htmlFor="" className="text-[14px] text-[#000]">
              Message
            </label>
            <textarea
              type="text"
              className="w-[100%] h-[133px] border rounded-xl p-3 outline-none focus:border-[#3b5d50] focus:shadow-md"
            />
            <br />
            <br />
            <button className="btn-blue w-[175px] h-[49px] rounded-full text-[16px] text-white bg-[#2f2f2f]">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

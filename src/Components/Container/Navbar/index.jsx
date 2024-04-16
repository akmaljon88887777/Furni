import { BsPerson } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import { CgClose, CgMenuLeft } from "react-icons/cg";
function Navbar() {
  const [menu, setMenu] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-[84px] bg-[#3b5d50] flex justify-center items-center">
      <div className="flex justify-between w-[86%] h-[84px] items-center text-white">
        <div>
          <a class="text-[32px] font-bold" href="#">
            Furni<span className="text-[#899E96]">.</span>
          </a>
        </div>
        <div className="lg:flex md:flex xl:flex hidden items-center xl:gap-10 md:gap-5 text-[#8DA199] font-semibold xl:text-[14px] lg:text-[13px] text-[13px]">
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#8da199",
              borderBottom: isActive ? "5px solid #F9BF29" : "none",
              paddigBottom: isActive ? "2%" : "none",
            })}
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#8da199",
              borderBottom: isActive ? "5px solid #F9BF29" : "none",
              paddigBottom: isActive ? "2%" : "none",
            })}
            to={"/shop"}
          >
            Shop
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#8da199",
              borderBottom: isActive ? "5px solid #F9BF29" : "none",
              paddigBottom: isActive ? "2%" : "none",
            })}
            to={"/about"}
          >
            About Us
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#8da199",
              borderBottom: isActive ? "5px solid #F9BF29" : "none",
              paddigBottom: isActive ? "2%" : "none",
            })}
            to={"/services"}
          >
            Services
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#8da199",
              borderBottom: isActive ? "5px solid #F9BF29" : "none",
              paddigBottom: isActive ? "2%" : "none",
            })}
            to={"/blog"}
          >
            Blog
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#8da199",
              borderBottom: isActive ? "5px solid #F9BF29" : "none",
              paddigBottom: isActive ? "2%" : "none",
            })}
            to={"/contact"}
          >
            Contact us
          </NavLink>
          <p className="md:text-[24px]">
            <BsPerson size={30} color="#fff" />
          </p>
          <p className="md:text-[24px]">
            <AiOutlineShoppingCart size={30} color="#fff" />
          </p>
        </div>
        <button
          onClick={() => {
            setOpen(!open);
            setMenu(!menu);
          }}
          className="lg:hidden md:hidden xl:hidden"
        >
          {menu ? (
            <button>
              <CgClose size={"30px"} />
            </button>
          ) : (
            <button
              onClick={() => {
                setMenu(false);
              }}
            >
              <CgMenuLeft size={"30px"} />
            </button>
          )}
        </button>
      </div>
      <div
        className={`lg:w-[100%] bg-[#3b5d50]  lg:hidden md:w-[90%] md:hidden w-[100%] ${
          open ? "h-[390px]" : "h-0"
        }  overflow-hidden mt-[520px] md:mt-[400px]  justify-start text-start absolute px-6 duration-300 transition-colors flex flex-col  gap-6 `}
      >
        <p
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#17a2b8] font-bold Active"
              : "NoActive"
          }
          to={"/"}
        >
          Home
        </p>
        <p
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#17a2b8] font-bold Active"
              : "NoActive"
          }
          to={"/shop"}
        >
          Shop
        </p>
        <p
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#17a2b8] font-bold Active"
              : "NoActive"
          }
          to={"/clasess"}
        >
          Shop Detail
        </p>
        <p
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#17a2b8] font-bold Active"
              : "NoActive"
          }
          to={"/teachers"}
        >
          salom
        </p>
        <p
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#17a2b8] font-bold Active"
              : "NoActive"
          }
          to={"/gallery"}
        >
          contact
        </p>

        <p
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#17a2b8] font-bold Active"
              : "NoActive"
          }
          to={"/contact"}
        >
          Contact
        </p>
      </div>
    </div>
  );
}

export default Navbar;

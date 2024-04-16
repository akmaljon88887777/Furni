import React from "react";
import Shop from "../Shop/index";

function Data() {
  const data = [
    {
      img: "https://themewagon.github.io/furni/images/product-3.png",
      title: "Nordic Chair",
      price: "50.00",
    },
    {
      img: "https://themewagon.github.io/furni/images/product-1.png",
      title: "Nordic Chair",
      price: "50.00",
    },
    {
      img: "https://themewagon.github.io/furni/images/product-2.png",
      title: "Kruzo Aero Chair",
      price: "78.00",
    },
    {
      img: "https://themewagon.github.io/furni/images/product-3.png",
      title: "Ergonomic Chair",
      price: "43.00",
    },
    {
      img: "https://themewagon.github.io/furni/images/product-3.png",
      title: "Nordic Chair",
      price: "50.00",
    },
    {
      img: "https://themewagon.github.io/furni/images/product-1.png",
      title: "Nordic Chair",
      price: "50.00",
    },
    {
      img: "https://themewagon.github.io/furni/images/product-2.png",
      title: "Kruzo Aero Chair",
      price: "78.00",
    },
    {
      img: "https://themewagon.github.io/furni/images/product-3.png",
      title: "Ergonomic Chair",
      price: "43.00",
    },
  ];
  return (
    <div className="grid justify-items-center my-[10%] m-auto">
      <div className="grid justify-items-center xl:ml-[2.5%] xl:grid-cols-4 mx-auto gap-2 lg:grid-cols-4 md:grid-cols-3 grid-cols-1">
        {data.map((i) => (
          <Shop img={i.img} title={i.title} price={i.price} />
        ))}
      </div>
    </div>
  );
}

export default Data;

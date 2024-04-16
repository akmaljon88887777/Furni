import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Views/Home";
import Shop from "../Views/Shop";
import About from "../Views/About";
import Services from "../Views/Services";
import Blog from "../Views/Blog";
import Contact from "../Views/Contact";
import Cart from "../Views/Cart";
import ThankYou from "../Views/Thank_You";
import Checkout from "../Views/Checkout";
import Data from "../Views/Shop/data";
function Router() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Data />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </div>
  );
}

export default Router;

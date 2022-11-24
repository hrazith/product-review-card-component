import React from "react";
import { ShoppingCart } from "phosphor-react";

export default function ProductCard({
  category,
  name,
  description,
  discountedPrice,
  originalPrice,
  heroMobile,
  heroDesktop,
}) {
  return (
    <div className="bg-white mx-auto max-w-[600px] overflow-hidden rounded-xl lg:flex">
      <img
        src={`images/${heroMobile}`}
        className="object-cover lg:hidden"
        alt=""
      />
      <img
        src={`images/${heroDesktop}`}
        className="object-cover hidden lg:block w-1/2 "
        alt=""
      />
      <div className="bg-white py-[1.2rem] lg:py-[1.6rem] px-6 lg:px-8 ">
        <span className="font-montserrat text-gray-500 tracking-[.3rem] text-xs uppercase">
          {category}
        </span>
        <h1 className="font-bold text-[2rem] font-fraunces leading-none mt-2.5 lg:mt-[1.1rem] mb-4 lg:mb-6">
          {name}
        </h1>
        <p className="font-montserrat text-gray-500 text-sm leading-relaxed lg:leading-[1.64] ">
          {description}
        </p>
        <div className="mt-4 mb-[.6rem] lg:mt-5 lg:mb-6 grid gap-0 lg:gap-12 grid-cols-2">
          <span className="text-[#3c5e52] text-[2rem] font-fraunces">
            ${discountedPrice}
          </span>

          <span className="font-montserrat line-through text-gray-500 text-sm pt-4 ">
            ${originalPrice}
          </span>
        </div>
        <div className="font-montserrat rounded-md bg-[#3c5e52] text-white  w-full p-3 text-center">
          {" "}
          <ShoppingCart size={18} className="inline-block" />
          <span className="text-sm pl-2">Add to Cart</span>
        </div>
      </div>
    </div>
  );
}

import React from "react";

const Product = ({data}) => {
   const {image, title, price} = data
  return (
    <div className="flex flex-col items-center gap-4 bg-slate-800 p-5 rounded-lg text-white w-[20vw]">
      <img
        src={image}
        alt=""
        className="rounded-lg"
      />
      <h2 className="text-xl font-bold">{title}</h2>
      <h3 className="text-lg font-bold">{price}</h3>

    </div>
  );
};

export default Product;

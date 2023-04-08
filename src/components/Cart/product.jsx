import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/button";

export default function Product({ category, product }) {
     const { id, name, spicy, vegetarian, price, image } = product;
     return (
          <div className="group relative bg-white rounded-2xl drop-shadow-2xl text-center cursor-pointer overflow-hidden hover:rounded-none sl-animated-xl">
               <img src={image} alt="" className="h-60 object-contain group-hover:scale-110 sl-animated-xl" />
               <ul className="absolute top-0 right-2 text-center text-white">
                    {spicy && <li className="bg-red-500 rounded-2xl px-2 mt-2">SPICY</li>}
                    {vegetarian && <li className="bg-green-500 rounded-2xl px-2 mt-2">VEGETARIAN</li>}
               </ul>
               <div className="font-semibold py-12 px-3">
                    <h2 className="truncate text-2xl mb-5 group-hover:text-red-500 sl-animated-lg">{name}</h2>
                    <h3 className="text-3xl my-5">${price}</h3>
                    <Link to={`/product/${category}/${id}`}><Button type="button" classes="relative z-20">Order Now</Button></Link>
               </div>
          </div>
     )
}
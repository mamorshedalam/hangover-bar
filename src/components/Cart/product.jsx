import React from "react";
import { Link } from "react-router-dom";
import itemImg from "../../assets/images/item/pizza.jpeg";

export default function Product() {

     return (
          <div className="group relative bg-white rounded-2xl drop-shadow-2xl text-center cursor-pointer overflow-hidden hover:rounded-none sl-animated-xl">
               <Link to={`/product/123`} className="absolute inset-0 z-10"></Link>
               <img src={itemImg} alt="" className="h-60 group-hover:scale-110 sl-animated-xl" />
               <div className="py-12 px-3">
                    <h2 className="font-semibold truncate text-2xl mb-5 group-hover:text-red-500 sl-animated-lg">Pizza Hat</h2>
                    <p className="h-16 leading-loose text-ellipsis overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ex vel aperiam tenetur iste nisi temporibus. Maiores dignissimos quidem laborum, expedita, nobis ullam consequuntur, ea facere nisi ad distinctio autem!</p>
                    <h3 className="font-semibold text-3xl py-5">$8.00</h3>
                    <Link to={`/product/987`} className="sl-btn-primary relative z-20">Place Order</Link>
               </div>
          </div>
     )
}
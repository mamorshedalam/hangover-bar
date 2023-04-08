import { faAngleDown, faAngleUp, faBagShopping, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import slideImg from "../assets/images/slider-img/buger.jpg";
import categoryImg from "../assets/images/category/talerz-vege-removebg-preview.png";
import { Link } from "react-router-dom";

export default function ProductDetail() {
     const [count, setCount] = useState(1)

     return (
          <>
               <div className="flex flex-wrap py-20">
                    <div className="basis-1/2 text-zinc-500 pr-6">
                         <h2 className="font-bold text-slate-950 text-5xl">Pizza Hut</h2>
                         <h3 className="text-2xl my-2">Chines Food</h3>
                         <p className="my-4">Fresh and testy seafood carry sit amet, consectetur Curabiture accumsan acutor pulvinar prian sit amet.</p>
                         <h4 className="font-medium text-2xl">Total order : <span className="text-slate-950">$24.00</span></h4>
                         <form className="flex items-center my-4">
                              <div className="flex items-center justify-between border border-slate-950 rounded-full p-2">
                                   <button onClick={() => setCount(Math.max(count - 1, 1))} className="text-sky-400 px-3"><FontAwesomeIcon icon={faAngleDown} /></button>
                                   <input type="text" value={count} onChange={(e) => { setCount(parseInt(e.target.value)) }} className="w-12 font-bold text-lg text-center text-slate-950 border-x border-slate-950" />
                                   <button onClick={() => setCount(Math.max(count + 1, 1))} className="text-sky-400 px-3"><FontAwesomeIcon icon={faAngleUp} /></button>
                              </div>
                              <button className="flex bg-slate-950 text-white gap-2 rounded-full p-2 pr-4 ml-6 hover:text-amber-500 sl-animated-lg"><span className="w-7 h-7 bg-amber-300 rounded-full"><FontAwesomeIcon icon={faBagShopping} /></span> Buy Now</button>
                         </form>
                         <div className="my-6">
                              <h2 className="font-medium text-2xl">May You Also Like:</h2>
                              <div className="flex flex-wrap gap-6 mt-5">
                                   <div className="relative bg-slate-950 text-center text-white rounded-2xl drop-shadow-2xl py-9 px-5">
                                        <Link to={`/product/123`} className="absolute inset-0 z-10"></Link>
                                        <img src={slideImg} alt="" className="w-32 h-32 rounded-full mb-5" />
                                        <h3 className="font-medium truncate text-lg my-2">Bugger</h3>
                                        <p><span className="text-red-500">$ </span>23.00</p>
                                   </div>
                                   <div className="relative bg-slate-950 text-center text-white rounded-2xl drop-shadow-2xl py-9 px-5">
                                        <Link to={`/product/123`} className="absolute inset-0 z-10"></Link>
                                        <img src={slideImg} alt="" className="w-32 h-32 rounded-full mb-5" />
                                        <h3 className="font-medium truncate text-lg my-2">Bugger</h3>
                                        <p><span className="text-red-500">$ </span>23.00</p>
                                   </div>
                                   <div className="relative bg-slate-950 text-center text-white rounded-2xl drop-shadow-2xl py-9 px-5">
                                        <Link to={`/product/123`} className="absolute inset-0 z-10"></Link>
                                        <img src={slideImg} alt="" className="w-32 h-32 rounded-full mb-5" />
                                        <h3 className="font-medium truncate text-lg my-2">Bugger</h3>
                                        <p><span className="text-red-500">$ </span>23.00</p>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="basis-1/2 pl-4">
                         <div className="relative w-[35rem] text-white mx-auto">
                              <img src={categoryImg} alt="" className="relative h-[35rem] rounded-full overflow-hidden z-40" />
                              <div className="absolute top-3/4 left-1/2 -translate-x-1/2 w-60 bg-amber-400 bg-gradient-to-l from-amber-400 to-amber-500 rounded-b-3xl p-6 pt-40 z-30">
                                   <p className="bg-slate-950 text-center rounded-full border border-white px-2 py-1"><FontAwesomeIcon icon={faClock} /> 10-18 mins</p>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}
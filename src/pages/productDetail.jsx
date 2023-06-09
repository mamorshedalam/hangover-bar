import { faAngleDown, faAngleUp, faBagShopping, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper";
import axios from "axios";

export default function ProductDetail() {
     const navigate = useNavigate();
     const effectRun = useRef(false);
     const { category, id } = useParams();
     const [count, setCount] = useState(1);
     const [data, setData] = useState([]);
     const [slideData, setSlideData] = useState([]);

     useEffect(() => {
          if (effectRun.current === true) {
               async function fetchData() {
                    try {
                         const response = await axios.get('/db.json');
                         const dataArray = await response.data[category];
                         const product = await dataArray.find((product) => product.id === id);
                         setSlideData(dataArray)
                         setData(product)
                    } catch (error) {
                         console.error(error);
                    }
               }
               fetchData();
          }
          return () => { effectRun.current = true }
     }, [id])

     function handleSubmit(e) {
          e.preventDefault();
          const orderProduct = {
               name: data.name,
               price: data.price,
               quantity: count
          }
          localStorage.setItem("order", JSON.stringify(orderProduct))
          navigate("/booking")
     }

     return (
          <>
               {data && <div className="flex flex-wrap py-20">
                    <div className="w-1/2 text-zinc-500 pr-6 space-y-2">
                         <h2 className="font-bold text-slate-950 text-5xl">{data.name}</h2>
                         <h3 className="capitalize text-2xl">{category}</h3>
                         {data.description && <p>{data.description}</p>}
                         <p className="font-medium">{data.spicy && <span className="text-red-500">Spicy</span>} {data.spicy && data.vegetarian && "&"} {data.vegetarian && <span className="text-green-400">Vegetarian</span>}</p>
                         {data.ingredients && data.ingredients.length > 0 && <div>
                              <p>Ingredients:</p>
                              <ul className="marker:text-sky-400 list-disc pl-5 space-y-1">
                                   {data.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
                              </ul>
                         </div>}
                         <h4 className="font-medium text-2xl pt-3">Total order : <span className="text-slate-950">${data.price * count}</span></h4>
                         <form onSubmit={handleSubmit} className="flex items-center my-4">
                              <div className="flex items-center justify-between border border-slate-950 rounded-full p-2">
                                   <button type="button" onClick={() => setCount(Math.max(count - 1, 1))} className="text-sky-400 px-3"><FontAwesomeIcon icon={faAngleDown} /></button>
                                   <input type="text" value={count} onChange={(e) => { setCount(parseInt(e.target.value)) }} className="w-12 font-bold text-lg text-center text-slate-950 border-x border-slate-950" />
                                   <button type="button" onClick={() => setCount(Math.max(count + 1, 1))} className="text-sky-400 px-3"><FontAwesomeIcon icon={faAngleUp} /></button>
                              </div>
                              <button type="submit" className="flex bg-slate-950 text-white gap-2 rounded-full p-2 pr-4 ml-6 hover:text-amber-500 sl-animated-lg"><span className="w-7 h-7 bg-amber-300 rounded-full"><FontAwesomeIcon icon={faBagShopping} /></span> Buy Now</button>
                         </form>
                         {slideData && slideData.length > 0 && <div className="my-6 pt-3">
                              <h2 className="font-medium text-2xl mb-6">May You Also Like:</h2>
                              <Swiper modules={[Autoplay]}
                                   spaceBetween={40}
                                   slidesPerView={3}
                                   loop={true}
                                   autoplay={{
                                        delay: 1500,
                                        disableOnInteraction: false,
                                   }}>
                                   {slideData.map(slide => <SwiperSlide key={slide.id}>
                                        <div className="relative bg-slate-950 text-center text-white rounded-2xl drop-shadow-2xl py-9 px-5">
                                             <Link to={`/product/${category}/${slide.id}`} className="absolute inset-0 z-10"></Link>
                                             <img src={slide.image} alt="" className="w-32 h-32 rounded-full mx-auto mb-5" />
                                             <h3 className="font-medium truncate text-lg my-2">{slide.name}</h3>
                                             <p><span className="text-red-500">$ </span>{slide.price}</p>
                                        </div>
                                   </SwiperSlide>)}
                              </Swiper>
                         </div>}
                    </div>
                    <div className="w-1/2 pl-4">
                         <div className="relative w-[35rem] text-white mx-auto">
                              <img src={data.image} alt="" className="relative h-[35rem] object-fill rounded-full overflow-hidden z-40" />
                              <div className="absolute top-3/4 left-1/2 -translate-x-1/2 w-60 bg-amber-400 bg-gradient-to-l from-amber-400 to-amber-500 rounded-b-3xl p-6 pt-40 z-30">
                                   <p className="bg-slate-950 text-center rounded-full border border-white px-2 py-1"><FontAwesomeIcon icon={faClock} /> 10-18 mins</p>
                              </div>
                         </div>
                    </div>
               </div>}
          </>
     )
}
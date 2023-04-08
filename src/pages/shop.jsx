import React, { useEffect, useRef, useState } from "react";
import Product from "../components/Cart/product";
import axios from "axios";

export default function Shop() {
     const effectRun = useRef(false)
     const [data, setData] = useState([]);
     const [activeCat, setActiveCat] = useState("pizza");
     const [isCollapsed, setIsCollapsed] = useState(true);
     const category = ["pizza", "pasta", "salads", "dessert", "drinks", "sauces", "sides"];

     useEffect(() => {
          if (effectRun.current === true) {
               async function fetchData() {
                    try {
                         const response = await axios.get('/public/db.json');
                         const dataArray = response.data[activeCat];
                         setData(dataArray)
                    } catch (error) {
                         console.error(error);
                    }
               }
               fetchData();
          }
          return () => { effectRun.current = true }
     }, [activeCat])


     const accordionToggle = () => {
          if (isCollapsed) {
               setIsCollapsed(false)
          } else {
               setIsCollapsed(true)
          }
     }
     return (
          <div className="flex flex-wrap my-9">
               <aside className="basis-1/6 pr-9">
                    {category && category.length > 0 && <div>
                         <h4 onClick={accordionToggle} className="flex flex-wrap justify-between items-center font-bold uppercase text-lg cursor-pointer"><span>Food Category</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 fill-neutral-900"><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg></h4>
                         <ul className={`mt-2.5 mb-5 sl-animated-xl ${isCollapsed ? "max-h-60" : "h-0"}`}>
                              {category.map((item, index) => (<li key={index}><button type="button" onClick={() => { setActiveCat(item) }} className={`${activeCat == item ? "text-slate-950" : "text-zinc-500"} block w-full text-left font-medium capitalize py-1 hover:text-slate-950 sl-animated-lg`}>{item}</button></li>))}
                         </ul>
                    </div>}
               </aside>

               <main className="grid grid-cols-3 basis-5/6 gap-6">
                    {data && data.length > 0 && data.map(product => (<Product key={product.id} category={activeCat} product={product} />))}
               </main>
          </div>
     )
}
import React from "react";
import Category from "../components/Filter/category";
import Product from "../components/Cart/product";

export default function Shop() {

     const category = ["Chines", "Tai", "Indian", "Deshi", "Western", "Chines", "Tai", "Indian", "Deshi", "Western"]

     return (
          <div className="flex flex-wrap my-9">
               <aside className="basis-1/6 pr-9">
                    <Category name="Test" list={category} />
               </aside>

               <main className="grid grid-cols-3 basis-5/6 gap-6">
                    <Product />
               </main>
          </div>
     )
}
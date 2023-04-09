import React, { useState } from "react";
import Input from "../components/Input/Input";
import Button from "../components/Button/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Booking() {
     const navigate = useNavigate();
     const [submitted, setSubmitted] = useState(false)
     const data = JSON.parse(localStorage.getItem('order'));
     const [object, setObject] = useState({
          name: "",
          city: "",
          postcode: "",
          address: "",
          apartment: "",
          phone: "",
          email: "",
          note: "",
          payMethod: "",
          bill: "",
     })

     function handleSubmit(e) {
          e.preventDefault();
          setObject({ ...object, bill: (data["price"] * data["quantity"]) + 8 })
          setSubmitted(true)
          localStorage.removeItem('order');
     }


     function handleChange(e) {
          const field = e.target;
          if (field.name === 'payment') {
               setObject({ ...object, payMethod: field.id })
          } else {
               const newObject = { ...object }
               newObject[field.id] = field.value
               setObject(newObject)
          }

     }
     return (
          <>
               <form onSubmit={handleSubmit} className="sl-container flex flex-wrap py-14">
                    <main className="grid basis-2/3 grid-cols-2 gap-6 pr-6">
                         <h2 className="col-span-2 font-bold uppercase text-xl border-b border-zinc-400 py-8">Billing Details</h2>
                         <div className="col-span-2">
                              <label htmlFor="name" className="relative after:absolute after:left-full after:top-0 after:text-red-500 after:content-['*']">Name</label>
                              <Input id="name" type="text" onBlur={handleChange} classes="text-zinc-400 text-sm mt-3" />
                         </div>
                         <div className="col-span-1">
                              <label htmlFor="city" className="relative after:absolute after:left-full after:top-0 after:text-red-500 after:content-['*']">City / Town</label>
                              <Input id="city" type="text" onBlur={handleChange} classes="text-zinc-400 text-sm mt-3" />
                         </div>
                         <div className="col-span-1">
                              <label htmlFor="postcode" className="relative after:absolute after:left-full after:top-0 after:text-red-500 after:content-['*']">Postcode / ZIP</label>
                              <Input id="postcode" type="text" onBlur={handleChange} classes="text-zinc-400 text-sm mt-3" />
                         </div>
                         <div className="col-span-2">
                              <label htmlFor="address" className="relative after:absolute after:left-full after:top-0 after:text-red-500 after:content-['*']">Address</label>
                              <Input id="address" placeholder="Street Address" type="text" onBlur={handleChange} classes="text-zinc-400 text-sm mt-3" />
                              <Input id="apartment" placeholder="Apartment, suite, unite ect (optinal)" type="text" onBlur={handleChange} classes="text-zinc-400 text-sm mt-3" />
                         </div>
                         <div className="col-span-1">
                              <label htmlFor="phone" className="relative after:absolute after:left-full after:top-0 after:text-red-500 after:content-['*']">Phone</label>
                              <Input id="phone" type="tel" onBlur={handleChange} classes="text-zinc-400 text-sm mt-3" />
                         </div>
                         <div className="col-span-1">
                              <label htmlFor="email" className="relative after:absolute after:left-full after:top-0 after:text-red-500 after:content-['*']">Email</label>
                              <Input id="email" type="email" onBlur={handleChange} classes="text-zinc-400 text-sm mt-3" />
                         </div>
                         <div className="col-span-2">
                              <label htmlFor="note" className="relative after:absolute after:left-full after:top-0 after:text-red-500 after:content-['*']">Order notes</label>
                              <Input id="note" placeholder="Notes about your order, e.g. special notes for delivery." type="text" onBlur={handleChange} classes="text-zinc-400 text-sm mt-3" />
                         </div>
                    </main>
                    <aside className="basis-1/3 pl-6">
                         <div className="bg-stone-100 py-9 px-10">
                              <h2 className="font-bold uppercase text-2xl border-b border-zinc-400 pb-6">Your order</h2>
                              <ul className="py-4">
                                   <li className="font-medium mb-4">Food <span className="float-right">Total</span></li>
                                   {data && <>
                                        <li className="mb-3"><span>{data["quantity"]} x</span> {data["name"]} <span className="float-right">$ {data["price"]}</span></li>
                                        <li className="border-b border-zinc-400 pb-2 mb-2">Delivery Fee <span className="float-right">$ 8</span></li>
                                        <li>Total <span className="float-right font-bold text-red-500">$ {(data["price"] * data["quantity"]) + 8}</span></li>
                                   </>}
                              </ul>
                              <h3 className="font-bold mb-4">Payment Method:</h3>
                              <ul>
                                   <li className="flex items-center gap-4"><input type="radio" name="payment" id="bkash" onClick={handleChange} className="w-auto" /><label htmlFor="bkash">Bkash</label></li>
                                   <li className="flex items-center gap-4"><input type="radio" name="payment" id="nogod" onClick={handleChange} className="w-auto" /><label htmlFor="nogod">Nogod</label></li>
                                   <li className="flex items-center gap-4"><input type="radio" name="payment" id="cod" onClick={handleChange} className="w-auto" /><label htmlFor="cod">Cash on Delivery</label></li>
                              </ul>
                              <Button type="submit" classes="w-full mt-6">place order</Button>
                         </div>
                    </aside>
               </form>
               <div className={`${submitted ? "block" : "hidden"} absolute inset-0  max-w-lg rounded-2xl h-fit drop-shadow-xl bg-slate-950 text-white text-center font-bold text-2xl py-10 mx-auto mt-40 z-50`}>
                    <button onClick={() => { setSubmitted(false); navigate("/") }} className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-red-500"><FontAwesomeIcon icon={faXmark} /></button>
                    <FontAwesomeIcon className="text-7xl text-green-500 mb-6" icon={faCheck} />
                    <h2 className="">YOUR ORDER PLACED</h2>
               </div>
          </>
     )
}
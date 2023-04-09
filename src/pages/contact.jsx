import React from "react";
import Button from "../components/Button/button";
import Input from "../components/Input/input";

export default function Contact() {
     return (
          <main>

               <section className="sl-container flex flex-wrap items-end py-24">
                    <div className="basis-1/2 space-y-5 px-4">
                         <div className="space-y-3">
                              <span className="text-lg text-red-500">Information</span>
                              <h2 className="font-bold text-5xl leading-tight">Contact Us</h2>
                              <p >As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.</p>
                         </div>
                         <div className="space-y-2">
                              <h4 className="font-bold text-2xl">America</h4>
                              <p>195 E Parker Square Dr, Parker, CO 801</p>
                              <span>+43 982-314-0958</span>
                         </div>
                         <div className="space-y-2">
                              <h4 className="font-bold text-2xl">America</h4>
                              <p>195 E Parker Square Dr, Parker, CO 801</p>
                              <span>+43 982-314-0958</span>
                         </div>
                    </div>
                    <div className="basis-1/2 px-4">
                         <form className="grid grid-cols-2 gap-6">
                              <Input placeholder="Name" type="text" classes="col-span-1" />
                              <Input placeholder="Email" type="email" classes="col-span-1" />
                              <textarea placeholder="Message" type="textarea" className="col-span-2 h-40 border pl-3 py-3"></textarea>
                              <div className="col-span-2 text-right"><Button>send message</Button> </div>
                         </form>
                    </div>
               </section>
          </main>
     )
}
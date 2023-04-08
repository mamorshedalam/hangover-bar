import React from "react";

export default function Button({ children, type, classes, name = "default" }) {

     return (
          <button type={type} data-name={name} className={`data-[name=default]:sl-primary data-[name=red]:sl-red data-[name=blue]:sl-blue capitalize text-white font-medium rounded-3xl py-3 px-9 hover:text-slate-950 sl-animated-lg ${classes}`}>{children}</button>
     )
}
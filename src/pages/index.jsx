import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faQuoteRight, faStar } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button/button";
import heroImg from "../assets/images/banner1.jpg";
import MobileImg from "../assets/images/MobileLogo.png";
import delivaryImg from "../assets/images/icon/devlivaryLogo.jpg";
import mobileappImg from "../assets/images/icon/mobileappLogo.jpg";
import supportImg from "../assets/images/icon/supportLogo.jpg";
import appstoreImg from "../assets/images/icon/apple-appstore.png";
import playstoreImg from "../assets/images/icon/play-store.png";
import placeOrderImg from "../assets/images/icon/placeOrderIcon.jpg";
import payOrderImg from "../assets/images/icon/payOrderIcon.jpg";
import BecomeaDriverImg from "../assets/images/icon/BecomeaDriver.jpg";
import enjoyFoodImg from "../assets/images/icon/enjoyFood.jpg";
import reviewImg1 from "../assets/images/team/samMatumban_review.jpeg";
import reviewImg2 from "../assets/images/team/lilyRoger_review.jpeg";

export default function Index() {

     return (
          <>
               <section className="flex flex-wrap py-10">
                    <div className="w-1/2">
                         <h1 className="font-bold text-7xl leading-tight py-5">We provide <br /><span className="text-red-500">Super fast</span><br /> Delivery service</h1>
                         <p>We provide super fast delivery service, and you just have to wait while sitting at home. Let’s use our services right now and get discounts of up to 50%.</p>
                         <Link to={`/shop`}><Button type="button" name="red" classes="my-6">Show Now</Button></Link>
                    </div>
                    <div className="w-1/2 pl-10">
                         <img src={heroImg} alt="" className="max-w-lg rounded-3xl" />
                    </div>
               </section>

               <section className="grid grid-cols-3 gap-6 py-10">
                    <div className="flex items-center bg-white rounded-xl cursor-pointer p-3 hover:drop-shadow-lg sl-animated-lg">
                         <img src={delivaryImg} alt="" className="w-24 rounded-xl drop-shadow-lg mr-6" />
                         <div>
                              <h2 className="font-bold text-2xl mb-4">Fastest Delivery</h2>
                              <p>Get your food in less than 1 hour</p>
                         </div>
                    </div>
                    <div className="flex items-center bg-white rounded-xl cursor-pointer p-3 hover:drop-shadow-lg sl-animated-lg">
                         <img src={mobileappImg} alt="" className="w-24 rounded-xl drop-shadow-lg mr-6" />
                         <div>
                              <h2 className="font-bold text-2xl mb-4">Mobile App</h2>
                              <p>Easy to use Mobile App</p>
                         </div>
                    </div>
                    <div className="flex items-center bg-white rounded-xl cursor-pointer p-3 hover:drop-shadow-lg sl-animated-lg">
                         <img src={supportImg} alt="" className="w-24 rounded-xl drop-shadow-lg mr-6" />
                         <div>
                              <h2 className="font-bold text-2xl mb-4">24/7 Support</h2>
                              <p>24/7 customer service</p>
                         </div>
                    </div>
               </section>

               <section className="flex flex-wrap items-center py-20">
                    <div className="w-1/2">
                         <div className="space-y-3 py-7">
                              <span className="text-lg text-red-500">Mobile Apps</span>
                              <h2 className="font-bold text-5xl leading-tight">Find Your Favorites and Discover New Ones</h2>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac enim
                                   sollicitudin, viverra est vel, volutpat orci. Maecenas at velit sodales, laoreet
                                   ligula eu, rutrum metus. Donec lacus ligula, mollis sit amet enim non</p>
                         </div>
                         <h3 className="font-bold text-2xl mb-9">Download the App and get <span className="text-red-500">Special Discount</span></h3>
                         <a href="" className="w-52 rounded-md overflow-hidden mr-6 hover:-translate-y-5 sl-animated-xl"><img src={appstoreImg} alt="" /></a>
                         <a href="" className="w-52 rounded-md overflow-hidden mr-6 hover:-translate-y-5 sl-animated-xl"><img src={playstoreImg} alt="" /></a>
                    </div>
                    <div className="w-1/2">
                         <img src={MobileImg} alt="" />
                    </div>
               </section>

               <section className="py-10">
                    <div className="w-1/2 text-center space-y-3 py-7 mx-auto">
                         <span className="text-lg text-red-500">How does it work</span>
                         <h2 className="font-bold text-5xl leading-tight">We Make It Simple For You</h2>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac enim sollicitudin, viverra est vel,
                              volutpat orci. Maecenas at velit sodales.</p>
                    </div>
                    <div className="grid grid-cols-4 gap-6 mb-6">
                         <div className="text-center space-y-3">
                              <img src={placeOrderImg} alt="" className="w-24 rounded-xl drop-shadow-lg mx-auto" />
                              <h3 className="font-bold text-2xl">1. Place your order</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                              <a href="" className="text-amber-400 hover:text-sky-400 sl-animated-lg">Our Suggestion <FontAwesomeIcon icon={faCaretRight} /> </a>
                         </div>
                         <div className="text-center space-y-3">
                              <img src={payOrderImg} alt="" className="w-24 rounded-xl drop-shadow-lg mx-auto" />
                              <h3 className="font-bold text-2xl">2. Pay your order</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                              <a href="" className="text-amber-400 hover:text-sky-400 sl-animated-lg">Payment FAQs <FontAwesomeIcon icon={faCaretRight} /> </a>
                         </div>
                         <div className="text-center space-y-3">
                              <img src={BecomeaDriverImg} alt="" className="w-24 rounded-xl drop-shadow-lg mx-auto" />
                              <h3 className="font-bold text-2xl">3. Order sent</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                              <a href="" className="text-amber-400 hover:text-sky-400 sl-animated-lg">Shipping FAQs <FontAwesomeIcon icon={faCaretRight} /> </a>
                         </div>
                         <div className="text-center space-y-3">
                              <img src={enjoyFoodImg} alt="" className="w-24 rounded-xl drop-shadow-lg mx-auto" />
                              <h3 className="font-bold text-2xl">4. Enjoy your food</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                              <a href="" className="text-amber-400 hover:text-sky-400 sl-animated-lg">Give Us Review <FontAwesomeIcon icon={faCaretRight} /> </a>
                         </div>
                    </div>
               </section>

               <section className="flex flex-wrap items-center py-10">
                    <div className="w-1/2 space-y-3 py-7">
                         <span className="text-lg text-red-500">Get to Know Us</span>
                         <h2 className="font-bold text-5xl leading-tight">Here We Are, Food Delivery Guys</h2>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac enim
                              sollicitudin, viverra est vel, volutpat orci. Maecenas at velit sodales.</p>
                    </div>
                    <div className="grid grid-cols-2 w-1/2 text-center gap-4">
                         <h3 className="font-bold text-5xl">
                              <span>90K</span>
                              <span className="relative -top-4 text-amber-400">+</span>
                              <span className="block font-normal text-base pt-2">Happy Customer</span>
                         </h3>
                         <h3 className="font-bold text-5xl">
                              <span>90K</span>
                              <span className="relative -top-4 text-amber-400">+</span>
                              <span className="block font-normal text-base pt-2">Food Delivered</span>
                         </h3>
                         <h3 className="font-bold text-5xl">
                              <span>50K</span>
                              <span className="relative -top-4 text-amber-400">+</span>
                              <span className="block font-normal text-base pt-2">Trusted Partner</span>
                         </h3>
                         <h3 className="font-bold text-5xl">
                              <span>960K</span>
                              <span className="relative -top-4 text-amber-400">+</span>
                              <span className="block font-normal text-base pt-2">Experienced Driver</span>
                         </h3>
                    </div>
               </section>

               <section className="py-10">
                    <div className="w-1/2 text-center space-y-3 py-7 mx-auto">
                         <span className="text-lg text-red-500">Testimonials</span>
                         <h2 className="font-bold text-5xl leading-tight">Why Our Clients Choose Us</h2>
                    </div>
                    <div className="text-center space-y-4">
                         <FontAwesomeIcon icon={faQuoteRight} className="text-sky-400 text-7xl" />
                         <p className="font-medium text-lg"><i>In ornare sapien sed imperdiet viverra. Phasellus orci neque, pulvinar quis tellus sed, dapibus scelerisque magna. Suspendisse quis ipsum eleifend, accumsan massa non, scelerisque mauris. Maecenas facilisis erat sed odio bibendum aliquet.</i></p>
                         <div className="space-x-2 text-amber-400 text-xl">
                              <FontAwesomeIcon icon={faStar} />
                              <FontAwesomeIcon icon={faStar} />
                              <FontAwesomeIcon icon={faStar} />
                              <FontAwesomeIcon icon={faStar} />
                              <FontAwesomeIcon icon={faStar} />
                         </div>
                         <img src={reviewImg1} alt="" className="w-20 h-20 rounded-full mx-auto" />
                         <h3 className="font-bold text-xl">Sam Matumban</h3>
                         <span className="text-amber-400">Customer</span>
                    </div>
               </section>

               <section className="grid grid-cols-2 gap-9 pt-10 pb-32">
                    <div className="rounded-2xl shadow-lg shadow-sky-400/20 space-y-5 p-12 mb-20 hover:shadow-black/20 sl-animated-lg">
                         <img src={enjoyFoodImg} alt="" className="w-24 rounded-xl drop-shadow-lg" />
                         <h2 className="font-bold text-2xl">Become a Partner</h2>
                         <p>Pellentesque eu posuere dolor. Morbi semper varius egestas. Donec convallis interdum gravida. Cras rutrum est non tellus pulvinar, et posuere mauris luctus.</p>
                         <Button type="button" name="blue">Learn More <FontAwesomeIcon icon={faCaretRight} /></Button>
                    </div>
                    <div className="rounded-2xl shadow-lg shadow-amber-400/20 space-y-5 p-12 mt-20 hover:shadow-black/20 sl-animated-lg">
                         <img src={BecomeaDriverImg} alt="" className="w-24 rounded-xl drop-shadow-lg" />
                         <h2 className="font-bold text-2xl">Become a Partner</h2>
                         <p>Pellentesque eu posuere dolor. Morbi semper varius egestas. Donec convallis interdum gravida. Cras rutrum est non tellus pulvinar, et posuere mauris luctus.</p>
                         <Button type="button">Learn More <FontAwesomeIcon icon={faCaretRight} /></Button>
                    </div>
               </section>
          </>
     )
}
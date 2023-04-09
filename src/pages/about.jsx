import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper";
import aboutImg from "../assets/images/aboutImg.png";
import appstoreImg from "../assets/images/icon/apple-appstore.png";
import playstoreImg from "../assets/images/icon/play-store.png";
import reviewImg1 from "../assets/images/team/samMatumban_review.jpeg";
import clientImg from "../assets/images/icon/client-2.png"

export default function About() {
     return (
          <main>

               <section className="flex flex-wrap items-center py-10">
                    <div className="w-1/2">
                         <div className="space-y-3 py-7">
                              <span className="text-lg text-red-500">About</span>
                              <h2 className="font-bold text-5xl leading-tight">Who Are We ?</h2>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac enim
                                   sollicitudin, viverra est vel, volutpat orci. Maecenas at velit sodales, laoreet
                                   ligula eu, rutrum metus. Donec lacus ligula, mollis sit amet enim non</p>
                         </div>
                         <h3 className="font-bold text-2xl mb-9">Download the App and get <span className="text-red-500">Special Discount</span></h3>
                         <a href="" className="w-52 rounded-md overflow-hidden mr-6 hover:-translate-y-5 sl-animated-xl"><img src={appstoreImg} alt="" /></a>
                         <a href="" className="w-52 rounded-md overflow-hidden mr-6 hover:-translate-y-5 sl-animated-xl"><img src={playstoreImg} alt="" /></a>
                    </div>
                    <div className="w-1/2">
                         <img src={aboutImg} alt="" className="max-w-lg mx-auto" />
                    </div>
               </section>

               <section className="grid grid-cols-4 text-center gap-4 py-10">
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
               </section>

               <section className="py-10">
                    <div className="w-1/2 text-center space-y-3 py-7 mx-auto">
                         <span className="text-lg text-red-500">Testimonials</span>
                         <h2 className="font-bold text-5xl leading-tight">Why Our Clients Choose Us</h2>
                    </div>

                    <Swiper modules={[Autoplay]}
                         spaceBetween={30}
                         slidesPerView={1}
                         loop={true}
                         autoplay={{
                              delay: 1500,
                              disableOnInteraction: false,
                         }}>
                         <SwiperSlide>
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
                         </SwiperSlide>
                         <SwiperSlide>
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
                         </SwiperSlide>
                         <SwiperSlide>
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
                         </SwiperSlide>
                    </Swiper>
               </section>

               <section className="py-10">
                    <div className="w-1/2 text-center space-y-3 py-7 mx-auto">
                         <span className="text-lg text-red-500">Our Team</span>
                         <h2 className="font-bold text-5xl leading-tight">Meet Our Team</h2>
                    </div>
                    <div className="grid grid-cols-4 gap-9">
                         <div className="group bg-white rounded-lg drop-shadow-xl overflow-hidden hover:rounded-none sl-animated-lg">
                              <div className="relative overflow-hidden">
                                   <img src={reviewImg1} alt="profile" className="object-cover h-96 group-hover:scale-110 sl-animated-xl" />
                                   <ul className="absolute top-5 -right-14 opacity-0 group-hover:right-5 group-hover:opacity-100 sl-animated-xl">
                                        <li className="h-9 w-9 flex justify-center items-center bg-amber-400 mb-2.5"><a href="#"><svg className="w-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg></a></li>
                                        <li className="h-9 w-9 flex justify-center items-center bg-amber-400 mb-2.5"><a href="#"><svg className="w-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg></a></li>
                                        <li className="h-9 w-9 flex justify-center items-center bg-amber-400"><a href="#"><svg className="h-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg></a></li>
                                   </ul>
                              </div>
                              <div className="cursor-pointer py-3 pl-4">
                                   <h3 className="font-bold text-2xl">John Smith</h3>
                                   <span className="text-red-500">CEO</span>
                              </div>
                         </div>
                         <div className="group bg-white rounded-lg drop-shadow-xl overflow-hidden hover:rounded-none sl-animated-lg">
                              <div className="relative overflow-hidden">
                                   <img src={reviewImg1} alt="profile" className="object-cover h-96 group-hover:scale-110 sl-animated-xl" />
                                   <ul className="absolute top-5 -right-14 opacity-0 group-hover:right-5 group-hover:opacity-100 sl-animated-xl">
                                        <li className="h-9 w-9 flex justify-center items-center bg-amber-400 mb-2.5"><a href="#"><svg className="w-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg></a></li>
                                        <li className="h-9 w-9 flex justify-center items-center bg-amber-400 mb-2.5"><a href="#"><svg className="w-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg></a></li>
                                        <li className="h-9 w-9 flex justify-center items-center bg-amber-400"><a href="#"><svg className="h-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg></a></li>
                                   </ul>
                              </div>
                              <div className="cursor-pointer py-3 pl-4">
                                   <h3 className="font-bold text-2xl">John Smith</h3>
                                   <span className="text-red-500">CEO</span>
                              </div>
                         </div>
                         <div className="group bg-white rounded-lg drop-shadow-xl overflow-hidden hover:rounded-none sl-animated-lg">
                              <div className="relative overflow-hidden">
                                   <img src={reviewImg1} alt="profile" className="object-cover h-96 group-hover:scale-110 sl-animated-xl" />
                                   <ul className="absolute top-5 -right-14 opacity-0 group-hover:right-5 group-hover:opacity-100 sl-animated-xl">
                                        <li className="h-9 w-9 flex justify-center items-center bg-amber-400 mb-2.5"><a href="#"><svg className="w-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg></a></li>
                                        <li className="h-9 w-9 flex justify-center items-center bg-amber-400 mb-2.5"><a href="#"><svg className="w-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg></a></li>
                                        <li className="h-9 w-9 flex justify-center items-center bg-amber-400"><a href="#"><svg className="h-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg></a></li>
                                   </ul>
                              </div>
                              <div className="cursor-pointer py-3 pl-4">
                                   <h3 className="font-bold text-2xl">John Smith</h3>
                                   <span className="text-red-500">CEO</span>
                              </div>
                         </div>
                         <div className="group bg-white rounded-lg drop-shadow-xl overflow-hidden hover:rounded-none sl-animated-lg">
                              <div className="relative overflow-hidden">
                                   <img src={reviewImg1} alt="profile" className="object-cover h-96 group-hover:scale-110 sl-animated-xl" />
                                   <ul className="absolute top-5 -right-14 opacity-0 group-hover:right-5 group-hover:opacity-100 sl-animated-xl">
                                        <li className="h-9 w-9 flex justify-center items-center bg-amber-400 mb-2.5"><a href="#"><svg className="w-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg></a></li>
                                        <li className="h-9 w-9 flex justify-center items-center bg-amber-400 mb-2.5"><a href="#"><svg className="w-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg></a></li>
                                        <li className="h-9 w-9 flex justify-center items-center bg-amber-400"><a href="#"><svg className="h-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg></a></li>
                                   </ul>
                              </div>
                              <div className="cursor-pointer py-3 pl-4">
                                   <h3 className="font-bold text-2xl">John Smith</h3>
                                   <span className="text-red-500">CEO</span>
                              </div>
                         </div>
                    </div>
               </section>

               <section className="py-10">
                    <div className="text-center space-y-3 py-7">
                         <span className="text-lg text-red-500">Partner</span>
                         <h2 className="font-bold text-5xl leading-tight">Happy Clients</h2>
                    </div>
                    <div className="grid grid-cols-4 gap-9 mt-9">
                         <a href="" className="opacity-50 hover:opacity-100 sl-animated-lg"><img src={clientImg} alt="" className="h-20 object-contain" /></a>
                         <a href="" className="opacity-50 hover:opacity-100 sl-animated-lg"><img src={clientImg} alt="" className="h-20 object-contain" /></a>
                         <a href="" className="opacity-50 hover:opacity-100 sl-animated-lg"><img src={clientImg} alt="" className="h-20 object-contain" /></a>
                         <a href="" className="opacity-50 hover:opacity-100 sl-animated-lg"><img src={clientImg} alt="" className="h-20 object-contain" /></a>
                         <a href="" className="opacity-50 hover:opacity-100 sl-animated-lg"><img src={clientImg} alt="" className="h-20 object-contain" /></a>
                         <a href="" className="opacity-50 hover:opacity-100 sl-animated-lg"><img src={clientImg} alt="" className="h-20 object-contain" /></a>
                         <a href="" className="opacity-50 hover:opacity-100 sl-animated-lg"><img src={clientImg} alt="" className="h-20 object-contain" /></a>
                         <a href="" className="opacity-50 hover:opacity-100 sl-animated-lg"><img src={clientImg} alt="" className="h-20 object-contain" /></a>
                    </div>
               </section>
          </main>
     )
}
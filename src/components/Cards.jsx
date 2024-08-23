import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import student from "../../public/images/student.png"
import { Link } from 'react-router-dom';
import { useEffect } from 'react';



const Cards = ({ dashboardData }) => {

    useEffect(() => {
    }, [dashboardData]);

    return (

        <div>

            {/* Mobile version */}

            <div className='md:hidden mt-14 shadow-lg rounded-5xl'>
                <Swiper
                    slidesPerView={1}
                    //centeredSlides={true}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                    }}
                    pagination={{
                        clickable: true,
                        el: ".swiper-pagination",
                    }}

                    navigation={true}
                    breakpoints={{
                        300: {
                            slidesPerView: 1,
                        },
                        480: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 1,
                        },
                        992: {
                            slidesPerView: 1,
                        },
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper "
                >
                    {dashboardData.content?.map((getsubmenu, i) => (

                        <SwiperSlide>
                            <div className="w-full bg-white rounded-2xl  shadow-lg border-primary border-2 mb-10">


                                <div className='flex gap-5 mt-5'>
                                    <div className='items-center w-24 ml-5'>
                                        <img src={getsubmenu.img} alt="" className=' border-primary border-2 h-24 rounded-full' />
                                        <p className='font-display text-center text-xs text-gray-800'>{getsubmenu.tag}</p>

                                    </div>


                                    <div className='items-center justify-center flex flex-col'>
                                        <p className='font-display text-base font-semibold  text-gray-800'>{getsubmenu.companyName}</p>
                                        <div className='flex items-center gap-1'>
                                            <i class="fa-solid fa-location-dot text-primary text-xl"></i>
                                            <p className='w-4/3 font-display font-medium text-xs  text-gray-800'>{getsubmenu.location}</p>
                                        </div>
                                    </div>
                                </div>

                                <div id='bottom' className="mt-4 flex pl-6 pr-6 flex-col  lg:mr-0">

                                    <h4 class="font-display font-semibold text-md text-start ">{getsubmenu.title}</h4>

                                    <div className='flex gap-2 mt-3'>
                                        <i class="fa-regular fa-building mt-2"></i>
                                        {getsubmenu.categories?.map((data, i) => (
                                            <span className=" bg-gray-200 p-2 rounded-lg font-display text-xs text-gray-700">{data}</span>
                                        ))}

                                    </div>

                                    <div className=' items-center gap-2 flex mt-2'>
                                        <span className="font-display items-center text-xl font-medium text-primary ">{getsubmenu.activeCampaign}</span>

                                        <span className="font-display text-xs font-medium text-gray-800 ">Active Campaigns</span>

                                    </div>
                                    <div className='flex gap-2 items-center pt-2 pb-7'>
                                        <img src={student} alt="" className='rounded-lg w-6 h-6' />
                                        <p className=" cursor-pointer font-display text-xs text-black  font-medium ">{getsubmenu.description}</p>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}


                </Swiper>

            </div>





            {/* Web version */}

            <div className='hidden md:grid grid-cols-2 md:grid-cols-3 gap-4 mt-10 mb-10 '>
                {dashboardData.content?.map((getsubmenu, index) => (
                    <div className=" bg-white rounded-2xl  shadow-lg border-primary border-2">


                        <div className='flex gap-5 mt-5'>
                            <div className='items-center w-24 ml-5'>
                                <img src={getsubmenu.img} alt="" className=' border-primary border-2 h-24 rounded-full' />
                                <p className='font-display text-center text-xs text-gray-800'>{getsubmenu.tag}</p>

                            </div>


                            <div className='items-center justify-center  flex flex-col'>
                                <p className='font-display text-base font-semibold  text-gray-800'>{getsubmenu.companyName}</p>
                                <div className='flex items-center gap-1'>
                                    <i class="fa-solid fa-location-dot text-primary text-xl"></i>
                                    <p className='w-4/3 font-display font-medium text-xs  text-gray-800'>{getsubmenu.location}</p>
                                </div>
                            </div>
                        </div>

                        <div id='bottom' className=" md:mt-4 flex pl-6 pr-6 flex-col  lg:mr-0">

                            <h4 class="font-display font-semibold text-md text-start ">{getsubmenu.title}</h4>

                            <div className='flex gap-2 mt-3'>
                                <i class="fa-regular fa-building mt-2"></i>
                                {getsubmenu.categories?.map((data, i) => (
                                    <span className=" bg-gray-200 p-2 rounded-lg font-display text-xs text-gray-700">{data}</span>
                                ))}

                            </div>

                            <div className=' items-center gap-2 flex mt-2'>
                                <span className="font-display items-center text-xl font-medium text-primary ">{getsubmenu.activeCampaign}</span>

                                <span className="font-display text-xs font-medium text-gray-800 ">Active Campaigns</span>

                            </div>
                            <div className='flex gap-2 items-center pt-2 pb-7'>
                                <img src={student} alt="" className='rounded-lg w-6 h-6' />
                                <p className=" cursor-pointer font-display text-xs text-black  font-medium ">{getsubmenu.description}</p>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >




    )
}

export default Cards
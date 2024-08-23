import React from 'react'
import profile from "../../public/images/profile.jpeg"
import Work from './Work'


const Profile = () => {
    return (

        <div className='md:flex gap-10 mx-5 md:mx-20  justify-center'>

            {/* ----------------  Profile image with name  ----------------- */}
            <div className='-mt-20'>
                <div className='w-36  items-center justify-center '>
                    <img src={profile} alt="" className='w-36 h-36 border-primary border-2 rounded-full' />
                    <p className='font-display text-3xl font-bold text-gray-800'>Sakshi ©</p>
                    <p className='font-display justify-center text-sm font-semibold text-primary'>@sakshijoshi</p>

                </div>

                {/* ----------------  User common detail section  ----------------- */}
                <div className='mt-5'>
                    <div className='flex items-center gap-2'>
                        <i class="fa-regular fa-user  text-xl"></i>
                        <p className='font-display text-sm font-semibold '>22 Years, Female</p>
                    </div>


                    <div className='flex items-center gap-2 mt-1 mb-1'>
                        <i class="fa-solid fa-location-dot text-xl"></i>
                        <p className='font-display text-sm font-semibold '>Mumbai</p>
                    </div>

                    <div className='flex items-center gap-2'>
                        <i class="fa-solid fa-calendar-days text-xl"></i>
                        <p className='font-display text-sm font-semibold '>Joined in July 2021</p>
                    </div>

                </div>

            </div>

            <div>
                {/* ----------------  Profile works section  ----------------- */}
                <div className='h-20 md:h-28 gap-2 md:gap-5  flex'>
                    <Work number="13.21" type="Engagment" />
                    <Work number="81,856" type="Reach" />
                    <Work number="175" type="Content" />
                    <Work number="15" type="Collaboration" />

                </div>

                {/* ----------------  Below Profile works section  ----------------- */}

                <div className='md:flex gap-4'>
                    <div className="mt-7  md:w-96 items-center justify-center flex flex-col bg-black rounded-lg ">
                        <p className='font-display p-2 font-semibold text-xs md:text-sm text-white'>Let the beauty of what you love, be what you do</p>
                    </div>

                    <div className="flex mt-7 md:w-72 justify-center items-center rounded-lg border-black border-2">
                        <i class="fa-solid fa-money-bills text-green-700 text-xl"></i>

                        <p className='font-display p-2 font-bold text-xs md:text-base'>INR 29K - INR 41K</p>
                    </div>

                </div>

                <div className='mt-5 text-start w-[400px] md:w-full'>
                    <span className=" bg-gray-200 p-2 rounded-lg font-display font-medium text-xs text-gray-800">Actor</span>
                    <span className=" bg-gray-200 p-2 ml-2 mr-2 rounded-lg font-display font-medium text-xs text-gray-800">Fashion Model</span>
                    <span className=" bg-gray-200 p-2 rounded-lg font-display font-medium text-xs text-gray-800">Content Creator</span>

                </div>
            </div>

            {/* ----------------  AQS section  ----------------- */}
            <div className="mt-5 h-44 md:w-72 justify-center items-center flex flex-col bg-white rounded-xl  shadow-lg border-yellow-300 border-2 ">
                <p className='font-display  font-extrabold text-2xl '>73 ®</p>
                <div className='flex items-end gap-2'>
                    <i class="fa-solid fa-circle-info text-black text-2xl"></i>
                    <p className='font-display font-semibold text-lg'>AQS</p>
                </div>

                <div className='mt-4'>
                    <i class="fa-solid fa-star text-yellow-400 text-2xl"></i>
                    <i class="fa-solid fa-star text-yellow-400 text-2xl"></i>
                    <i class="fa-solid fa-star text-yellow-400 text-2xl"></i>
                    <i class="fa-solid fa-star text-yellow-400 text-2xl"></i>
                    <i class="fa-solid fa-star text-yellow-400 text-2xl"></i>
                </div>



            </div>

        </div>

    )
}

export default Profile
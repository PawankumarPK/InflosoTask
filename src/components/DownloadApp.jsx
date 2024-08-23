import React from 'react'
import playstore from "../../public/images/playstore.png"
import appstore from "../../public/images/appstore.png"


const DownloadApp = () => {
    return (
        <div className='ml-5'>
            <h4 class="font-display font-semibold text-primary mt-5 text-md text-start ">Download the app now</h4>

            <div className='md:flex gap-6 md:p-0 mb-5'>

                <img className='cursor-pointer  border-2  border-black rounded-md transition h-12 mt-6 hover:scale-110' src={playstore}></img>

                <img className='cursor-pointer  transition h-12 mt-2 md:mt-6 hover:scale-110' src={appstore}></img>


            </div>

        </div>
    )
}

export default DownloadApp
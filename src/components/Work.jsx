import React from 'react'

const Work = ({number, type}) => {
    return (
        <div className="mt-5 w-40 p-2 md:p-0 justify-center items-center flex flex-col bg-white rounded-xl  shadow-lg border-red-300 border-2 ">
            <p className='font-display  font-extrabold text-sm md:text-xl text-red-600'>{number}</p>
            <p className='font-display font-semibold text-xs md:text-base '>{type}</p>

        </div>

    )
}

export default Work
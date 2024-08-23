import React from 'react'
import { useState, useEffect, useRef } from 'react';
import DashboardJson from '../assets/json/Dashboard.json';
import Cards from './Cards';

const Tabs = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const firstBtnRef = useRef();

    useEffect(() => {
        firstBtnRef.current.focus();
    }, []);

    return (
        <div className=' flex justify-center items-center '>
            <div className='flex flex-col w-full'>
                <div className=' md:text-lg flex font-bold overflow-auto	'>
                    {DashboardJson.map((item, index) => (
                        <button
                            ref={index === 0 ? firstBtnRef : null}
                            key={index}
                            onClick={() => setSelectedTab(index)}
                            className={`  font-display text-xs md:text-xl font-semibold text-black outline-none w-full p-2 md:p-4 hover:text-primary   duration-500 focus:ring-0 focus:text-primary  ${selectedTab === index ? 'rounded-full text-primary' : ''
                                } `}
                        >
                            {item.Tab}
                        </button>
                    ))}
                </div>

                <div className='bg-white rounded-xl'>

                    {DashboardJson.map((item, index) => (
                        <div className={`${selectedTab === index ? '' : 'hidden'}`}>

                            <div className='flex flex-col'>
                                <Cards dashboardData={DashboardJson[selectedTab]} />
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tabs
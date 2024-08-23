import React from 'react'
import CoverProfile from '../components/CoverProfile'
import Profile from '../components/Profile'
import Dashboard from '../components/Dashboard'
import DownloadApp from '../components/DownloadApp'

const Home = () => {
    return (
        <div>

            <DownloadApp />
            <CoverProfile />
            <Profile />
            <Dashboard />

        </div>
    )
}

export default Home
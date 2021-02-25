import React from 'react'
import './Homepage.css'

import DeviceIdentifier from 'react-device-identifier'

import TopNavBar from 'Components/TopNavBar/TopNavBar'

import ProfileSidebar from './Panels/ProfileSidebar'
import WritePost from './Panels/WritePost'
import PostsSection from './Panels/PostsSection'

function Homepage() {
    return (
        <>
            <TopNavBar/>
            <div className="pageContainer homePage">
                <div className="homePage__flexContainer">
                    <div className="mainColumn leftSidebar desktopOnly__flex">
                        <ProfileSidebar/>
                        <div className="box2"></div>
                    </div>
                    <div className="mainColumn postsColumn">
                        <WritePost/>
                        <PostsSection/>
                    </div>
                    <DeviceIdentifier isDesktop={true}>
                        <div className="mainColumn rightSidebar desktopOnly__flex">
                            <div className="box1"></div>
                            <div className="box2"></div>
                        </div>
                    </DeviceIdentifier>
                </div>
            </div> 
        </>
    )
}

export default Homepage

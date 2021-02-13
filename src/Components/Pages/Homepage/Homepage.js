import React from 'react'
import './Homepage.css'

import TopNavBar from '../../TopNavBar/TopNavBar'

function Homepage() {
    return (
        <>
            <TopNavBar/>
            <div className="pageContainer homePage">
                <div className="homePage__flexContainer">
                    <div className="mainColumn leftSidebar">
                        <div className="box1"></div>
                        <div className="box2"></div>
                    </div>
                    <div className="mainColumn posts">
                        <div className="writePost"></div>
                        <div className="post"></div>
                    </div>
                    <div className="mainColumn rightSidebar">
                        <div className="box1"></div>
                        <div className="box2"></div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Homepage

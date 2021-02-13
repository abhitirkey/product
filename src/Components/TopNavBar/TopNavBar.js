import React from 'react'
import './TopNavBar.css'

import {BsSearch} from 'react-icons/bs'
import {FaHome, FaBoxes} from 'react-icons/fa'
import {IoDocumentsSharp} from 'react-icons/io5'
import {IoIosPeople} from 'react-icons/io'
import {SiHtmlacademy} from 'react-icons/si'

import ProfilePic from 'profile_pic.jpg'

function TopNavBar() {
    return (
        <nav className="TopNavBar">
            <span>Logo</span>
            <span>SearchBar</span>
            <div className="flex_spacer"></div>
            <div className="TopNavBar__rightPanel">
                <NavBarItem Icon={FaHome} text={"Home"}/>
                <NavBarItem Icon={IoDocumentsSharp} text={"Documents"}/>
                <NavBarItem Icon={SiHtmlacademy} text={"Academy"}/>
                <NavBarItem Icon={IoIosPeople} text={"My Network"}/>
                <NavBarItem src={ProfilePic} text={"My Profile"}/>
                <NavBarItem Icon={FaBoxes} text={"Offerings"}/>
            </div>
        </nav>
    )
}

export default TopNavBar

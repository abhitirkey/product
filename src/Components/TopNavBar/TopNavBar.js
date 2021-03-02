import React from 'react'
import './TopNavBar.css'

import {BsSearch} from 'react-icons/bs'
import {FaHome, FaBoxes} from 'react-icons/fa'
import {IoDocumentsSharp, IoDocumentsOutline} from 'react-icons/io5'
import {IoIosPeople} from 'react-icons/io'
import {SiHtmlacademy} from 'react-icons/si'
import {GiHamburgerMenu} from 'react-icons/gi'

import tyuteeLogo from './tyuteeNavBarLogo.png'

import NavBarItem from './NavBarItem'
import BottomNavBarItem from './BottomNavBarItem'

import {Avatar} from '@material-ui/core'

import AddPostIcon from './nav_icons/add_post.png'
import DocumentsIcon from './nav_icons/documents.png'
import HomeIcon from './nav_icons/home.png'
import NetworkIcon from './nav_icons/network.png'
import OfferingsIcon from './nav_icons/offerings.png'

import {useStateValue} from 'Context/StateProvider'


function TopNavBar() {

    const [{user}, dispatch] = useStateValue();
    return (
        <>
        <nav className="TopNavBar">
            <Avatar src={user.photoURL} className="avatarTopLeft Mobile"/>
            <img src={tyuteeLogo} alt="tyutee Logo" className="tyuteeLogo desktopOnly"/>
            <div className="TopNavBar__searchBar">
                <input type="text" value="" />
                <BsSearch/>
            </div>
            <div className="flex_spacer"></div>
            <div className="TopNavBar__rightPanel">
                <NavBarItem Icon={FaHome} text={"Home"} type="Desktop"/>
                <NavBarItem Icon={IoDocumentsSharp} text={"Documents"} type="Desktop"/>
                <NavBarItem Icon={SiHtmlacademy} text={"Academy"} type="Desktop"/>
                <NavBarItem Icon={IoIosPeople} text={"My Network"}/>
                <NavBarItem src={user.photoURL} text={"Profile"} displayName={user.displayName}/>
                <NavBarItem Icon={FaBoxes} text={"Offerings"}/>
                <NavBarItem Icon={GiHamburgerMenu} text={"HamburgerMenu"}/>
            </div>
        </nav>
        <nav className="bottomNavBar mobileOnly__flex">
            <BottomNavBarItem icon={HomeIcon} text={"Home"}/>
            <BottomNavBarItem icon={DocumentsIcon} text={"Documents"}/>
            <BottomNavBarItem icon={AddPostIcon} text={"Post"}/>
            <BottomNavBarItem icon={NetworkIcon} text={"MyNetwork"}/>
            <BottomNavBarItem icon={OfferingsIcon} text={"Offerings"}/>
        </nav>
        </>
    )
}

export default TopNavBar

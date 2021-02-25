import React from 'react'
import './Homepage__Panels.css'

import ProfilePic from './images/profile_pic.jpg'

import {BsDot} from 'react-icons/bs'
import { useStateValue } from 'Context/StateProvider'

function ProfileSidebar() {

    const [{user}, dispatch] = useStateValue();

    return (
        <div className="Homepage__ProfileSidebar">
            <img src={user.photoURL} alt="Profile Pic"/>
            <span className="FullName">{user.displayName}</span>
            <span className="Role_Department">Tutor <BsDot/> Information Technology</span>
            <span className="Institute">Manipal Institute of Technology</span>
            <div className="statsContainer">
                <div className="stats totalPosts">
                    <h2 className="pinkText center">20</h2>
                    <span className="smallText">Total Posts</span>
                </div>
                <div className="stats savedDocuments">
                    <h2 className="pinkText center">10</h2>
                    <span  className="smallText">Saved Documents</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileSidebar

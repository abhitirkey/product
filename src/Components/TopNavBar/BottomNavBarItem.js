import React from 'react'
import './TopNavBar.css'

function BottomNavBarItem({icon, text}) {
    return (
        <div className="BottomNavBarItem">
            {icon && <img src={icon} alt={text} width='50px'/>}
            {text && <span className="smallText">{text}</span>}
        </div>
    )
}

export default BottomNavBarItem

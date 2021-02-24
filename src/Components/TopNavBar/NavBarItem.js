import React from 'react'
import './TopNavBar.css'

import Avatar from '@material-ui/core/Avatar'

function NavBarItem({src, Icon, text, displayName}) {
    return (
        <div className={text === "HamburgerMenu" ? "NavBarItem Mobile": "NavBarItem Desktop"}>
            {src && <Avatar src={src} alt={text}/>}
            {Icon && <Icon/>}
            {text === 'Profile' && displayName && <span>{displayName}</span>}
            <div className="NavBarItem__Tooltip">
                {text}
            </div>
        </div>
    )
}

export default NavBarItem

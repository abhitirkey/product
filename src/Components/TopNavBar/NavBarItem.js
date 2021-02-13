import React from 'react'
import './TopNavBar.css'

import Avatar from '@material-ui/core/Avatar'

function NavBarItem({src, Icon, text}) {
    return (
        <div className="NavBarItem">
            {src && <Avatar src={src} alt={text}/>}
            {Icon && <Icon/>}
            <span>{text}</span>
        </div>
    )
}

export default NavBarItem

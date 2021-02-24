import React from 'react'
import './Homepage__Subcomponents.css'

import Post from './Posts/Post'
import Posts_Data from './Posts/Posts_Data'

function PostsSection() {
    return (
        <div className="PostsSection">
            {
                Posts_Data.map(item => {
                    return <Post postData={item} />
                })
            }
        </div>
    )
}

export default PostsSection

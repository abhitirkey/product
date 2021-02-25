import React, {useState, useEffect} from 'react'
import './Homepage__Panels.css'

import Post from './Posts/Post'

import useFirestore from 'Hooks/useFirestore'

function PostsSection() {

    const posts = useFirestore('posts');

    return (
        <div className="PostsSection">
            {posts && posts.map(item => {
                    // console.log(item)
                    return <Post postData={item} />
                })
                
            }
        </div>
    )
}

export default PostsSection

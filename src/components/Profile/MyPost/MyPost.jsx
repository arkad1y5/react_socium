import React, { component } from 'react';
import p from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = () => {
    return (
        <div className={p.post}>
            my post
            <div>
                <textarea></textarea>
                <button>add post</button>
            </div>
            <div className={p.post}>
                <Post />

            </div>
        </div>
    )
}

export default MyPost;
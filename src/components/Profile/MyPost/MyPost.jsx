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
                <Post message=' Hi, how are you?' like='13' />
                <Post message=' Hi, my only post.' like='30' />

            </div>
        </div>
    )
}

export default MyPost;
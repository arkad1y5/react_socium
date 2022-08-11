import React, { component } from 'react';
import NewPost from '../NewPost/NewPost';
import p from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = () => {

    let postData = [
        { id: 1, message: 'Hi, how are you?', likeCount: 13 },
        { id: 2, message: 'Hi, my only post.', likeCount: 30 },
        { id: 2, message: 'Hi, my only post.', likeCount: 30 },
    ]

    let postElement = postData
        .map(p => <Post message={p.message} likeCount={p.likeCount} />);

    return (
        <div className={p.post}>
            <NewPost />
            <div className={p.post}>
                {postElement}
            </div>
        </div>
    )
}

export default MyPost;
import React, { component } from 'react';
import p from './Post.module.css';

const Post = () => {
    return (

        <div className={p.item}>
            <img src='https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg' />
            post1
            <div>
                <span>like</span>
            </div>
        </div>

    )
}

export default Post;
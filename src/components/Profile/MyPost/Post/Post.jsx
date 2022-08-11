import React, { component } from 'react';
import p from './Post.module.css';

const Post = (props) => {


    return (

        <div className={p.item}>
            <div className='flex flex-auto'>
                <img src='https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg' />
                {props.message}
            </div>
            <div>
                <span>👍{props.likeCount}</span>
            </div>
        </div>

    )
}

export default Post;
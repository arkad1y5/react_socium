import React, { component } from 'react';
import MyPost from './MyPost/MyPost';
import p from './Profile.module.css';

const Profile = () => {
    return (
        <div className={p.content}>
            <div className={p.oboi}>
                <img src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300' />
            </div>
            <div>
                <img className={p.ava} src='https://static6.depositphotos.com/1003369/659/i/600/depositphotos_6591667-stock-photo-close-up-of-beautiful-womanish.jpg' />
                <text className={p.opis}>bvkwjbvjk bdljvbsodb vos bdvbs;vbs k;jvbos bvobsd bo dbodb d sjdbo bsdoj</text>
            </div>

            <MyPost />
        </div>
    )
}

export default Profile;
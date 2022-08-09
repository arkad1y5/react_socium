import React, { component } from 'react';
import Description from './Description/Description';
import MyPost from './MyPost/MyPost';
import p from './Profile.module.css';

const Profile = () => {
    return (
        <div className={p.content}>
            <Description />
            <MyPost />
        </div>
    )
}

export default Profile;
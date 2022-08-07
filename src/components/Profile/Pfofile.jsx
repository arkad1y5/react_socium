import React, { component } from 'react';
import MyPost from './MyPost/MyPost';
import p from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <div className={p.oboi}>
                <img src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300' />
            </div>
            <div className={p.ava_and}>
                <div className='flex flex-auto'>
                    <img className={p.ava} src='https://static6.depositphotos.com/1003369/659/i/600/depositphotos_6591667-stock-photo-close-up-of-beautiful-womanish.jpg' />
                    <div>
                        <div className={p.opis}>Pinchuk Arkadiy</div>
                        <div className={p.opis}>Age: 20</div>
                        <div className={p.opis}>Location: Medivka</div>
                    </div>
                </div>

                <MyPost />
            </div>
        </div>
    )
}

export default Profile;